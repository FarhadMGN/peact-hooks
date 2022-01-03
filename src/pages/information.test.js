import { render } from '@testing-library/react';
import React from "react";
import {About} from "./about";

test('information page should contain git link and information', () => {
    const {getByText} = render(<About/>);
    const linkElement = getByText("Git link");
    expect(linkElement).toBeInTheDocument();
    const versionElement = getByText(/^App Version/);
    expect(versionElement).toBeInTheDocument();
    const titleElement = getByText(/^Information/);
    expect(titleElement).toBeInTheDocument();
});
