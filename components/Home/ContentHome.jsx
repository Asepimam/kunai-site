import React from "react";
import { Column, HStack, Image, Text } from "native-base";
import { CONTENT_COLOR_HOME } from "../../global/constan/colors";
import { Button, Row } from "antd";
const ContentHome = ({ description, title, img }) => {
  return (
    <Row
      id="home-intro"
      justify={"space-between"}
      style={{
        paddingLeft: 150,
        paddingRight: 100,
        marginTop: 140,
      }}
    >
      <Column justifyContent={"center"} w={350}>
        <Text
          fontSize={24}
          fontWeight={700}
          flexWrap={"wrap"}
          textTransform={"capitalize"}
        >
          {title}
        </Text>
        <Text color={"blueGray.200"} fontWeight={700} fontSize={14}>
          {description}
        </Text>
        <Button
          size="middle"
          style={{
            width: 246,
            border: "none",
            marginTop: 20,
            fontWeight: 700,
          }}
        >
          Selengkapnya
        </Button>
      </Column>
      <Image
        source={{ uri: img }}
        size={500}
        // backgroundColor={CONTENT_COLOR_HOME}<
        alt="content-home"
      />
    </Row>
  );
};
export default ContentHome;
