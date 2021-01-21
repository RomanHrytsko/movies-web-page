import React from 'react'
import './App.css';
import {BaseLayout} from "./layouts";
import {Home,MovieDetails} from "./pages";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    withRouter
} from "react-router-dom";


function App() {
    const history = useHistory()
    return (

        <BaseLayout>
            <Switch>
                <Route path={'/'} exact>
                    <Home/>
                </Route>
                <Route path={'/movie/:id'} exact>
                    <MovieDetails/>
                </Route>
                <Route>
                    <h1>PAGE NOT FOUND <button onClick={() => history.push('/')}>go home</button></h1>
                </Route>
                <Home/>
            </Switch>
        </BaseLayout>
    );
}

export default App;
