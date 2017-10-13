import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyD2qQaHwisNMSiD_t1HbxmMkCpLJcEs9i0",
            authDomain: "manager-29ea0.firebaseapp.com",
            databaseURL: "https://manager-29ea0.firebaseio.com",
            projectId: "manager-29ea0",
            storageBucket: "manager-29ea0.appspot.com",
            messagingSenderId: "161910135186"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View>
                    <LoginForm/>
                </View>
            </Provider>
        )
    }
}

export default App;