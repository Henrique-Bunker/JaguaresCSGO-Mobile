import styled from "styled-components";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "./global";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const {
    primary,
    secondary,
    brand,
    greydark,
    greylight,
    purpledark,
    purplelight,
    graysoft,
    black,
} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    height: ${hp("100%")}px;
    width: 100%;
    alignitems: center;
    backgroundcolor: ${primary};
`;

export const MarginContainer = styled.View`
    marginleft: 20px;
    marginright: 20px;
`;

export const VipImage = styled.Image`
    margintop: 60px;
    marginbottom: 20px;
    alignitems: center;
    width: 150px;
    height: 150px;
`;
