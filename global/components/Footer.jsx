import { Box, Column, HStack, Text } from "native-base";
import React from "react";
import { CARD_COLOR } from "../constan/colors";
import { Row } from "antd";
const Footer = () => {
  return (
    <Row
      justify={"center"}
      align={"center"}
      style={{ marginTop: 150 }}
      id="about"
    >
      <Box bg={CARD_COLOR} w={"100%"} h={300} px={40} py={10}>
        <Column justifyContent={"space-between"}>
          <Text fontSize={24} fontWeight={700} textTransform={"capitalize"}>
            kunai
          </Text>
          <Text fontSize={15} fontWeight={700}>
            jln. raya cipadung no. 9 bandung 40164
          </Text>
          <Text fontSize={15} fontWeight={400} flexWrap={"wrap"}>
            Melayani 24 jam Pembelian Online hewan kurban dengan harga
            terjangkau dan kurban berkualitas
          </Text>
          <Text fontSize={15} fontWeight={400}>
            No Telp : 0812 2222 3333
          </Text>
          <Text fontSize={15} fontWeight={400}>
            Email : Kunai@Kunai.Com
          </Text>
          <Text fontSize={15} fontWeight={400}>
            © 2023 kunai. All rights reserved.
          </Text>
        </Column>
      </Box>
    </Row>
  );
};
export default Footer;
