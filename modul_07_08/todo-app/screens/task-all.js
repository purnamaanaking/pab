import React from "react";
import {
  Center,
  HStack,
  IconButton,
  Input,
  Icon,
  Box,
  Toast,
  ScrollView,
  Spinner,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskList } from "../components";

class TaskScreen extends React.Component {
  constructor(props) {
    super(props);

    this.toastID = "toast-add-task";
    this.state = {
      list: [],
      inputValue: "",
      isLoading: true,
    };
  }

  handleAddTask = (data) => {
    if (data === "") {
      if (!Toast.isActive(this.toastID)) {
        Toast.show({
          id: this.toastID,
          title: "Masukan nama task",
        });
      }
      return;
    }

    const prevList = this.state.list;

    this.setState(
      { list: [...prevList, { title: data, isCompleted: false }] },
      () => {
        try {
          AsyncStorage.setItem("@task-list", JSON.stringify(this.state.list));
        } catch (e) {
          console.log("Error add task: in task-all.js");
          console.error(e.message);
        }
      }
    );
  };

  handleDeleteTask = (index) => {
    const deletedList = this.state.list.filter(
      (list, listIndex) => listIndex !== index
    );
    this.setState({ list: deletedList }, () => {
      try {
        AsyncStorage.setItem("@task-list", JSON.stringify(this.state.list));
      } catch (e) {
        console.log("Error delete task: in task-all.js");
        console.error(e.message);
      }
    });
  };

  handleStatusChange = (index) => {
    const newList = this.state.list;
    newList[index].isCompleted = !newList[index].isCompleted;
    this.setState({ list: newList }, () => {
      try {
        AsyncStorage.setItem("@task-list", JSON.stringify(this.state.list));
      } catch (e) {
        console.log("Error update status task: in task-all.js");
        console.error(e.message);
      }
    });
  };

  getTaskList = async () => {
    try {
      const value = await AsyncStorage.getItem("@task-list");
      if (value !== null) {
        console.log(value);
        this.setState({ list: JSON.parse(value) }); //mengupdate value dari state yg bernama list, di isi dengan value yang dia dapatkan dari AsyncStorage kemudian value tersebut dia konversi ke dalam bentuk JSON Object.
      } else {
        console.log("No Tasks");
      }
    } catch (e) {
      console.log("Error get task: in task-all.js");
      console.error(e);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.getTaskList();
  }

  render() {
    const { list, inputValue, isLoading } = this.state;
    return (
      <Box flex={1}>
        <Box mt="15px" mx="15px" mb="7.5px">
          <HStack space="15px">
            <Input
              size="lg"
              flex={6}
              onChangeText={(char) => this.setState({ inputValue: char })}
              value={inputValue}
              borderWidth={1}
              borderColor="primary.600"
              placeholder="Add Task"
            />
            <IconButton
              flex={1}
              borderRadius="sm"
              variant="solid"
              icon={
                <Icon as={Feather} name="plus" size="lg" color="warmGray.50" />
              }
              onPress={() => {
                this.handleAddTask(inputValue);
                this.setState({ inputValue: "" });
              }}
            />
          </HStack>
        </Box>
        {isLoading ? (
          <Center flex={1}>
            <Spinner size="lg" />
          </Center>
        ) : (
          <ScrollView>
            <Box mb="15px" mx="15px">
              {list.map((item, index) => {
                return (
                  <Box key={item.title + index.toString()}>
                    <TaskList
                      data={item}
                      index={index}
                      deletedIcon={true}
                      onItemPress={() => this.handleStatusChange(index)}
                      onChecked={() => this.handleStatusChange(index)}
                      onDeleted={() => this.handleDeleteTask(index)}
                    />
                  </Box>
                );
              })}
            </Box>
          </ScrollView>
        )}
      </Box>
    );
  }
}

export default TaskScreen;
