import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/404';
import Header from '../components/Header';
import AddExpensePage from '../components/AddExpensePage'
import ExpanseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/Header'
import EditPage from '../components/EditExpense'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpanseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch> 
        </div>
    </BrowserRouter>
)

export default AppRouter;