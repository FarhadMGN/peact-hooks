import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alert-context";
import {GithubContext} from "../context/github/github-context";

export const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const {show, hide} = useContext(AlertContext);
    const github = useContext(GithubContext);


    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return;
        }
        github.clearUsers();
        if (searchValue.trim() !== '') {
            github.searchUser(searchValue.trim());
            hide();
        } else {
            show('Type some text!');
        }

    };
    return (
        <div className='form-group'>
            <input
                type="text"
                className="form-control"
                placeholder="Type user name"
                onChange={event => setSearchValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
};

