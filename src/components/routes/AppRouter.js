import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import  LoginScreen  from '../../components/auth/LoginScreen';
import CalendarScreen from '../../components/calendar/CalendarScreen';


export default function AppRouter(){
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/" component={CalendarScreen} />

                    {/* Caso o Usuario digite alguma rota que não existe */}
                    <Redirect to="/" />
                    
                </Switch>
            </div>
        </Router>
    )
} 