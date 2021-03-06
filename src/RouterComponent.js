import React from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from "./components/EmployeeCreate";

const RouterComponent = () => {
    return (
        <Router sceneStyle={{paddingTop: 65}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login"/>
            </Scene>

            <Scene key="main" initial>
                <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Employee create" />
            </Scene>
        </Router>
    )
};

export default RouterComponent;