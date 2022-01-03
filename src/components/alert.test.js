import {render} from "@testing-library/react";
import {AlertContext} from "../context/alert/alert-context";
import React from "react";
import {Alert} from "./alert";

test('render alert', () => {
    const hide = () => {
    };

    const alert = {
        text: "TEST ALERT NAME"
    };

    const {getByText} = render(
            <AlertContext.Provider value={{
                hide, alert
            }}>
                <Alert/>
            </AlertContext.Provider>
    );
    const linkElement = getByText("TEST ALERT NAME");
    expect(linkElement).toBeInTheDocument();
});
