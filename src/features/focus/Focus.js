import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

// Componenets
import RoundedButtton from "../../components/RoundedButtton";

// Utils
import { colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md, borderRadius: 5 }}
            onSubmitEditing={({ nativeEvent }) => {
              setTmpItem(nativeEvent.text);
            }}
          />
          <RoundedButtton
            title="+"
            size={50}
            onPress={() => addSubject(tmpItem)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#fff",
    borderWidth: 2,
  },

  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 2,
  },

  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },

  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: "row",
    alignItems: "center",
  },
});
