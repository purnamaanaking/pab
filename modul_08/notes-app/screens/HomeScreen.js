import React, { Component } from "react";
import {
  View,
  Text,
  Box,
  HStack,
  ScrollView,
  Center,
  Spinner,
  FlatList,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Header } from "../components";

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isContentLoading: false,
      isCategoriesLoading: true,
      isFetching: false,
      content: [],
      categories: [],
      activeCategory: null,
    };
  }

  fetchContent = (key) => {
    fetch(`https://pab-ittelkomsby.000webhostapp.com/categories/${key}`)
      .then((response) => response.json())
      .then((json) => this.setState({ content: json.notes }))
      .catch((error) => console.error(error))
      .finally(() =>
        this.setState({
          isContentLoading: false,
          isFetching: false,
        })
      );
  };

  fetchCategories = () => {
    fetch("https://pab-ittelkomsby.000webhostapp.com/categories")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          categories: json.categories,
          activeCategory: json.categories[0].id,
        })
      )
      .then(() => this.fetchContent(this.state.activeCategory))
      .catch((error) => console.error(error))
      .finally(() =>
        this.setState({
          isCategoriesLoading: false,
        })
      );
  };

  fetchDelete = (key) => {
    fetch(`https://pab-ittelkomsby.000webhostapp.com/delete/${key}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(console.log("data berhasil dihapus"))
      .then(() => this.fetchContent(this.state.activeCategory))
      .catch((error) => console.error(error));
  };

  componentDidMount = () => {
    this.fetchCategories();
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <Box px={"20px"} mb={"25px"}>
        <Box overflow={"hidden"} rounded={"lg"}>
          <Box p={"20px"} bg={"white"}>
            <HStack width={"100%"} alignItems="center" justifyContent="center">
              <Box width={"70%"} pr={"20px"}>
                <VStack>
                  <Text
                    fontSize={"18px"}
                    fontWeight={"bold"}
                    mb={1}
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <Text mb={"10px"} numberOfLines={1}>
                    {item.content}
                  </Text>
                  <HStack alignItems="center">
                    <Text
                      color={"#65727B"}
                      fontWeight={"bold"}
                      fontSize={"12px"}
                    >
                      {item.date}
                    </Text>
                    <Box
                      bgColor={"#228C22"}
                      ml={3}
                      rounded="full"
                      px={"15px"}
                      pt={"3px"}
                      pb={"5px"}
                    >
                      <Text fontSize={"12px"} color={"#FFFFFF"}>
                        {item.status.status}
                      </Text>
                    </Box>
                  </HStack>
                </VStack>
              </Box>
              <Box width={"15%"} alignItems={"center"}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("EditScreen", {
                      id: item.id,
                      title: item.title,
                      content: item.content,
                      status: item.status.id,
                      category: item.category.id,
                    })
                  }
                >
                  <Ionicons name="ios-create" color={"#0185B7"} size={25} />
                </TouchableOpacity>
              </Box>
              <Box width={"15%"} alignItems={"center"}>
                <TouchableOpacity onPress={() => this.fetchDelete(item.id)}>
                  <Ionicons name="ios-trash" color={"#FD0000"} size={25} />
                </TouchableOpacity>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Box>
    );
  };

  onRefresh = () => {
    this.setState({ isFetching: true }, () => {
      this.fetchContent(this.state.activeCategory);
    });
  };

  categoryOnPress = (id) => {
    this.setState(
      { activeCategory: id, isContentLoading: true },
      this.onRefresh
    );
  };

  render() {
    const {
      isContentLoading,
      isCategoriesLoading,
      isFetching,
      content,
      categories,
      activeCategory,
    } = this.state;
    return (
      <View flex={1}>
        <Header title="Home" />

        {!isCategoriesLoading && (
          <Box bg={"#CEDEE5"}>
            <ScrollView
              alignSelf="flex-start"
              horizontal={true}
              showHorizontalScrollIndicator={false}
              my={"20px"}
            >
              <HStack>
                {categories.map((category, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.categoryOnPress(category.id)}
                  >
                    <Box
                      bg={category.id == activeCategory ? "#0185B7" : "#FFFFFF"}
                      px={"20px"}
                      py={"10px"}
                      rounded="full"
                      ml={index == 0 ? "20px" : 0}
                      mr={index == 0 ? "10px" : "20px"}
                    >
                      <Text
                        fontWeight="bold"
                        color={
                          category.id == activeCategory ? "#FFFFFF" : "#65727B"
                        }
                      >
                        {category.category}
                      </Text>
                    </Box>
                  </TouchableOpacity>
                ))}
              </HStack>
            </ScrollView>
          </Box>
        )}

        {isContentLoading ? (
          <Center flex={1} bg={"#CEDEE5"}>
            <Spinner size="lg" color="#ff7800" />
          </Center>
        ) : (
          <FlatList
            bg={"#CEDEE5"}
            data={content}
            keyExtractor={(item) => item.id}
            renderItem={this.renderItem}
            onRefresh={this.onRefresh}
            refreshing={isFetching}
          />
        )}
      </View>
    );
  }
}

export default HomeScreen;
