import { Heading, ScrollView, Image, Box, Text, Divider } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <>
      <Header title={"News"} withBack="true" />
      <ScrollView>
        <Image
          source={{ uri: params.image }}
          w={"full"}
          h={"48"}
          alt="News Image"
        />
        <Box p={"4"}>
          <Text mb={"1"}>{params.date}</Text>
          <Heading lineHeight={"md"} fontSize={"2xl"}>
            {params.title}
          </Heading>
          <Divider my={"4"} />
          <Text fontSize={"md"}>{params.content}</Text>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
