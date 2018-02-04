import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

class LoginComponent extends React.Component {

    submit = data => this.props.login(data).then(() => this.props.history.push('/'));

    render() {
        return(
            <div className={'ui container'}>
                <h1>Login page</h1>

                <LoginForm submit={this.submit}/>
            </div>
        )
    }
}

LoginComponent.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginComponent);