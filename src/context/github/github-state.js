import {GithubContext} from "./github-context";
import React, {useReducer} from 'react';
import {githubReducer} from "./github-reducer";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const url = `https://api.github.com`;
const setCredentials = (url) => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
};

export const GithubState = ({ children }) => {
    const initialGithubState = {
        user: {},
        users: [],
        isLoading: false,
        repos: []
    };
    const [state, dispatch] = useReducer(githubReducer, initialGithubState);

    const searchUser = async (value) => {
        setLoading();
        const resp = await axios.get(setCredentials(url + `/search/users?q=${value}&`));
        const data = resp.data.items;
        dispatch({
            type: SEARCH_USERS,
            payload: data || []
        })
    };

    const getUser = async name => {
        setLoading();
        const resp = await axios.get(setCredentials(url + `/users/${name}?`));
        const data = resp.data;
        dispatch({
            type: GET_USER,
            payload: data
        })
    };

    const getRepos = async name => {
        setLoading();
        const resp = await axios.get(setCredentials(url + `/users/${name}/repos?per_page=5&`));
        const data = resp.data;
        dispatch({
            type: GET_REPOS,
            payload: data
        })
    };

    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS,
        })
    };

    const setLoading = () => {
        dispatch({
            type: SET_LOADING,
        })
    };

    const {user, users, repos, isLoading} = state;

    return (
        <GithubContext.Provider value={{
            searchUser,
            setLoading,
            getRepos,
            getUser,
            clearUsers,
            user,
            users,
            repos,
            isLoading
        }}>
            { children }
        </GithubContext.Provider>
    )
};
