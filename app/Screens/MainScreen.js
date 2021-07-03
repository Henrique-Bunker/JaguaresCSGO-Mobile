import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
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
import Fonts from "../Styles/Fonts";
import { Links } from "../../env";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

export default function MainScreen(props) {
  const { urlFacebook, urlDiscord, urlWhatsapp } = Links;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Style.padding} />
      <View style={Style.container}>
        <View style={Style.session_single}>
          <Image
            source={require("../assets/bannerapp.png")}
            style={{ height: 150, width: "100%" }}
          />
        </View>

        <View style={Style.session_double}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Servidores")}
          >
            <View style={Style.seccond}>
              <Text style={Fonts.title}>Servidores</Text>
              <Octicons name="server" size={40} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Rank")}>
            <View style={Style.seccond}>
              <Text style={Fonts.title}>Rank</Text>
              <FontAwesome name="list-ol" size={40} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={Style.session_triple}>
          <TouchableOpacity onPress={() => Linking.openURL(urlWhatsapp)}>
            <View style={Style.triple}>
              <Text style={Fonts.title_triple}>WhatsApp</Text>
              <FontAwesome name="whatsapp" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(urlDiscord)}>
            <View style={Style.triple}>
              <Text style={Fonts.title_triple}>Discord</Text>
              <FontAwesome5 name="discord" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(urlFacebook)}>
            <View style={Style.triple}>
              <Text style={Fonts.title_triple}>Facebook</Text>
              <FontAwesome name="facebook-official" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={Style.session_triple}>
          <TouchableOpacity>
            <View style={Style.triple}>
              <Text style={Fonts.title_triple}>VIP</Text>
              <FontAwesome name="star-o" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.triple}>
              <Text style={Fonts.title_triple}>Bans</Text>
              <FontAwesome5 name="shield-alt" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Style.triple}>
              <Text style={Fonts.title_triple}>FAQ</Text>
              <AntDesign name="infocirlceo" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={this.bannerError}
      />
    </ScrollView>
  );
}
