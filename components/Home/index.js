import { Center } from "native-base";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SHOPLIST } from "../Navigation/types";

export default function Home({ navigation }) {
  return (
    <Center flex={1}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://images-ext-1.discordapp.net/external/qWQQBjbpBTt1uIY-HvxCfMLKoCypjfg6tGWl9cOoG14/https/wallpaperaccess.com/full/238101.jpg?width=263&height=468",
        }}
      >
        <Text style={styles.title}>My Electronic Shop</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(SHOPLIST)}
          style={{
            backgroundColor: "#1d3557",
            textAlign: "center",
            width: 100,

            marginTop: 300,
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>ShopList</Text>
        </TouchableOpacity>
      </ImageBackground>
    </Center>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginTop: 200,
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 500,
    height: 599,
  },
});
