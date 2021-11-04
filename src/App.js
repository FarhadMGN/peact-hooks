import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar} from "./components/navbar";
import {Home} from "./pages/home";
import {Profile} from "./pages/profile";
import {About} from "./pages/about";
import {Alert} from "./components/alert";
import {AlertState} from "./context/alert/alert-state";
import {GithubState} from "./context/github/github-state";

// export const AlertContext = React.createContext<boolean>({} as boolean);

function App() {

    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert alert={{text: 'hay'}}/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/about' component={About}/>
                            <Route path='/profile/:name' component={Profile}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
  );
}

export default App;
