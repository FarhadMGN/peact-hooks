import React, {Fragment} from 'react';
import {Search} from "../components/search";
import {Card} from "../components/card";

export const Home = () => {
    const cards = new Array(5).fill('').map((_,idx) => idx);
    return (
        <Fragment>
            <Search/>

            <div className="row pt-3">
                { cards.map((card) => {
                    return (
                        <div className="col-sm-4 mb-4" key={card}>
                            <Card/>
                        </div>
                    )}) }
            </div>
        </Fragment>
    )
};

