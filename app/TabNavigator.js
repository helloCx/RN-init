import React, {Component} from "react";
import {createBottomTabNavigator} from "react-navigation";
import Icon from "react-native-vector-icons/AntDesign";
import Home from "./main/home/Home";

let Main;
export default Main = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
             navigationOptions: {
                tabBarLabel: "首页",
                tabBarIcon: ({focused, tintColor}) => (
                    <Icon name='home' size={25} color="#ffffff"/>
                )
            }
        }
    },
    {
        tabBarOptions: {
            tabBarPosition: 'bottom',
            activeTintColor:'#44fff3',
            inactiveTintColor: '#ffffff',
            style: {
                backgroundColor: '#ff5000',
                paddingBottom: 1,
                borderTopWidth: 0.2,
                paddingTop:0.5,
                borderTopColor: '#ccc',
                marginBottom:-5
            }
        }
    })
