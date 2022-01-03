import { render } from '@testing-library/react';
import {Card} from './card'
import {BrowserRouter} from "react-router-dom";
import React from "react";

test('renders General tab', () => {
    const props = {
        id: '1',
        avatar_url: '1',
        login: 'User Login'
    };
    const {getByText} = render(
        <BrowserRouter>
            <Card user={props}/>
        </BrowserRouter>);
    const linkElement = getByText("User Login");
    expect(linkElement).toBeInTheDocument();
    const openButtonElement = getByText(/^Open/);
    expect(openButtonElement).toBeInTheDocument();
});
