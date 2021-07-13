import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HStack } from "native-base";
import CartDelete from "./CartDelete";

const CartItem = ({ item }) => {
  return (
    <HStack w="100%" justifyContent="space-between" alignItems="center">
      <Text>{item.name}</Text>
      <Text onPress={() => alert("hi")}>Quanity: {item.quantity}</Text>
      <Text>{item.price * item.quantity} KD</Text>
      <CartDelete productId={item.id} />
    </HStack>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
