import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { HOME, PRODUCTDETAIL, SHOPDETAIL, SHOPLIST, CARTLIST } from "./types";

import Home from "../home";
import ShopList from "../shopList";
import ShopDetail from "../ShopDetail";
import { Provider } from "react-redux";
import ProductDetail from "../ProductDetail";
import CartList from "../CartList";
import CartButton from "../CartList/CartButton";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName={HOME}
      screenOptions={{
        cardStyle: { backgroundColor: "#1d3557" },
        headerTransparent: true,
      }}
    >
      <Screen name={HOME} options={{ headerShown: false }} component={Home} />

      <Screen
        name={SHOPLIST}
        options={{ title: "Shops" }}
        component={ShopList}
      />
      <Screen
        name={PRODUCTDETAIL}
        options={({ route }) => {
          return { headerTitle: route.params.product.name };
        }}
        component={ProductDetail}
      />

      <Screen
        name={SHOPDETAIL}
        options={({ navigation, route }) => ({
          title: route.params.shop.name,
          headerRight: () => <CartButton navigation={navigation} />,
        })}
        component={ShopDetail}
      />
      <Screen
        name={CARTLIST}
        component={CartList}
        options={{ title: "Cart" }}
      />
    </Navigator>
  );
};

export default StackNavigator;
