import styled from 'styled-components';
import { View } from 'react-native';
import { Colors } from './global';

const { primary, secondary, brand, greydark, greylight, purpledark, purplelight, graysoft, black } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    background-color: ${primary}
`;

export const SidebarConteiner = styled.View`
    flex: 1;
`;

export const HeaderView = styled.View`
    padding-left: 20px;
`;

export const PreferenceView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-vertical: 12px;
    padding-horizontal: 16px;
`;

export const UserResumeView = styled.View`
    flex-direction: row; 
    margin-top: 15px;
`;

export const UserSocialView = styled.View`
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
`;

export const SocialRowView = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
`;