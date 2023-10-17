import React from "react";
import { GluestackUIProvider, Heading, Center } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const GlueStackUIBasic = () => {
  return (
    <GluestackUIProvider config={config}>
      <Center flex={1}>
        <Heading>Gluestack UI</Heading>
      </Center>
    </GluestackUIProvider>
  );
};

export default GlueStackUIBasic;
