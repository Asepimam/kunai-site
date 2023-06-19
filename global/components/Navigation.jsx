import React, { useState } from "react";
import { Anchor, Button, Menu, Row } from "antd";
import { HStack, Image, Text, VStack, useBreakpointValue } from "native-base";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navigation = () => {
  const items = [
    { title: "Home", href: "#home-intro", key: "home" },
    { title: "Product", href: "#card-product", key: "products" },
    { title: "Contact", href: "#contact-helper", key: "contact" },
    { title: "About", href: "#about", key: "about" },
  ];

  return (
    <HStack
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"fixed"}
      w={"100%"}
      h={"80px"}
      zIndex={1}
      backgroundColor={"white"}
      px={40}
    >
      <Row alignItems={"center"}>
        <Image size={"16"} source={{ uri: "/images/logo.png" }} alt="Logo" />
        <Text fontSize={24} fontWeight={700} ml={2}>
          Kunai
        </Text>
      </Row>
      <Anchor items={items} direction="horizontal" targetOffset={160} />
    </HStack>
  );
};

export default Navigation;
