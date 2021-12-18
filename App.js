import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import { Focus } from "./src/features/focus/Focus";
import RoundedButtton from "./src/components/RoundedButtton";

//Utils
import { colors } from "./src/utils/colors";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>I am going to build a timer</Text>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    borderWidth: 3,
  },
});
