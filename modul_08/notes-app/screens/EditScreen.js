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

class EditScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      statuses: [],
      inputTitle: "",
      inputContent: "",
      inputStatus: "",
      inputCategory: "",
    };
  }

  getDataCategories = () => {
    fetch("https://pab-ittelkomsby.000webhostapp.com/categories")
      .then((response) => response.json())
      .then((json) => this.setState({ categories: json.categories }))
      .catch((err) => console.log(err));
  };
  getDataStatuses = () => {
    fetch("https://pab-ittelkomsby.000webhostapp.com/statuses")
      .then((response) => response.json())
      .then((json) => this.setState({ statuses: json.statuses }))
      .catch((err) => console.log(err));
  };

  editDataNotes = () => {
    const { inputTitle, inputContent, inputStatus, inputCategory } = this.state;
    const { navigation } = this.props;
    fetch(
      `https://pab-ittelkomsby.000webhostapp.com/update/${this.props.route.params.id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: inputTitle,
          content: inputContent,
          status: inputStatus,
          category: inputCategory,
        }),
      }
    )
      .then(() => console.log("data berhasil diupdate"))
      .catch((err) => console.log(err))
      .finally(() => navigation.replace("HomeScreen"));
  };

  getDataFromHomeScreen = () => {
    const { title, content, status, category } = this.props.route.params;
    this.setState({
      inputTitle: title,
      inputContent: content,
      inputStatus: status,
      inputCategory: category,
    });
  };

  componentDidMount = () => {
    this.getDataCategories();
    this.getDataStatuses();
    this.getDataFromHomeScreen();
  };

  render() {
    const {
      inputTitle,
      inputContent,
      inputStatus,
      statuses,
      categories,
      inputCategory,
    } = this.state;
    return (
      <View flex={1}>
        <Header title="Edit Note" backButton={true} />
        <ScrollView bgColor={"#CEDEE5"}>
          <Box bgColor={"#FFFFFF"} rounded={"xl"} p={"20px"} m={"20px"}>
            <Text fontWeight="medium" my={"5px"}>
              Title
            </Text>
            <Input
              variant="underlined"
              placeholder="Input Title"
              defaultValue={inputTitle}
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
              defaultValue={inputContent}
              onChangeText={(inputContent) =>
                this.setState({ inputContent: inputContent })
              }
            />
            <Text fontWeight="medium" mt={"15px"}>
              Status
            </Text>
            <Select
              selectedValue={inputStatus}
              minWidth="200"
              accessibilityLabel="Choose Status"
              placeholder="Choose Status"
              _selectedItem={{
                bg: "#DDD",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(inputValue) =>
                this.setState({ inputStatus: inputValue })
              }
            >
              {statuses.map((status) => {
                return (
                  <Select.Item
                    label={status.status}
                    value={status.id}
                    key={status.id}
                  />
                );
              })}
            </Select>
            <Text fontWeight="medium" mt={2}>
              Category
            </Text>
            <Select
              selectedValue={inputCategory}
              minWidth="200"
              accessibilityLabel="Choose Category"
              placeholder="Choose Category"
              _selectedItem={{
                bg: "#DDD",
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
            <Pressable onPress={() => this.editDataNotes()} mt={"20px"}>
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

export default EditScreen;
