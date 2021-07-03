import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Dimensions, Platform } from 'react-native';
import {
    StyledContainer,
    Tabbing,
    MapImage,
    ServerContainer,
    ServerRowContainer,
    ServerTitle,
    ServerDetailsContainer,
    ServerDetailItem,
    AdContainer,
    Line
} from '../../Styles/serverstyle';
import Style from '../../Styles/Style';
import Fonts from '../../Styles/Fonts';
import { Colors, LoadingView } from '../../Styles/global';
import { AdMobBanner } from 'expo-ads-admob';

const { brand } = Colors;
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const RetakesContainer = () => {

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
    //console.log(data);

    useEffect(() => {
        fetch('https://jaguarescsgo.com.br/api/v1/retakestatus')
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
            <View style={Style.titles}>
                <Text style={Fonts.title}>Servidores</Text>
                <Text style={Fonts.title}>Retake</Text>
            </View>
            <AdMobBanner
                    bannerSize="smartBannerPortrait"
                    adUnitID={adUnitID}
                    servePersonalizedAds // true or false
                    onDidFailToReceiveAdWithError={this.bannerError} />

            {isLoading ? <LoadingView>
                <ActivityIndicator size="large" color={brand} />
            </LoadingView> :
                (<ServerRowContainer>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        style={{ marginBottom: 60 }}
                        data={data.status}
                        keyExtractor={({ name }, index) => index}
                        renderItem={({ item }) => (

                            <TouchableOpacity>
                                <ServerContainer>
                                    <MapImage source={{ uri: 'https://jaguarescsgo.com.br/' + item.mapurl }} />
                                    <ServerTitle style={Fonts.title}>{item.servername}</ServerTitle>
                                    <ServerDetailsContainer>
                                        <ServerDetailItem>Mapa: {item.map}</ServerDetailItem>
                                        <Line />
                                        <ServerDetailItem>Slots: {item.slots}</ServerDetailItem>
                                        <Line />
                                        <ServerDetailItem>IP: 201.47.57.21:{item.port}</ServerDetailItem>
                                    </ServerDetailsContainer>
                                </ServerContainer>
                            </TouchableOpacity>
                        )}
                    />
                </ServerRowContainer>
                )}
        </StyledContainer>
    );
}

export default RetakesContainer;