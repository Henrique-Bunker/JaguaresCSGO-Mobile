import React, { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DmsContainer from './Servers/DmsContainer';
import RetakesContainer from './Servers/RetakesContainer';
import PugsContainer from './Servers/PugsContainer';
import OthersContainer from './Servers/OthersContainer';
import { Colors } from '../Styles/global';
import { AdMobRewarded } from 'expo-ads-admob';

const { brand } = Colors;

export default function Servers() {

    const initRewardAds = async () => {
        // Display a rewarded ad
        await AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917");
        await AdMobRewarded.requestAdAsync();
        await AdMobRewarded.showAdAsync();
    };

    useEffect(() => {
        let lucky = Math.floor(Math.random() * 5) + 1;
        if (lucky == Math.floor(Math.random() * 5) + 1) {
            initRewardAds()
        }
    });

    const Tab = createMaterialBottomTabNavigator();

    return (

        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#000"
            barStyle={{ backgroundColor: brand }}
        >
            <Tab.Screen
                name="Deathmatches"
                component={DmsContainer}
                options={{
                    tabBarLabel: 'DMs',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="crosshairs" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Retakes"
                component={RetakesContainer}
                options={{
                    tabBarLabel: 'Retakes',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="bomb" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Matchmaking"
                component={PugsContainer}
                options={{
                    tabBarLabel: 'Pugs',
                    tabBarIcon: ({ color }) => (
                        <Icon name="account-group" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Outros"
                component={OthersContainer}
                options={{
                    tabBarLabel: 'Outros',
                    tabBarIcon: ({ color }) => (
                        <Icon name="animation-outline" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
