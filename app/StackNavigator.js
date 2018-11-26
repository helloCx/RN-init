import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import TabNavigator from "./TabNavigator";


const Stack = createStackNavigator(
    {
        Main: {
            screen: TabNavigator,
            defaultNavigationOptions: () => ({
                header: null,
                headerBackTitle:"返回"
            })
        }
    },
    {
        initialRouteName: 'Main'
    }
    )
;

export const StackNavigator = createAppContainer(Stack);


