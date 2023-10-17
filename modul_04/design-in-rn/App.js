import { useRef, useState } from "react";
import {
  View,
  DrawerLayoutAndroid,
  StatusBar,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import { Header, Button, Separator } from "./components";
import {
  LotsOfStyles,
  FixedDimensionsBasics,
  FlexDimensionsBasics,
  PercentageDimensionsBasics,
  FlexBasic,
  FlexDirectionBasics,
  JustifyContentBasics,
  AlignItemsLayout,
  WidthHeightBasics,
  PositionLayout,
  DisplayAnImageWithStyle,
  NativeBaseBasic,
} from "./screens";

// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("Lots Of Styles");
  // Ref Declaration
  const drawer = useRef(null);
  // Array of Object Declaration
  const pageArr = [
    { name: "Lots Of Styles", comp: <LotsOfStyles /> },
    { name: "Fixed Dimensions Basics", comp: <FixedDimensionsBasics /> },
    { name: "Flex Dimensions Basics", comp: <FlexDimensionsBasics /> },
    {
      name: "Percentage Dimensions Basics",
      comp: <PercentageDimensionsBasics />,
    },
    { name: "Flex Basic", comp: <FlexBasic /> },
    { name: "Flex Direction Basics", comp: <FlexDirectionBasics /> },
    { name: "Justify Content Basics", comp: <JustifyContentBasics /> },
    { name: "Align Items Layout", comp: <AlignItemsLayout /> },
    { name: "Width Height Basics", comp: <WidthHeightBasics /> },
    { name: "Position Layout", comp: <PositionLayout /> },
    { name: "Display An Image With Style", comp: <DisplayAnImageWithStyle /> },
    { name: "Native Base Basic", comp: <NativeBaseBasic /> },
  ];
  // Ref Declaration
  const content = useRef(pageArr[0]);

  // Find in Array of Object
  content.current = pageArr.find((item) => item.name == page);

  // Arrow Function inside Functional Component
  const changePage = (drawer, pageName) => {
    // Close Drawer
    drawer.current.closeDrawer();
    // Change state value
    setPage(pageName);
  };

  // Arrow Function inside Functional Component
  const navigationView = () => (
    <ScrollView style={styles.drawer}>
      <Text style={styles.textMenus}>MENUS:</Text>
      {/* Looping with map() */}
      {pageArr.map((item, index) => {
        return (
          <View key={index}>
            <Button
              text={item.name}
              onPress={() => changePage(drawer, item.name)}
            />
            <Separator height={10} />
          </View>
        );
      })}
      <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
      <Separator height={30} />
    </ScrollView>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <StatusBar style="light" backgroundColor="#AA0002" />
      <View style={{ flex: 1 }}>
        <Header drawer={drawer} />
        {content.current.comp}
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  drawer: { padding: 10, backgroundColor: "#222222", flex: 1 },
  textMenus: {
    color: "white",
    fontSize: 12,
    marginBottom: 10,
    fontWeight: "900",
  },
});

export default App;
