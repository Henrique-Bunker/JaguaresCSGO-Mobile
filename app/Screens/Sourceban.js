import React, { useEffect, useState } from 'react';
import { FontAwesome, MaterialIcons  } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BansScreen from './Sourcebans/BansScreen';
import CommsScreen from './Sourcebans/CommsScreen';
import { Colors } from '../Styles/global';
import { AdMobRewarded } from 'expo-ads-admob';

const { brand } = Colors;

export default function Sourceban() {

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
                name="Bans"
                component={BansScreen}
                options={{
                    tabBarLabel: 'Bans',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="bullhorn" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Comms"
                component={CommsScreen}
                options={{
                    tabBarLabel: 'Comms',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="block" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Report"
                component={BansScreen}
                options={{
                    tabBarLabel: 'Report',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="local-police" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
