import {
  Box,
  Heading,
  Text,
  Image,
  Divider,
  ScrollView,
} from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView>
        <Image
          source={{ uri: params.image }}
          w={"$full"}
          h={"$48"}
          alt="News Image"
        />
        <Box p={"$4"}>
          <Text mb={"$1"}>{params.date}</Text>
          <Heading lineHeight={"$xl"} fontSize={"$2xl"}>
            {params.title}
          </Heading>
          <Divider my={"$4"} />
          <Text>{params.content}</Text>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
