import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RoundedButtton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <View style={{ borderColor: "#fff", borderWidth: 2 }}>
      <TouchableOpacity style={[styles(size).radius, style]}>
        <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoundedButtton;

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#fff",
      borderWidth: 2,
    },

    text: {
      color: "#fff",
      fontSize: size / 3,
    },
  });
