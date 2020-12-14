import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginComponent from '../screens/loginScreen/LoginComponent';
import RegisterComponent from '../screens/registerScreen/RegisterComponent';
import TermsOfServiceComponent from '../screens/termsOfService/TermsOfServiceComponent';
import NewUserRegistrationComponent from '../screens/newUserRegistration/NewUserRegistrationComponent'

const Stack = createStackNavigator();
const LoginStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginComponent}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="Register User" component={RegisterComponent} />
        <Stack.Screen name="Terms Of Service" component={TermsOfServiceComponent} />
        <Stack.Screen name="New User Registration" component={NewUserRegistrationComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginStack;