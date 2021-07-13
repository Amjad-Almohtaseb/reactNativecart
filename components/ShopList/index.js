import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";
import { Center, Spinner } from "native-base";
const ShopList = ({ navigation }) => {
  const shopLoading = useSelector((state) => state.shops.loading);
  const shops = useSelector((state) => state.shops.shops);
  const shopList = shops.map((shop) => (
    <ShopItem key={shop.id} shop={shop} navigation={navigation} />
  ));
  return (
    <View>
      <Center>
        {shopLoading ? <Spinner color="blue" /> : shopList}
        <Text style={{ fontSize: 20, fontWeight: "bold" }}></Text>
      </Center>
    </View>
  );
};

export default ShopList;
