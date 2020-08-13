import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from '../pages/HomeContainer.page';
import Covicafe from '../pages/Covicafe.page';
import Historia from '../pages/Historia.page';
import NotFound from '../pages/NotFound.page';
import Login from '../pages/Login.page';
import Layout from '../components/Layout.component';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/home" component={HomeContainer} />
                    <Route exact path="/covicafe" component={Covicafe} />
                    <Route exact path="/history" component={Historia} />
                    <Route exact path="/login" component={Login} />
                    {/* <Route exact path="/users" component={HomeContainer} /> */}
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;