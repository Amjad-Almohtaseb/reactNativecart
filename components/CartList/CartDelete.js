import React from "react";
import { Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { deleteFromCart } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";

const CartDelete = ({ productId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteFromCart(productId));
  };
  return (
    <Icon as={AntDesign} color="white" name="delete" onPress={handleDelete} />
  );
};

export default CartDelete;
