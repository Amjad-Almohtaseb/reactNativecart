import { Center, Spinner } from "native-base";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import ProductList from "./ProductList";

const ShopDetail = ({ route, navigation }) => {
  const { shop } = route.params;
  const productLoading = useSelector((state) => state.products.loading);

  const products = useSelector((state) => state.products.products);
  if (productLoading) {
    <Spinner color="blue" />;
  }
  const getProductById = (productId, products) =>
    products.find((product) => product.id === productId);

  const productsFromProductsStore = shop.products
    ? shop.products.map((product) => getProductById(product.id, products))
    : [];

  return (
    <Center>
      <Text style={{ fontSize: 25 }}>{shop.name}</Text>
      <Image style={styles.image} source={{ uri: shop.image }} />

      <ProductList
        products={productsFromProductsStore}
        navigation={navigation}
      />
    </Center>
  );
};

export default ShopDetail;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});
