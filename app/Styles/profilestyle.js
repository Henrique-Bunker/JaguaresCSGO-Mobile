import styled from 'styled-components';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from './global';

const { primary, secondary, brand, greydark, greylight, purpledark, purplelight, graysoft, black } = Colors;

export const StyledContainer = styled.View `
    flex: 1;
    background-color: ${secondary};

`;

export const HeaderContainer = styled.View `
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    
`;

export const TitleContainer = styled.View `
    align-items: center;
    padding-top: 5px;
    padding-bottom: 10px;
    
`;


export const HeaderView = styled.View `
    padding-left: 20px;
    padding-bottom: 15px;
    border_bottom_right_radius: 30px;
    border_bottom_left_radius: 30px;
    backgroundColor: ${primary};
    marginBottom: 30px;
    shadow-color: ${black};
    shadowOpacity: 0.44;
    shadowRadius: 10.32px;
    elevation: 5;
`;

export const ContentView = styled.View `

    height: ${hp('100%')}px;
    padding-left: 20px;
    padding-bottom: 15px;
    border_top_right_radius: 30px;
    border_top_left_radius: 30px;
    backgroundColor: ${secondary}
`;

export const UserResumeView = styled.View `
    flex-direction: row; 
    margin-top: 25px;
`;

export const ScrollContainer = styled.ScrollView `
    backgroundColor: ${secondary};  
`;

export const SmallBlock = styled.View `
    width: ${wp('42%')}px;
    height: 190px;
    border-radius: 10px;
    background-color: ${primary};
    shadow-color: ${black};
    shadowOpacity: 0.44;
    shadowRadius: 10.32px;
    elevation: 5;
    align-items: center;
`;

export const LargeBlock = styled.View `
    width: 100%;
    height: 150px;
    border-radius: 10px;
    background-color: ${primary};
    shadow-color: ${black};
    shadowOpacity: 0.44;
    shadowRadius: 10.32px;
    elevation: 5;
`;

export const RowLine = styled.View `
    flexDirection: row;
`;

export const IconBlock = styled.View `
    width: 22px;
    justify-content: center;
    padding-left: 5px;
`;

export const RankBlock = styled.View `
    flexDirection: row;
    width: 75%;
    padding-right: 2px;
    justify-content: space-between;
`;

export const RowDouble = styled.View `
    flexDirection: row;
    justify-content: space-between;
    marginBottom: 20px;
`;

export const RowSingle = styled.View `
    flexDirection: row;
    justify-content: center;
    marginBottom: 20px;
`;

export const ContentBox = styled.View `
    margin: 20px;
`;

export const AdBlock = styled.View `
    bottom: 0px;
    justify-content: flex-end;
`;

export const CenterText = styled.Text `
    alignItems: center;
`;