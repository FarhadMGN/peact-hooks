import React, {Fragment, useContext, useEffect} from 'react';
import {GithubContext} from "../context/github/github-context";
import {Link} from "react-router-dom";
import {Repos} from "../components/repos";

export const Profile = ({match}) => {
    const {getUser, getRepos, isLoading, user, repos} = useContext(GithubContext);
    const urlName = match.params.name;

    useEffect(() => {
        getUser(urlName);
        getRepos(urlName);
        console.log('effect', urlName);
    }, []);

    if (isLoading) {
        <p className="text-center">loading...</p>
    }

    const {name, company, avatar_url, location, blog, bio, login, html_url, following, followers, public_repos, public_gists} = user;
    return (
        <Fragment>
            <Link to='/' className="btn btn-link">Home page</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img
                                style={{width: '150px'}}
                                src={avatar_url}
                                alt={name}/>
                            <h1>{name}</h1>
                            {location && <p>{location}</p>}

                        </div>
                        <div className="col">
                            {bio &&
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>}
                            <a
                                href={html_url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='btn btn-dark'>Open profile</a>
                            <ul>
                                {
                                    login && <li>
                                        <strong>
                                            Name:
                                        </strong> {login}
                                    </li>
                                }
                                {
                                    company && <li>
                                        <strong>
                                            Company:
                                        </strong> {company}
                                    </li>
                                }
                                {
                                    blog && <li>
                                        <strong>
                                            Website:
                                        </strong> {blog}
                                    </li>
                                }
                            </ul>
                            <div className="badge badge-primary">Followers: {followers}</div>
                            <div className="badge badge-success">Following: {following}</div>
                            <div className="badge badge-info">Repos: {public_repos}</div>
                            <div className="badge badge-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </Fragment>
    )
};

