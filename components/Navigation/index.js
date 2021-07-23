import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import {
  HOME,
  PRODUCTDETAIL,
  SHOPDETAIL,
  SHOPLIST,
  CARTLIST,
  SIGNIN,
  SIGNUP,
} from "./types";

import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import { Provider } from "react-redux";
import ProductDetail from "../ProductDetail";
import CartList from "../CartList";
import CartButton from "../CartList/CartButton";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";

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
      <Screen name={SIGNIN} options={{ title: "Signin" }} component={Signin} />
      <Screen name={SIGNUP} options={{ title: "Signup" }} component={Signup} />

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
