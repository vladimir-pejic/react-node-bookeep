import React from 'react';
import LoginForm from '../forms/LoginForm';

class LoginComponent extends React.Component {

    submit = data => {
        console.log(data);
    };

    render() {
        return(
            <div className={'ui container'}>
                <h1>Login page</h1>

                <LoginForm submit={this.submit}/>
            </div>
        )
    }
}

export default LoginComponent;