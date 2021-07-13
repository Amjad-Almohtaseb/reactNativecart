import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PRODUCTDETAIL } from "../Navigation/types";

const ProductItem = ({ product, navigation }) => {
  return (
    <View>
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
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
});
