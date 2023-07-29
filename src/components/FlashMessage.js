import React from "react";
import { View, Button } from "react-native";

import { showMessage, hideMessage } from "react-native-flash-message";
import SingleProductComponent from "./SingleProductComponent";
import PlusMinusButton from "./PlusMinusButton";

export default function FlashMessage({data}) {

    return <SingleProductComponent data={PlusMinusButton} />
  return (
    <View style={{ flex: 1 }}>
      <Button
        onPress={() => {
          /* HERE IS WHERE WE'RE GOING TO SHOW OUR FIRST MESSAGE */
          showMessage({
            message: "Simple message",
            type: "info",
          });
        }}
        title="Request Details"
        color="#841584"
      />
    </View>
  );
}