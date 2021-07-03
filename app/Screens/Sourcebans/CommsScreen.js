import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Dimensions, Platform, Linking } from 'react-native';
import { DataTable } from 'react-native-paper';
import {
    StyledContainer,
    Tabbing,
    Title,
    PlayerRow,
    RankTouchable
} from '../../Styles/sourcebanstyle';
import Style from '../../Styles/Style';
import Fonts from '../../Styles/Fonts';
import { Colors, LoadingView } from '../../Styles/global';
import { AdMobBanner } from 'expo-ads-admob';

const { brand } = Colors;
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const CommsScreen = () => {

    function getCurTime(time) {

        if (time == 0) {
            return 'Permanent'
        } else {
            return time / 60 / 60
        }

    }

    function getCurDate(timestamp) {

        var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
            hh = d.getHours(),
            time;

        time = dd + '/' + mm + '/' + yyyy;
        return time;
    }

    const adUnitID = Platform.select({
        // https://developers.google.com/admob/ios/test-ads
        ios: 'ca-app-pub-3940256099942544/2934735716',
        // https://developers.google.com/admob/android/test-ads
        android: 'ca-app-pub-3940256099942544/6300978111',
    });

    const [dimensions, setDimensions] = useState({ window, screen });

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch('https://jaguarescsgo.com.br/api/v1/comms')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        Dimensions.addEventListener('change', onChange);
        return () => {
            Dimensions.removeEventListener('change', onChange);
        };
    });

    return (
        <StyledContainer>
            <Tabbing />
            <Title>
                <Text style={Fonts.title}>Bloqueios de comunicação</Text>
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
                            <DataTable.Title>Jogador</DataTable.Title>
                            <DataTable.Title>Data</DataTable.Title>
                            <DataTable.Title>Motivo</DataTable.Title>
                            <DataTable.Title numeric>Duração</DataTable.Title>
                        </DataTable.Header>

                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={data.comms}
                            keyExtractor={({ name }, index) => 'key' + index}
                            renderItem={({ item }) => (

                                <DataTable.Row>
                                    <PlayerRow>
                                        <RankTouchable
                                            onPress={() => Linking.openURL('https://sb.jaguarescsgo.com.br/index.php?p=commslist&advSearch=' + item.authid + '&advType=steamid&Submit')}
                                        >
                                            <DataTable.Cell>{item.name}</DataTable.Cell>
                                            <DataTable.Cell>{getCurDate(item.created)}</DataTable.Cell>
                                            <DataTable.Cell>{item.reason}</DataTable.Cell>
                                            <DataTable.Cell numeric>{getCurTime(parseInt(item.length)) + 'h'}</DataTable.Cell>
                                        </RankTouchable>
                                    </PlayerRow>
                                </DataTable.Row>
                            )}
                        />
                    </DataTable>

                )}
        </StyledContainer>
    );
}

export default CommsScreen;