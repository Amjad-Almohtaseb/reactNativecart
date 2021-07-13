import { Center } from "native-base";
import React from "react";
import { StyleSheet, Text, Image } from "react-native";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  return (
    <Center>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Text>{product.description}</Text>
      <Image
        source={{ uri: product.image }}
        style={{ width: 150, height: 150 }}
      ></Image>
    </Center>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
