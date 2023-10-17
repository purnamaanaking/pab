import React from "react";
import { NativeBaseProvider, Center, Heading } from "native-base";

const NativeBaseBasic = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Heading>Native Base</Heading>
      </Center>
    </NativeBaseProvider>
  );
};

export default NativeBaseBasic;
