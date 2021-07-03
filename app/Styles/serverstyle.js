import styled from 'styled-components';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from './global';
import {
    useFonts,
    CrimsonText_600SemiBold,
  } from '@expo-google-fonts/crimson-text';

const { primary, secondary, brand, greydark, greylight, purpledark, purplelight, graysoft, black } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    backgroundColor: ${primary};
    justifyContent: flex-start;
    alignItems: center;
            
`

export const AdContainer = styled.View`
    
    alignItems: center;
    marginBottom: 20px;
    flex-direction: row;
    ${(props) => props.CustomWidht && `
        width: ${props.CustomWidht}px;
    `}
`

export const SubMenuItem = styled.TouchableOpacity`
    
    height: 100%;
    alignItems: center;
    justifyContent: space-between;
    flexDirection: row;
    backgroundColor: ${greydark};
`

export const SubMenuItemContent = styled.Text`
    
    color: ${purpledark}
`
export const Tabbing = styled.View`
    padding-top: 40px;
    backgroundColor: ${primary};
`;

export const MapImage = styled.Image`
    height: 60px;
    width: 100%;
    border_top_right_radius: 5px;
    border_top_left_radius: 5px;
    margin-bottom: 3px;
    
`;

export const ServerDetailsContainer = styled.View`
    height: 90px;
    width: 100%;
`;

export const ServerRowContainer = styled.View`
    margin-top: 20px;
    marginBottom: 30px;
    justifyContent: space-between;
    alignItems: center;
`;

export const ServerContainer = styled.View`
    height: 150px;
    width: 165px;
    backgroundColor: ${graysoft};
    borderRadius: 5px;
    elevation: 5;
    margin: 8px;
    flex-direction: column;
`;

export const ServerTitle = styled.Text`
    color: ${primary};
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 20px;
    left: 5px;
    
`;

export const Line = styled.View`
    height: 1px;
    width: 165px;
    background-color: ${greydark};
    margin-vertical: 5px;
    
`;

export const ServerDetailItem = styled.Text`
    font-size: 14px;
    left: 10px;
`;

export const ServerMap = styled.Text`

`;

export const ServerSlots = styled.Text`

`;

export const ServerIP = styled.Text`

`;