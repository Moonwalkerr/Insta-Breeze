import { Flex, Text } from "@chakra-ui/layout";

export default function Comment({ username, comment }) {
  return (
    <Flex
      ml="4"
      letterSpacing="1px"
      fontSize="12px"
      width="100%"
      alignItems="center"
    >
      <Text size="md" color="#333" fontFamily="Merriweather, sans-serif">
        <span
          style={{
            fontSize: "14px",
            letterSpacing: "0px",
            color: "purple",
            fontWeight: "700",
            marginRight: "4px",
          }}
        >
          {username}
        </span>
        {comment}
      </Text>
    </Flex>
  );
}
