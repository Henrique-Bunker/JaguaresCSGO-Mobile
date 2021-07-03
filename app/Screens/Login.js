import React, { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Linking, Alert, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import {
    Colors,
    StyledContainer,
    InnerContainer,
    PageTitle,
    PageSubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    LoadingView
} from '../Styles/global';
import { View } from 'react-native';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {LoginText} from '../../env';


const { brand, greydark } = Colors;

async function saveCreds(key, value) {
    await SecureStore.setItemAsync(key, value);
}


const Login = (props) => {


    const [hidePassword, setHidePassword] = useState(true);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getValueFor('steamid64')
    });

    /**
     * Valida se usuario ja possui dados de usuarios salvos no dispositivo
     * @param string key 
     */
    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key)
        if (result) {
            props.navigation.navigate('Home')
        } else {
            setLoading(false)
        }
    }


    /**
     * Função para fazer autenticação do usuario
     */
    postData = async (email, password) => {
        try {
            let res = await fetch('https://jaguarescsgo.com.br/api/v1/login/mobile', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            });
            res = await res.json();
            if (res[0].error) {
                Alert.alert(LoginText.alert.title, res[0].error);
            }
            if (res[0].steamid64) {
                saveCreds('steamid64', res[0].steamid64)
                saveCreds('steamidrank', res[0].steamidrank)
                saveCreds('steamidvip', res[0].steamidvip)
                saveCreds('username', res[0].username)
                saveCreds('avatarurl', res[0].avatarurl)
                props.navigation.navigate('Home')
            }

        } catch (e) {
            console.error(e);
            Alert.alert(LoginText.critical.title, LoginText.critical.content);
        }
    }



    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer style={{ flex: 1, height: hp('100%') - 80 }}>
                {isLoading ? <LoadingView>
                    <ActivityIndicator size="large" color={brand} />
                </LoadingView> :
                    (<InnerContainer>
                        <PageTitle>Jaguares CSGO</PageTitle>
                        <PageSubTitle>Community</PageSubTitle>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values) => {
                                postData(values.email, values.password)
                                values.email = ''
                                values.password = ''

                            }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                                <StyledFormArea>
                                    <MyTextInput
                                        label="E-mail"
                                        icon="email"
                                        placeholder="jaguares@email.com"
                                        placeholderTextColor={greydark}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        keyboardType="email-address"
                                    />
                                    <MyTextInput
                                        label="Senha"
                                        icon="lock"
                                        placeholder="******"
                                        placeholderTextColor={greydark}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={hidePassword}
                                        isPassword={true}
                                        hidePassword={hidePassword}
                                        setHidePassword={setHidePassword}
                                    />
                                    <MsgBox>...</MsgBox>
                                    <StyledButton
                                        cat={'login'}
                                        onPress={handleSubmit}>
                                        <ButtonText>
                                            Login
                                </ButtonText>
                                    </StyledButton>
                                    <Line />
                                    <StyledButton
                                        cat={'register'}
                                        onPress={() => Linking.openURL('https://jaguarescsgo.com.br/auth/steam')}>
                                        <ButtonText>
                                            Registrar
                                </ButtonText>
                                    </StyledButton>
                                </StyledFormArea>)}
                        </Formik>
                    </InnerContainer>)}
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};


const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <MaterialIcons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={brand} />
                </RightIcon>
            )}
        </View>);
};

export default Login;