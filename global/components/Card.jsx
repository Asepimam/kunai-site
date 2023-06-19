import React from "react";
import { Avatar, Card, List } from "antd";
import { Box, Column, Text, Button, Row } from "native-base";
import { CARD_COLOR_ACTIVATE } from "../constan/colors";

const CardProduct = ({ titleCard, secondTitleCard, price, detailProduct }) => {
  return (
    <Card
      id="card-product"
      title={
        <>
          <Column alignItems={"center"}>
            <Text fontSize={24} color={"white"}>
              {titleCard}
            </Text>
            <Text fontSize={16} fontWeight={400} color={"blueGray.300"}>
              {secondTitleCard ? secondTitleCard : " "}
            </Text>
          </Column>
        </>
      }
      bordered={false}
      style={{
        width: 246,
        border: "none",
        borderRadius: 20,
        margin: 10,
        justifyContent: "stretch",
      }}
      bodyStyle={{ paddingBottom: 10 }}
      headStyle={{
        textAlign: "center",
        backgroundColor: "#74b816",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 100,
      }}
      //   onClick={}
    >
      <Box borderBottomWidth={1} w={"100%"} my={4} alignItems={"center"} pb={4}>
        <Text fontWeight={600} fontSize={21}>
          Rp {price} / Ekor
        </Text>
      </Box>
      <Row justifyContent={"center"}>
        <Column>
          <List
            dataSource={detailProduct}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <Text fontWeight={700} fontSize={14}>
                      {item}
                    </Text>
                  }
                  avatar={<Avatar src="/images/round-green.png" size={10} />}
                />
              </List.Item>
            )}
          />
          <Button
            size={"sm"}
            style={{
              backgroundColor: CARD_COLOR_ACTIVATE,
              width: 200,
              borderRadius: 12,
              marginTop: 10,
            }}
          >
            Detail
          </Button>
        </Column>
      </Row>
    </Card>
  );
};
export default CardProduct;
