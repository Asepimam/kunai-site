import React from "react";
import { Box, HStack, Image, Text, VStack, Column } from "native-base";
import { Row } from "antd";

const ContactHelper = () => {
  return (
    <Row
      justify={"space-between"}
      id="contact-helper"
      style={{
        paddingLeft: 150,
        paddingRight: 150,
        marginTop: 200,
      }}
    >
      <Image
        source={{ uri: "/images/contact-helper.png" }}
        alt={"contact"}
        size={500}
      />
      <Box
        borderRadius={20}
        bg={"white"}
        w={400}
        my={220}
        shadow={"5"}
        px={10}
        py={5}
      >
        <Text
          fontSize={24}
          fontWeight={700}
          flexWrap={"wrap"}
          textTransform={"capitalize"}
        >
          Hubungi Kami
        </Text>
        <Column justifyContent={"space-between"}>
          <Text fontWeight={400} fontSize={14}>
            Telepon: 0812 2222 3333
          </Text>
          <Text fontWeight={400} fontSize={14}>
            Email:Kunai@Kunai.com
          </Text>
        </Column>
      </Box>
    </Row>
  );
};

export default ContactHelper;
