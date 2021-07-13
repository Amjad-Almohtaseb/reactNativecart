import React from "react";
import { Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { CARTLIST } from "../Navigation/types";

const CartButton = ({ navigation }) => {
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
