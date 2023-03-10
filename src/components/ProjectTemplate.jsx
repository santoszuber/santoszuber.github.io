import {
  Card,
  CardBody,
  Image,
  Box,
  Text,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";

export function ProjectTemplate({ imgURL, title, desc, siteURL, repoURL }) {
  return (
    <Card borderRadius={14}>
      <CardBody borderRadius={14}>
        <Box justifyContent={"center"} alignItems={"center"} gap={"14px"}>
          <Image
            src={imgURL}
            alt={`${title} preview image`}
            objectFit="contain"
            borderRadius={14}
            boxSize={["200px", "400px"]}
          />
        </Box>
        <Box w={["200px", "400px"]} h="300px">
          <VStack
            justifyContent={"center"}
            alignItems={"center"}
            gap="70px"
            h="300px"
          >
            <VStack
              justifyContent={"center"}
              alignItems={"flex-start"}
              h="300px"
            >
              <Text
                textAlign={"left"}
                fontWeight={"semibold"}
                fontSize={"x-large"}
                color="black"
              >
                {title}
              </Text>
              <Text textAlign={"left"} color="black">
                {desc}
              </Text>
            </VStack>
            <HStack
              justifyContent={"center"}
              alignItems="center"
              gap={["10px", "70px"]}
            >
              <a target="_blank" href={siteURL}>
                <Button
                  colorScheme="facebook"
                  bgColor={"#0A043C"}
                  color="white"
                >
                  Live Demo
                </Button>
              </a>
              <a target="_blank" href={repoURL}>
                <Button
                  colorScheme="facebook"
                  bgColor={"#0A043C"}
                  color="white"
                >
                  Github
                </Button>
              </a>
            </HStack>
          </VStack>
        </Box>
      </CardBody>
    </Card>
  );
}
