import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Center, List, Box } from "native-base";

const CartList = () => {
  const items = useSelector((state) => state.carts.items);
  const products = useSelector((state) => state.products.products);

  const cartItems = items
    .map((item) => ({
      ...products.find((product) => product.id === item.itemId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);
  return (
    <Center flex={1}>
      <Box w="95%">
        <Text>List</Text>
        <List space={2} my={2}>
          {cartItems}
        </List>
      </Box>
    </Center>
  );
};

export default CartList;

const styles = StyleSheet.create({});
