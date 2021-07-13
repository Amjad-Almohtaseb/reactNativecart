import React from "react";
import { Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { CARTLIST } from "../Navigation/types";
import { useSelector } from "react-redux";

const CartButton = ({ navigation }) => {
  const items = useSelector((state) => state.items.items);
  let total = 0;
  items.forEach((element) => {
    total += element.quantity;
  });
  return (
    <Icon
      as={AntDesign}
      color="white"
      name="shoppingcart"
      onPress={() => navigation.navigate(CARTLIST)}
    />
  );
};

export default CartButton;
