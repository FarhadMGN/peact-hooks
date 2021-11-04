import React, {useReducer, useState} from 'react';
import {AlertContext} from "./alert-context";
import {alertReducer} from "./alert-reducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

export const AlertState = ({children}) => {
    // const [alert, setAlert] = useState({
    //     text: '',
    //     type: ''
    // });

    const [state, dispatch] = useReducer(alertReducer, null);

    const hide = () => {
        dispatch({type: HIDE_ALERT})
    };

    const show = (text, type='secondary') => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                text,
                type
            }
        })
    };
    return (
        <AlertContext.Provider value={{
            hide, show, alert: state
        }}>
            { children }
        </AlertContext.Provider>

    )
};

