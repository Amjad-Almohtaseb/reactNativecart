import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Center, Input } from "native-base";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";
import { SIGNUP } from "../Navigation/types";
const Signin = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    dispatch(signin(user, navigation));
  };
  return (
    <View style={{ marginTop: 200 }}>
      <Input
        autoCapitalize={false}
        onChangeText={(username) => setUser({ ...user, username })}
        w="80%"
        mx={4}
        placeholder="enter username"
      />
      <Input
        secureTextEntry={true}
        autoCapitalize={false}
        onChangeText={(password) => setUser({ ...user, password })}
        w="80%"
        mx={4}
        placeholder="enter password"
      />
      <Center>
        {" "}
        <Button onPress={handleSubmit} style={{ width: 100 }}>
          Submit
        </Button>
        <Text style={{ marginTop: 50 }}>
          if you not register,please sign up
        </Text>
        <Button
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate(SIGNUP)}
        >
          Sign Up
        </Button>
      </Center>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({});
