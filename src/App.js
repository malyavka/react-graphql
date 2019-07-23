import { Route, NavLink, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import Home from "./components/Home";
import Contact from "./components/single-contact";
import CreateContact from "./components/create-contact";


const App = () => {
    return (

        <BrowserRouter>
            <div>
                <main>
                    <h1>Your contacts</h1>
                </main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add" component={CreateContact} />
                    <Route exact path="/:id" component={Contact} />

                </Switch>
            </div>

        </BrowserRouter>
    )
}
export default App;
