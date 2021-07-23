import { Button } from "react-native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import NumericInput from "react-native-numeric-input";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { PRODUCTDETAIL } from "../Navigation/types";

const ProductItem = ({ product, navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAdd = () => {
    const newProduct = {
      quantity,
      productId: product.id,
      total: quantity * product.price,
    };
    dispatch(addToCart(newProduct));
  };
  return (
    <>
      <Text
        onPress={() => {
          navigation.navigate(PRODUCTDETAIL, { product });
        }}
      >
        {product.name}
      </Text>
      <Text>{product.price} JD</Text>
      <Text>{product.description}</Text>
      <Image style={styles.img} source={{ uri: product.image }} />
      <NumericInput
        initValue={quantity}
        Value={quantity}
        onChange={setQuantity}
        totalWidth={180}
        totalHeight={50}
        iconSize={25}
        step={1}
        valueType="real"
        rounded
        textColor="#B0228C"
        minValue={1}
        iconStyle={{ color: "white" }}
        rightButtonBackgroundColor="#767676"
        leftButtonBackgroundColor="#767676"
      />
      <Button title="add" onPress={handleAdd} disabled={quantity <= 0} />
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
});
