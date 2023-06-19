import React from "react";
import { VStack, Row } from "native-base";
import Navigation from "../global/components/Navigation";
import Footer from "../global/components/Footer";
import ContentHome from "../components/Home/ContentHome";
import Card from "../global/components/Card";
import ContactHelper from "../components/Home/ContactHalper";

// Start editing here, save and see your changes.
export default function App() {
  var damy = [
    {
      title: "Qurban Standar",
      secondTitle: "Rekomendasi",
      price: "1.500.000",
      details: ["Kambing/Domba", "Berat 18-20 Kg"],
    },
    {
      title: "Qurban Premium",
      price: "3.650.000",
      details: ["Kambing/Domba", "Berat ->36 Kg"],
    },
    {
      title: "1/7 Sapi",
      price: "2.350.000",
      details: ["Berat +/- 210-230 Kg"],
    },
    {
      title: "Sapi",
      price: "16.500.000",
      details: ["Berat 200-230 Kg"],
    },
  ];
  return (
    <VStack id="Home">
      <Navigation />
      <VStack>
        <ContentHome
          title={"hewan qurban berqulitas dari pertenakan lokal"}
          description={
            "Menjual bebagai hewan qurban dan pengataran hewan qurban"
          }
          img={"images/qurban-2.png"}
        />
        <Row justifyContent={"center"} mx={20}>
          {damy.map((item, index) => (
            <Card
              key={index}
              titleCard={item.title}
              secondTitleCard={item.secondTitle}
              price={item.price}
              detailProduct={item.details}
            />
          ))}
        </Row>
        <ContactHelper />
        <Footer />
      </VStack>
    </VStack>
  );
}
