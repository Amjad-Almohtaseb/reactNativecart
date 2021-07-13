import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Center, List, Box, Button } from "native-base";
import { checkoutCart } from "../../store/actions/cartActions";

const CartList = () => {
  const items = useSelector((state) => state.items.items);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

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
  const handleCheckout = () => {
    dispatch(checkoutCart());
    alert("thank you for shopping with us !");
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
