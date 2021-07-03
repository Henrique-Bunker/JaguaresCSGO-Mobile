import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { TouchableOpacity, Image, Text, SafeAreaView, StyleSheet, Linking, ActivityIndicator } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../Screens/MainScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Servers from '../Screens/Servers';
import Sourceban from '../Screens/Sourceban';
import Rank from '../Screens/Rank';
import Vip from '../Screens/VipScreen';
import { avatarUrlEndpoint } from '../../env';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import {
    LoadingView
} from '../Styles/global';
import {
    SubMenuContainer,
    SubMenuItem,
    SubMenuItemContent
} from '../Styles/serverstyle';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Login from '../Screens/Login';
import { DrawerContent } from '../Screens/SidebarContent';
import { Colors } from '../Styles/global';

const { primary, secondary, brand, greydark, greylight, purpledark, purplelight, graysoft, black } = Colors;
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function Route() {

    return (
        <NavigationContainer>
            <Drawer.Navigator
                    initialRouteName={'Login'}
                    drawerContent={props => <DrawerContent {...props} />}
                /*
                drawerStyle={{
                    backgroundColor: '#0d0e1b',
                    width: 240,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    width: 200
                }}
                drawerContentOptions={{
                    activeTintColor: '#ff7a21',
                    inactiveTintColor: 'white',
                    activeBackgroundColor: '#3e3f5e',
                    labelStyle: {

                    }

                }}
                */
                >
                    <Drawer.Screen name="Login" component={LoginScreen} options={{ swipeEnabled: false }} />
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Profile" component={Profile} />
                    <Drawer.Screen name="Servidores" component={ServerStatus} />
                    <Drawer.Screen name="Rank" component={ServerRank} />
                    <Drawer.Screen name="Vip" component={ServerVip} />
                    <Drawer.Screen name="Sourceban" component={ServerBans} />

                </Drawer.Navigator>
            

        </NavigationContainer>
    );
}

export default Route;

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

function HomeScreen({ navigation }) {
    return (

        <SafeAreaView style={styles.container}>
            <Stack.Navigator
            >
                <Stack.Screen
                    name="Home"
                    component={MainScreen}
                    options={{

                        title: (

                            <Image style={{ height: 90, width: 90 }} source={require('../assets/logo.png')} />

                        ),
                        headerTitleStyle: { flex: 1, textAlign: 'center', position: 'relative', paddingBottom: 40, paddingTop: 10 },

                        headerRight: () => (
                            <Text></Text>
                        ),

                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Entypo
                                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                    name="menu"
                                    size={30}
                                    color="black"
                                />
                            </TouchableOpacity>
                        ),

                        headerStyle: { backgroundColor: primary }
                    }}
                />
            </Stack.Navigator>
        </SafeAreaView>

    );
}

function Profile({ navigation }) {
    
    return (

        <SafeAreaView style={styles.container}>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{

                        title: (

                            <Image style={{ height: 90, width: 90 }} source={require('../assets/logo.png')} />

                        ),
                        headerTitleStyle: { flex: 1, textAlign: 'center', position: 'relative', paddingBottom: 40, paddingTop: 10 },

                        headerRight: () => (
                            <Text></Text>
                        ),

                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Entypo
                                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                    name="menu"
                                    size={30}
                                    color="black"
                                />
                            </TouchableOpacity>
                        ),

                        headerStyle: { backgroundColor: primary }
                    }}
                />
            </Stack.Navigator>
        </SafeAreaView>

    );
}

function ServerRank({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Servers"
                    component={Rank}
                    options={{
                        title: (

                            <Image style={{ height: 90, width: 90 }} source={require('../assets/logo.png')} />

                        ),
                        headerTitleStyle: { flex: 1, textAlign: 'center', position: 'relative', paddingBottom: 40, paddingTop: 10 },

                        headerRight: () => (
                            <Text />
                        ),

                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Entypo
                                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                    name="menu"
                                    size={30}
                                    color="black"
                                />
                            </TouchableOpacity>
                        ),

                        headerStyle: { backgroundColor: primary }
                    }}
                />

            </Stack.Navigator>
        </SafeAreaView>
    );
}

function ServerVip({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Vip"
                    component={Vip}
                    options={{
                        title: (

                            <Image style={{ height: 90, width: 90 }} source={require('../assets/logo.png')} />

                        ),
                        headerTitleStyle: { flex: 1, textAlign: 'center', position: 'relative', paddingBottom: 40, paddingTop: 10 },

                        headerRight: () => (
                            <Text />
                        ),

                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Entypo
                                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                    name="menu"
                                    size={30}
                                    color="black"
                                />
                            </TouchableOpacity>
                        ),

                        headerStyle: { backgroundColor: primary }
                    }}
                />

            </Stack.Navigator>
        </SafeAreaView>
    );
}

function ServerStatus({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Servers"
                    component={Servers}
                    options={{
                        title: (

                            <Image style={{ height: 90, width: 90 }} source={require('../assets/logo.png')} />

                        ),
                        headerTitleStyle: { flex: 1, textAlign: 'center', position: 'relative', paddingBottom: 40, paddingTop: 10 },

                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <MaterialIcons
                                    //onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                    name="refresh"
                                    size={30}
                                    color="black"
                                />
                            </TouchableOpacity>
                        ),

                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Entypo
                                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                    name="menu"
                                    size={30}
                                    color="black"
                                />
                            </TouchableOpacity>
                        ),

                        headerStyle: { backgroundColor: primary }
                    }}
                />

            </Stack.Navigator>
        </SafeAreaView>
    );
}




function ServerBans({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Servers"
                    component={Sourceban}
                    options={{
                        title: (

                            <Image style={{ height: 90, width: 90 }} source={require('../assets/logo.png')} />

                        ),
                        headerTitleStyle: { flex: 1, textAlign: 'center', position: 'relative', paddingBottom: 40, paddingTop: 10 },

                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <MaterialIcons
                                    //onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                    name="refresh"
                                    size={30}
                                    color="black"
                                />
                            </TouchableOpacity>
                        ),

                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 15 }}>
                                <Entypo
                                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                                    name="menu"
                                    size={30}
                                    color="black"
                                />
                            </TouchableOpacity>
                        ),

                        headerStyle: { backgroundColor: primary }
                    }}
                />

            </Stack.Navigator>
        </SafeAreaView>
    );
}


function LoginScreen({ navigation }) {

    return (

        <SafeAreaView style={styles.container}>
            <Stack.Navigator
                screenOptions={{
                    headerStyled: {
                        backgroundColor: 'transparent'
                    },

                }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: (

                            <Image style={{ height: 90, width: 90 }} source={require('../assets/logo.png')} />

                        ),
                        headerTitleStyle: { flex: 1, textAlign: 'center', position: 'relative', paddingBottom: 40, paddingTop: 10 },
                        headerStyle: { backgroundColor: primary }
                    }}
                />
            </Stack.Navigator>
        </SafeAreaView>

    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    headerLogo: {
        height: 32,
        width: 32,
    }
});