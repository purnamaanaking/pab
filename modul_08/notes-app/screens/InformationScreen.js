import React, { Component } from "react";
import { Text, View, Box, Center, Heading, ScrollView } from "native-base";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";

class InformationScreen extends Component {
  render() {
    return (
      <View flex={1}>
        <Header title="Information" buttonBack={false} />
        <ScrollView bg={"#CEDEE5"}>
          <Box bgColor={"#FFFFFF"} rounded={"xl"} p={"20px"} m={"20px"}>
            <Center mb={"15px"}>
              <Ionicons
                name="ios-information-circle-outline"
                color={"#132552"}
                size={110}
              />
              <Heading>About This Application</Heading>
            </Center>
            <Box>
              <Text fontSize={"16px"} textAlign={"center"}>
                Aplikasi ini dirancang untuk sebagai projek pembelajaran mata
                kuliah Pengembangan Aplikasi Bergerak (PAB) Program Studi Sistem
                Informasi ITTelkom Surabaya.
              </Text>
            </Box>
            <Text fontWeight={"bold"} textAlign={"center"} mt={"15px"}>
              Version 1.0.0
            </Text>
          </Box>
        </ScrollView>
      </View>
    );
  }
}

export default InformationScreen;
