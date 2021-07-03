import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet, ActivityIndicator, Alert, BackHandler } from 'react-native';
import { Links } from '../../env';
import {
    StyledContainer,
    SidebarConteiner,
    HeaderView,
    PreferenceView,
    UserResumeView,
    UserSocialView,
    SocialRowView
} from '../Styles/sidebarstyle';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    LoadingView,
    Colors
} from '../Styles/global';

const { brand } = Colors;
const { avatarUrlEndpoint, unknownProfileUrl } = Links;

export function DrawerContent(props) {

    const [isLoading, setLoading] = useState(true);
    const [username, setUserName] = useState();
    const [avatar, setAvatar] = useState();
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    backPressed = () => {
        Alert.alert(
          'Exit App',
          'Do you want to exit?',
          [
            {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'Yes', onPress: () => BackHandler.exitApp()},
          ],
          { cancelable: false });
          return true;
      }

    function getUserData() {
        SecureStore.getItemAsync('username').then(value => {
            setUserName(value)
            SecureStore.getItemAsync('avatarurl').then(value => {
                if (value) {
                    if (value.length > 3) {
                        setAvatar(avatarUrlEndpoint + value)
                    } else {
                        console.log(value);
                        setAvatar(unknownProfileUrl)
                    }
                    setLoading(false)
                }

            })
        })
    }

    async function deleteCreds() {
        SecureStore.deleteItemAsync("steamid64")
        SecureStore.deleteItemAsync("steamidrank")
        SecureStore.deleteItemAsync("steamidvip")
        SecureStore.deleteItemAsync("username")
        SecureStore.deleteItemAsync("avatarurl")
        backPressed
        props.navigation.navigate('Login')
    }

    getUserData()

    return (

        <StyledContainer>
            {isLoading ? <LoadingView>
                <ActivityIndicator size="large" color={brand} />
            </LoadingView> :
                (
                    <DrawerContentScrollView {...props}>
                        <SidebarConteiner>
                            <HeaderView>
                                <UserResumeView>
                                    <Avatar.Image
                                        source={{
                                            uri: avatar
                                        }}
                                        size={50}
                                    />
                                    <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                        <Title style={styles.title}>{username}</Title>
                                        <Caption style={styles.caption}>HenriK</Caption>
                                    </View>
                                </UserResumeView>
                                <UserSocialView>
                                    <SocialRowView>
                                        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                        <Caption style={styles.caption}>Following</Caption>
                                    </SocialRowView>
                                    <SocialRowView>
                                        <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                        <Caption style={styles.caption}>Follower</Caption>
                                    </SocialRowView>
                                </UserSocialView>
                            </HeaderView>
                            <Drawer.Section style={styles.drawerSection}>
                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="home-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                    label="Home"
                                    onPress={() => props.navigation.navigate('Home')}
                                />
                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="account"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                    label="Perfil"
                                    onPress={() => props.navigation.navigate('Profile')}
                                />
                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="server"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                    label="Servidores"
                                    onPress={() => props.navigation.navigate('Servidores')}
                                />
                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="format-list-numbered"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                    label="Rank"
                                    onPress={() => props.navigation.navigate('Rank')}
                                />
                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="account-star-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                    label="Vip"
                                    onPress={() => { props.navigation.navigate('Vip') }}
                                />
                                <DrawerItem icon={({ color, size }) => (
                                    <Icon
                                        name="police-badge-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                    label="Bans"
                                    onPress={() => { props.navigation.navigate('Sourceban') }}
                                />
                            </Drawer.Section>
                            <Drawer.Section title="Preferences">
                                <TouchableRipple onPress={() => { toggleTheme() }}>
                                    <PreferenceView>
                                        <Text>Tema escuro</Text>
                                        <View pointerEvents="none">
                                            <Switch value={isDarkTheme} />
                                        </View>
                                    </PreferenceView>
                                </TouchableRipple>
                            </Drawer.Section>
                        </SidebarConteiner>
                    </DrawerContentScrollView>)}

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={({ color, size }) => (
                    <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                    />
                )}
                    label="Sair"
                    onPress={deleteCreds}

                />
            </Drawer.Section>
        </StyledContainer>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },

    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
});