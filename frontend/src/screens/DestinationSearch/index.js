import React, { useState } from "react";
import { View, TextInput, FlatList, Text, Pressable } from "react-native";
import styles from "./styles";
import searchResults from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const DestinationSearchScreen = (props) => {
  const [inputText, setInputText] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        onChangeText={setInputText}
      />

      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Guests")}
            style={styles.row}
          >
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
