import styled from 'styled-components';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export const Colors = {
    primary: '#f5f9f9',
    secondary: '#fff',
    'graysoft': '#f5f9f9',
    'brand': '#ffa11a',
    'greydark': '#c3c3c3',
    'greylight': '#e7e7e7',
    'purpledark': '#131324',
    'purplelight': '#6b739c',
    'black': '#000'
};

const { primary, secondary, brand, greydark, greylight, purpledark, purplelight, graysoft, black } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: 60px;
    backgroundColor: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding-top: 20px;
`

export const PageSubTitle = styled.Text`
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    color: ${purpledark};
    padding-bottom: 20px;
`

export const StyledFormArea = styled.View`
    width: 90%
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${greylight};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${brand};
`;

export const StyledInputLabel = styled.Text`
    color: ${brand};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.cat == 'register' && `
        background-color: ${purplelight};
    `}
    ${(props) => props.cat == 'login' && `
        background-color: ${brand};
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${greydark};
    margin-vertical: 10px;
`;

export const LoadingView = styled.View`
    paddingTop: 10px;
    justify-content: flex-start;
`;