import React from "react";
import { StyleSheet, Text, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Center, List, Box, Button } from "native-base";
import { checkoutCart } from "../../store/actions/cartActions";
import { SIGNIN } from "../Navigation/types";

const CartList = ({ navigation }) => {
  const items = useSelector((state) => state.items.items);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const cartItems = items
    .map((item) => {
      const newProduct = {
        ...products.find((product) => product.id === item.productId),
        quantity: item.quantity,
      };
      // console.log(newProduct);
      return newProduct;
    })
    .map((item) => <CartItem item={item} key={item.id} />);
  const createButtonAlert = () =>
    Alert.alert("sign in", "you need to be signed in to place an order", [
      {
        text: "Cancel",
        text: "OK",
        onPress: () => navigation.navigate(SIGNIN),
        style: "cancel",
      },
    ]);
  const handleCheckout = () => {
    user ? dispatch(checkoutCart(items)) : createButtonAlert();
  };
  return (
    <Center flex={1}>
      <Box w="95%">
        <Text>List</Text>
        <List space={2} my={2}>
          {cartItems}
        </List>
      </Box>
      <Button onPress={handleCheckout}>CheckOut</Button>
    </Center>
  );
};

export default CartList;

const styles = StyleSheet.create({});
