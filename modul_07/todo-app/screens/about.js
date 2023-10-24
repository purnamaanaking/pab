import React from "react";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
  Center,
  AlertDialog,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AboutScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClearDataOpen: false,
    };
  }

  handleClearData = async () => {
    try {
      await AsyncStorage.clear();
      this.setState({ isClearDataOpen: false });
    } catch (e) {
      console.log("Error clear data: in about.js");
      console.error(e);
    }
  };

  AlertClearData = () => {
    return (
      <Center>
        <AlertDialog
          isOpen={this.state.isClearDataOpen}
          onClose={() => this.setState({ isClearDataOpen: false })}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Clear Data</AlertDialog.Header>
            <AlertDialog.Body>
              This action will delete all todo list data. Data that has been
              deleted cannot be restored!
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  variant="unstyled"
                  colorScheme="coolGray"
                  onPress={() => this.setState({ isClearDataOpen: false })}
                >
                  Cancel
                </Button>
                <Button colorScheme="danger" onPress={this.handleClearData}>
                  Delete
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Center>
    );
  };

  render() {
    return (
      <Box flex={1}>
        <this.AlertClearData />
        <ScrollView px={3} py={5}>
          <Box>
            <Heading>App Description</Heading>
            <Text mt={3}>
              This is a simple todo list application to use for learning
              AsyncStorage implementation in react native.
            </Text>
          </Box>
          <Divider mt="20px" mb="15px" />
          <Box>
            <Heading mb="10px">App Info</Heading>
            <VStack>
              <HStack justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>Version</Text>
                <Text>v0.0.1</Text>
              </HStack>
              <HStack justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>Update on</Text>
                <Text>December 11, 2022</Text>
              </HStack>
              <HStack justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>Created By</Text>
                <Text>Muhamad Arsyad</Text>
              </HStack>
            </VStack>
          </Box>
          <Divider mt="20px" mb="15px" />
          <Box>
            <Button
              colorScheme="danger"
              onPress={() => this.setState({ isClearDataOpen: true })}
              mb={5}
            >
              Clear Data
            </Button>
          </Box>
        </ScrollView>
      </Box>
    );
  }
}

export default AboutScreen;
