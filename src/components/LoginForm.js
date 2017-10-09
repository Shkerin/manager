import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from './common';
import { connect } from 'react-redux';
import {emailChanged} from '../actions'

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        Label="Password"
                        placeholder="password"
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    };
};

export default connect(mapStateToProps, {emailChanged})(LoginForm)