import { Center } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SHOPDETAIL } from "../Navigation/types";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Center>
      <View>
        <Text
          style={{ textAlign: "center" }}
          onPress={() => navigation.navigate(SHOPDETAIL, { shop: shop })}
        >
          {shop.name}
        </Text>

        <Image style={styles.image} source={{ uri: shop.image }} />
      </View>
    </Center>
  );
};
export default ShopItem;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});
