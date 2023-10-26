import React from "react";
import { Text, View, HStack, Pressable } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <View bgColor="#fff" px={4} py={4}>
      <HStack>
        {props.backButton && (
          <Pressable onPress={() => navigation.pop()} mr={"15px"}>
            <Ionicons name="ios-arrow-back-outline" size={25} />
          </Pressable>
        )}
        <Text fontSize={18} fontWeight="bold" ml={2}>
          {props.title}
        </Text>
      </HStack>
    </View>
  );
};

export default Header;
