import { Heading, Center } from "native-base";
import Header from "../components/header";

const ForYou = () => {
  return (
    <>
      <Header title={"For You"} />
      <Center flex={1}>
        <Heading>For You</Heading>
      </Center>
    </>
  );
};

export default ForYou;
