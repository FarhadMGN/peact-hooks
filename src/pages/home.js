import React, {Fragment} from 'react';
import {Search} from "../components/search";
import {Card} from "../components/card";
import {GithubContext} from "../context/github/github-context";
import {useContext} from 'react';

export const Home = () => {
    const { isLoading, users } = useContext(GithubContext);
    console.log(users);
    return (
        <Fragment>
            <Search/>

            <div className="row pt-3">
                { isLoading ?
                <p>Loading...</p> :
                    users.map((user) => {
                        return (
                            <div className="col-sm-4 mb-4" key={user.id}>
                                <Card user={user}/>
                            </div>
                        )})
                }
            </div>
        </Fragment>
    )
};

