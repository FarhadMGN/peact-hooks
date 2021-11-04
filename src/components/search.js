import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/alert-context";

export const Search = () => {
    const {show} = useContext(AlertContext);
    const onSubmit = (event) => {
        if (event.key === 'Enter') {
            show('New alert')
        }

    };
    return (
        <div className='form-group'>
            <input
                type="text"
                className="form-control"
                placeholder="Type user name"
                onKeyPress={onSubmit}
            />
        </div>
    )
};

