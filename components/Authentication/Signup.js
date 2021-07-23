import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Center, Input } from "native-base";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";
const Signup = ({ navigation }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const handleSubmit = () => {
    dispatch(signup(user, navigation));
  };
  return (
    <View style={{ marginTop: 100 }}>
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
      <Input
        autoCapitalize={false}
        onChangeText={(email) => setUser({ ...user, email })}
        w="80%"
        mx={4}
        placeholder="enter email"
      />
      <Input
        autoCapitalize={false}
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        w="80%"
        mx={4}
        placeholder="enter your first name"
      />
      <Input
        autoCapitalize={false}
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        w="80%"
        mx={4}
        placeholder="enter your last name"
      />
      <Center>
        {" "}
        <Button onPress={handleSubmit} style={{ width: 100 }}>
          Submit
        </Button>
      </Center>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
