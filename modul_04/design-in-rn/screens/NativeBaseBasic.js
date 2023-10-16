import React from "react";
import { NativeBaseProvider, Box, Center } from "native-base";

const NativeBaseBasic = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>Hello world</Center>
    </NativeBaseProvider>
  );
};

export default NativeBaseBasic;
