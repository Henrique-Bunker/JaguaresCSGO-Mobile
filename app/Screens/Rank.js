import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper';
import { Text, FlatList, Linking, ActivityIndicator } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Fonts from '../Styles/Fonts';
import {
    StyledContainer,
    Tabbing,
    Title,
    PlayerRow,
    RankTouchable
} from '../Styles/rankstyle';
import { AdMobBanner } from 'expo-ads-admob';
import { Colors, LoadingView } from '../Styles/global';

const { brand } = Colors;
const Tab = createMaterialBottomTabNavigator();

export default function Rank() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //console.log(data);

    useEffect(() => {
        fetch('https://jaguarescsgo.com.br/api/v1/rank50')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (

        <StyledContainer>
            <Tabbing />
            <Title>
                <Text style={Fonts.title}>Rank - Top 50</Text>
            </Title>
            <AdMobBanner
                bannerSize="smartBannerPortrait"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                servePersonalizedAds // true or false
                onDidFailToReceiveAdWithError={this.bannerError} />

            {isLoading ? <LoadingView>
                <ActivityIndicator size="large" color={brand} />
            </LoadingView> :
                (
                    <DataTable style={{ marginBottom: 170 }}>
                        <DataTable.Header>
                            <DataTable.Title>#</DataTable.Title>
                            <DataTable.Title>Jogador</DataTable.Title>
                            <DataTable.Title numeric>Pontos</DataTable.Title>
                            <DataTable.Title numeric>Rank</DataTable.Title>
                        </DataTable.Header>

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={data.rank}
                            keyExtractor={({ name }, index) => name}
                            renderItem={({ item }) => (

                                <DataTable.Row>
                                    <PlayerRow>
                                        <RankTouchable
                                            onPress={() => Linking.openURL('https://steamcommunity.com/profiles/' + item.steamid)}
                                        >
                                            <DataTable.Cell>{item.position}</DataTable.Cell>
                                            <DataTable.Cell>{item.name}</DataTable.Cell>
                                            <DataTable.Cell numeric>{parseInt(item.value)}</DataTable.Cell>
                                            <DataTable.Cell numeric>{parseInt(item.rank)}</DataTable.Cell>
                                        </RankTouchable>
                                    </PlayerRow>
                                </DataTable.Row>
                            )}
                        />
                    </DataTable>

                )}
        </StyledContainer>
    )
}