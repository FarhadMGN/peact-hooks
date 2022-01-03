import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Search} from "./search";
import React from 'react';
import {Home} from "../pages/home";
import TestRenderer from 'react-test-renderer'
import {GithubContext} from "../context/github/github-context";
import ShallowRenderer from 'react-test-renderer/shallow';
import {AlertContext} from "../context/alert/alert-context";
import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

configure({
    adapter: new Adapter()
});

test('render loading', () => {
    const hide = () => {
    };

    const show = (text, type='secondary') => {
    };

    const props = {
        isLoading: true,
        users: []
    };

    render(
        <GithubContext.Provider value={props}>
            <AlertContext.Provider value={{
                hide, show
            }}>
                <Home/>
            </AlertContext.Provider>
        </GithubContext.Provider>
    );
    const loadingElement = screen.getByText(/Loading.../);
    expect(loadingElement).toBeInTheDocument();

    const props2 = {
        isLoading: false,
        users: [
            {
                id: '1',
                avatar_url: '1',
                login: 'Custom User Login'
            },
            {
                id: '2',
                avatar_url: '2',
                login: 'Custom User2 Login'
            }
        ]
    };
    const {getByText} = render(
        <GithubContext.Provider value={props2}>
            <AlertContext.Provider value={{
                hide, show
            }}>
                <BrowserRouter>
                    <Home/>
                </BrowserRouter>
            </AlertContext.Provider>
        </GithubContext.Provider>
    );
    const linkElement = getByText("Custom User Login");
    expect(linkElement).toBeInTheDocument();
    const linkElement2 = getByText("Custom User2 Login");
    expect(linkElement2).toBeInTheDocument();
});
