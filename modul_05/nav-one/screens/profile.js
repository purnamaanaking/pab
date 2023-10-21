import { Heading, Center } from "native-base";
import Header from "../components/header";

const Profile = () => {
  return (
    <>
      <Header title={"Profile"} />
      <Center flex={1}>
        <Heading>Profile</Heading>
      </Center>
    </>
  );
};

export default Profile;
