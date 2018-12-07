import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router-dom';

export const ADD_ISSUE = "ADD_ISSUE";
export const REMOVE_ISSUE = "REMOVE_ISSUE";
export const GET_ISSUES = "GET_ISSUES";
export const EDIT_ISSUES = "EDIT_ISSUES";
export const FILTER_ISSUES= "FILTER_ISSUES";
export const DISPLAY_COLUMN_ISSUES = "DISPLAY_COLUMN_ISSUES";
export const SEARCH_ISSUES = "SEARCH_ISSUES";


export function handleAdd(task){

    return {
        type: ADD_ISSUE,
        task
    }
}

export function handleEdit(issue){

    return {
        type: EDIT_ISSUES,
        issue
    }
}

export function handleRemove(id){
    return {
        type: REMOVE_ISSUE ,
        id
    }
}

export function handleIssues(data){
    return {
        type: GET_ISSUES ,
        data
    }
}


export function handleFilter(data){
    return {
        type: FILTER_ISSUES ,
        data
    }
}

export function handleDisplay(data){
    return {
        type: DISPLAY_COLUMN_ISSUES,
        data
    }
}

export function handleSearch(data){
    return {
        type: SEARCH_ISSUES,
        data
    }
}


export function getIssues(){
    return dispatch => {
        return fetch("http://localhost:3240/api/")
        .then(res => res.json())
        .then(data => dispatch(handleIssues(data)))
        .catch(err => console.log(err))
    }
}

export function addIssue(task){
    
    return dispatch => {
        return axios.post('/api/',task)
        .then(res=>console.log(res))
        .then(data => dispatch(handleAdd(data)))
        .catch(err => console.log(err));
    };
}

export function editIssue(issue){

    return dispatch => {
        return axios.put(`/api/${issue._id}`,issue)
        .then(res=> <Redirect to="/issues" />)
        .catch(err => console.log(err));
    };
}


export function removeIssue(id){
    return dispatch => {
        return fetch(`/api/${id}`, {method: "DELETE"})
        .then(res => res.json())
        .then(data => dispatch(handleRemove(id)))
        .catch(err => console.log(err))
    }
}

export function filterIssues(filterData){    
    return dispatch => { dispatch(handleFilter(filterData))  };
}

export function displayColumnIssues(filterData){    
    return dispatch => { dispatch(handleDisplay(filterData))  };
}
export function displaySearchIssues(searchData){    
    return dispatch => { dispatch(handleSearch(searchData))  };
}


