import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {WelcomePage} from "./pages";
import {Header} from "./components";

function App() {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <Header/>

                    <div className="col p-0">
                        <Route path="/my-site/" exact component={WelcomePage}/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
