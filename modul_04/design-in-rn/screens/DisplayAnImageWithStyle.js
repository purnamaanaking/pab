import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { Separator } from "../components";

const DisplayAnImageWithStyle = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            style={{
              resizeMode: "cover",
              ...styles.image,
            }}
            source={require("../assets/js.png")}
          />
          <Text>resizeMode : cover</Text>
        </View>

        <Separator height={30} />

        <View>
          <Image
            style={{
              resizeMode: "contain",
              ...styles.image,
            }}
            source={require("../assets/js.png")}
          />
          <Text>resizeMode : contain</Text>
        </View>

        <Separator height={30} />

        <View>
          <Image
            style={{
              resizeMode: "stretch",
              ...styles.image,
            }}
            source={require("../assets/js.png")}
          />
          <Text>resizeMode : stretch</Text>
        </View>

        <Separator height={30} />

        <View>
          <Image
            style={{
              resizeMode: "repeat",
              ...styles.image,
            }}
            source={require("../assets/js.png")}
          />
          <Text>resizeMode : repeat</Text>
        </View>

        <Separator height={30} />

        <View>
          <Image
            style={{
              resizeMode: "center",
              ...styles.image,
            }}
            source={require("../assets/js.png")}
          />
          <Text>resizeMode : center</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  image: {
    height: 100,
    width: 200,
    backgroundColor: "grey",
  },
});

export default DisplayAnImageWithStyle;
