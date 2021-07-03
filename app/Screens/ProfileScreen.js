import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Linking,
    Image,
    ActivityIndicator,
    StyleSheet,
} from "react-native";
import {
    Octicons,
    FontAwesome,
    FontAwesome5,
    AntDesign,
} from "@expo/vector-icons";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Style from "../Styles/Style";
import {
    StyledContainer,
    HeaderContainer,
    TitleContainer,
    CenterText,
    RowLine,
    IconBlock,
    RankBlock,
    HeaderView,
    UserResumeView,
    LargeBlock,
    AdBlock,
    ScrollContainer,
    RowDouble,
    RowSingle,
    SmallBlock,
    ContentView,
    ContentBox,
} from "../Styles/profilestyle";
import { Links } from "../../env";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from "expo-ads-admob";
import { LoadingView } from "../Styles/global";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch,
} from "react-native-paper";

let isLoaded = false;
let isFetched = false;

export default function ProfileScreen(props) {
    const { urlFacebook, urlDiscord, urlWhatsapp, avatarUrlEndpoint } = Links;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [steamid64, setSteamid64] = useState("none");
    console.log(data);

    async function getValueFor() {
        let result = await SecureStore.getItemAsync("steamid64");
        if (isLoaded == false) {
            if (result.length == 17) {
                setSteamid64(result);
                isLoaded = true;
            }
        } else {
            if (isFetched == false) {
                fetch("https://jaguarescsgo.com.br/api/v1/profile/" + steamid64)
                    .then((response) => response.json())
                    .then((json) => setData(json))
                    .catch((error) => console.error(error))
                    .finally(() => setLoading(false));
                isFetched = true;
            }
        }
    }

    getValueFor("steamid64");

    useEffect(() => {
        /*
        fetch('https://jaguarescsgo.com.br/api/v1/profile/' + steamid64)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));*/
    }, []);

    return (
        <StyledContainer>
            <ScrollView>
                {isLoading ? (
                    <LoadingView>
                        <ActivityIndicator size="large" color="#000" />
                    </LoadingView>
                ) : (
                    <View>
                        <HeaderView>
                            <UserResumeView>
                                <Avatar.Image
                                    source={{
                                        uri:
                                            avatarUrlEndpoint +
                                            data.userdata.avatarurl,
                                    }}
                                    size={125}
                                />
                                <View
                                    style={{
                                        marginLeft: 15,
                                        flexDirection: "column",
                                    }}
                                >
                                    <Title style={styles.title}>
                                        {" "}
                                        {data.userdata.username}{" "}
                                    </Title>
                                    <Caption style={styles.caption}>
                                        SteamID64 : {data.userdata.steamid64}
                                    </Caption>
                                </View>
                            </UserResumeView>
                        </HeaderView>
                        <ContentBox>
                            <RowDouble>
                                <SmallBlock>
                                    <Title style={styles.subtitle}>
                                        {" "}
                                        Assinatura{" "}
                                    </Title>
                                    {data.userdata.vipStatus.isVip == false ? (
                                        <Text> Sem assinatura </Text>
                                    ) : (
                                        <View>
                                            <CenterText>
                                                {" "}
                                                Usuario VIP{" "}
                                            </CenterText>
                                            <CenterText>
                                                {" "}
                                                Assinado em{" "}
                                            </CenterText>
                                            <CenterText>
                                                {
                                                    data.userdata.vipStatus
                                                        .created_at
                                                }
                                            </CenterText>
                                            <CenterText> Expira em </CenterText>
                                            <CenterText>
                                                {
                                                    data.userdata.vipStatus
                                                        .expires_at
                                                }
                                            </CenterText>
                                        </View>
                                    )}
                                </SmallBlock>
                                <SmallBlock>
                                    <Title style={styles.subtitle}>
                                        {" "}
                                        Estatisticas{" "}
                                    </Title>
                                    <Caption style={styles.subcaption}>
                                        Matchmaking Jaguares
                                    </Caption>
                                    <RowLine>
                                        <IconBlock>
                                            <AntDesign
                                                name="Trophy"
                                                size={12}
                                                color="black"
                                            />
                                        </IconBlock>
                                        <RankBlock>
                                            <Text> Rank: </Text>
                                            <Text>
                                                {" "}
                                                {data.userdata.rank_rank}
                                            </Text>
                                        </RankBlock>
                                    </RowLine>
                                    <RowLine>
                                        <IconBlock>
                                            <FontAwesome5
                                                name="crosshairs"
                                                size={12}
                                                color="black"
                                            />
                                        </IconBlock>
                                        <RankBlock>
                                            <Text> Kills: </Text>
                                            <Text>
                                                {" "}
                                                {data.userdata.rank_kills}
                                            </Text>
                                        </RankBlock>
                                    </RowLine>
                                    <RowLine>
                                        <IconBlock>
                                            <FontAwesome5
                                                name="skull-crossbones"
                                                size={12}
                                                color="black"
                                            />
                                        </IconBlock>
                                        <RankBlock>
                                            <Text> Mortes: </Text>
                                            <Text>
                                                {" "}
                                                {data.userdata.rank_deaths}
                                            </Text>
                                        </RankBlock>
                                    </RowLine>
                                    <RowLine>
                                        <IconBlock>
                                            <FontAwesome5
                                                name="head-side-virus"
                                                size={12}
                                                color="black"
                                            />
                                        </IconBlock>
                                        <RankBlock>
                                            <Text> Headshots: </Text>
                                            <Text>
                                                {" "}
                                                {data.userdata.rank_headshots}
                                            </Text>
                                        </RankBlock>
                                    </RowLine>
                                    <RowLine>
                                        <IconBlock>
                                            <FontAwesome5
                                                name="hands-helping"
                                                size={12}
                                                color="black"
                                            />
                                        </IconBlock>
                                        <RankBlock>
                                            <Text> Assistencia: </Text>
                                            <Text>
                                                {" "}
                                                {data.userdata.rank_assists}
                                            </Text>
                                        </RankBlock>
                                    </RowLine>
                                    <RowLine>
                                        <IconBlock>
                                            <FontAwesome
                                                name="check-circle-o"
                                                size={12}
                                                color="black"
                                            />
                                        </IconBlock>
                                        <RankBlock>
                                            <Text> Rounds Ganhos: </Text>
                                            <Text>
                                                {" "}
                                                {data.userdata.rank_round_win}
                                            </Text>
                                        </RankBlock>
                                    </RowLine>
                                    <RowLine>
                                        <IconBlock>
                                            <AntDesign
                                                name="closecircleo"
                                                size={12}
                                                color="black"
                                            />
                                        </IconBlock>
                                        <RankBlock>
                                            <Text> Rounds Perdidos: </Text>
                                            <Text>
                                                {" "}
                                                {data.userdata.rank_round_lose}
                                            </Text>
                                        </RankBlock>
                                    </RowLine>
                                </SmallBlock>
                            </RowDouble>
                            <RowSingle>
                                <LargeBlock>
                                    <Title style={styles.subtitle}>
                                        {" "}
                                        Historico{" "}
                                    </Title>
                                    <Text>
                                        {" "}
                                        Primeira vez visto nos servidores:{" "}
                                        {data.userdata.firstSeen}
                                    </Text>
                                    <Text>
                                        {" "}
                                        Conta criada em: {
                                            data.userdata.regdate
                                        }{" "}
                                    </Text>
                                    <Text>
                                        {" "}
                                        Total de horas jogadas nos servidores:{" "}
                                        {data.userdata.totalTimePlayed}h{" "}
                                    </Text>
                                    <Text>
                                        {" "}
                                        Banimentos: {
                                            data.userdata.banRecords
                                        }{" "}
                                    </Text>
                                    <Text>
                                        {" "}
                                        Bloqueios de comunicação:{" "}
                                        {data.userdata.commRecords}{" "}
                                    </Text>
                                </LargeBlock>
                            </RowSingle>
                        </ContentBox>
                    </View>
                )}
            </ScrollView>
            {/*
                                                                                                                                                                                                                                                                        <AdBlock>
                                                                                                                                                                                                                                                                            <AdMobBanner
                                                                                                                                                                                                                                                                                bannerSize="fullBanner"
                                                                                                                                                                                                                                                                                adUnitID="ca-app-pub-3940256099942544/6300978111"
                                                                                                                                                                                                                                                                                servePersonalizedAds // true or false
                                                                                                                                                                                                                                                                                onDidFailToReceiveAdWithError={this.bannerError} />
                                                                                                                                                                                                                                                                        </AdBlock>
                                                                                                                                                                                                                                                                        */}
        </StyledContainer>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginTop: 3,
        fontWeight: "bold",
    },
    subtitle: {
        paddingLeft: 5,
        fontSize: 24,
        marginTop: 3,
        fontWeight: "bold",
        alignItems: "center",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },

    subcaption: {
        paddingLeft: 5,
        fontSize: 14,
        lineHeight: 14,
    },

    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
    },
});
