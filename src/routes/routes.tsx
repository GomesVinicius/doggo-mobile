import React, { useEffect } from 'react';

import Login from '../pages/Login/index';
import Rates from '../pages/Rates/index';
import ChangePassword from '../pages/ChangePassword/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IconHeader from '../components/IconHeader/IconHeader';

const Routes = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{  }}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={
                        { headerShown: false }
                    }
                />
                <Stack.Screen
                    name="Rates"
                    component={Rates}
                    options={() => ({
                        headerRight: () => (
                            <IconHeader />
                        ),
                        headerLeft: () => (<></>),
                        title: 'Notas'
                    })}
                />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePassword}
                    options={
                        { title: 'Alterar Senha' }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
