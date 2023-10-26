import React, { Component } from "react";
import {
  Box,
  CheckIcon,
  Input,
  ScrollView,
  Select,
  Text,
  TextArea,
  Pressable,
  View,
} from "native-base";
import { Header } from "../components";

class AddScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      inputTitle: "",
      inputContent: "",
      inputCategory: "",
    };
  }

  getDataCategories = () => {
    fetch("https://pab-ittelkomsby.000webhostapp.com/categories")
      .then((response) => response.json())
      .then((json) => this.setState({ categories: json.categories }))
      .catch((err) => console.log(err));
  };

  createDataNotes = () => {
    const { inputTitle, inputContent, inputCategory } = this.state;

    if (inputTitle === "" || inputContent === "" || inputCategory === "") {
      console.log("Isi judul dan content serta kategori");
      return;
    }

    fetch("https://pab-ittelkomsby.000webhostapp.com/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: inputTitle,
        content: inputContent,
        status: "1",
        category: inputCategory,
      }),
    })
      .then(() => console.log("data berhasil dibuat"))
      .catch((err) => console.log(err))
      .finally(() => this.props.navigation.replace("HomeScreen"));
  };

  componentDidMount = () => {
    this.getDataCategories();
  };

  render() {
    const { categories, inputCategories } = this.state;
    return (
      <View flex={1}>
        <Header title="Add Note" />
        <ScrollView bgColor={"#CEDEE5"}>
          <Box bgColor={"#FFFFFF"} rounded={"xl"} p={"20px"} m={"20px"}>
            <Text fontWeight="medium" my={"5px"}>
              Title
            </Text>
            <Input
              variant="underlined"
              placeholder="Input Title"
              onChangeText={(inputTitle) =>
                this.setState({ inputTitle: inputTitle })
              }
              p={0}
            />
            <Text fontWeight="medium" mt={"15px"} my={"5px"}>
              Content
            </Text>
            <TextArea
              h={20}
              placeholder="Input Content"
              w="100%"
              onChangeText={(inputContent) =>
                this.setState({ inputContent: inputContent })
              }
            />
            <Text fontWeight="medium" mt={2}>
              Category
            </Text>
            <Select
              selectedValue={inputCategories}
              minWidth="200"
              accessibilityLabel="Choose Category"
              placeholder="Choose Category"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(inputValue) =>
                this.setState({ inputCategory: inputValue })
              }
            >
              {categories.map((category) => {
                return (
                  <Select.Item
                    label={category.category}
                    value={category.id}
                    key={category.id}
                  />
                );
              })}
            </Select>
            <Pressable onPress={() => this.createDataNotes()} mt={"20px"}>
              {({ isPressed }) => {
                return (
                  <Box
                    bg={isPressed ? "#016a91" : "#0185B7"}
                    py={"10px"}
                    borderRadius={"full"}
                  >
                    <Text color={"white"} textAlign={"center"}>
                      Save
                    </Text>
                  </Box>
                );
              }}
            </Pressable>
          </Box>
        </ScrollView>
      </View>
    );
  }
}

export default AddScreen;
