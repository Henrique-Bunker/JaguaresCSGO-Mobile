import React from "react";
import { View, Text, FlatList, Button, SafeAreaView  } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { StyledContainer, VipImage, MarginContainer } from "../Styles/vipstyle";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from "react-native-paper";

export default function VipScreen(props) {
  return (
    <StyledContainer>
      <VipImage source={{ uri: "https://jaguarescsgo.com.br/img/vip.png" }} />
      <MarginContainer>
        <Paragraph style={{ fontSize: 20 }}>
          Garanta sua assinatura VIP e tenha acesso garantido em nossos
          servidores
        </Paragraph>
        <SafeAreaView>
            <FlatList
            data={[
                { key: "Reserva de vaga" },
                { key: "Prioridade na fila do Retake" },
                { key: "Sem limite de AWPs nos DMs" },
                { key: "Sem ads no App" }
            ]}
            renderItem={({ item }) => <Text style={{ fontSize: 20 }}><Entypo name="check" size={24} color="black" /> {item.key}</Text>}
            />
        </SafeAreaView>
        <Button title="Teste"/>
      </MarginContainer>
    </StyledContainer>
  );
}
