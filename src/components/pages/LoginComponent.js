import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';


const LoginComponent = () => (
    <div className={'ui container'}>
        <h1>Login page</h1>

        <LoginForm />
    </div>
);

export default LoginComponent;