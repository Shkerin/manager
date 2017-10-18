import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './RouterComponent';

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
                <RouterComponent />
            </Provider>
        )
    }
}

export default App;