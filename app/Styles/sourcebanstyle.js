import styled from 'styled-components';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Colors } from './global';

const { primary, secondary, brand, greydark, greylight, purpledark, purplelight, graysoft, black } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    height: 100%;
    width: 100%;
    alignItems: center;
    backgroundColor: ${primary};
            
`;

export const Tabbing = styled.View`
    padding-top: 40px;
    backgroundColor: ${primary};
`;

export const Title = styled.View`
    justify-content: center;
    align-items: center;
`;

export const PlayerRow = styled.View`
    height: 100%;
    flexDirection: row;
    justify-content: space-around;
`;

export const RankTouchable = styled.TouchableOpacity`
    flex-direction: row; 
    align-items: center;
    width: 100%;
`;