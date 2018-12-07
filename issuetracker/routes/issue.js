var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/mydb');

mongoose.connect('mongodb://localhost:27017/issuetracker', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

var router = express.Router();

router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.json({ type: 'application/*+json' }));
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router.use(express.static(path.join(__dirname, 'public')));

var IssueSchema = new mongoose.Schema({
  Id: String,
  CreatedDate: String,
  Description: String,
  Severity: String,
  Status: String,
  ResolvedDate: { type: Date, default: Date.now },
  });

  var Issue = mongoose.model('Issue', IssueSchema);


/* GET ALL ISSUES */
router.get('/', function(req, res, next) {
  Issue.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE ISSUE BY ID */
router.get('/:id', function(req, res, next) {
  Issue.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE ISSUE */
router.post('/', function(req, res, next) {
  Issue.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE ISSUE */
router.put('/:id', function(req, res, next) {
  Issue.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE ISSUE */
router.delete('/:id', function(req, res, next) {
  Issue.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
