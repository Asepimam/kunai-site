import React from "react";
import { Box, HStack, Image, Text, VStack, Column } from "native-base";
import { Card, Row } from "antd";

const ContactHelper = () => {
  return (
    <Row
      justify={"space-between"}
      style={{
        paddingLeft: 200,
        paddingRight: 200,
        paddingTop: 100,
        // marginTop: 100,
        marginBottom: 500,
      }}
    >
      <Image
        source={{ uri: "/images/contact-helper.png" }}
        alt={"contact"}
        size={500}
      />

      <Card
        style={{
          width: 400,
          height: 150,
          padding: 10,
          marginTop: 100,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        id="contact-helper"
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
      </Card>
    </Row>
  );
};

export default ContactHelper;
