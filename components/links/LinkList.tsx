import { FC } from "react";
import { Linking, Text, TouchableOpacity } from "react-native";
import { LinkListProps } from "./props";

const handlePress = (url: string) => {
  Linking.openURL(url);
};

export const LinkList: FC<LinkListProps> = ({ url, text }) => {
  return (
    <>
      <TouchableOpacity onPress={() => handlePress(url)}>
        <Text
          style={{
            color: "black",
            textDecorationLine: "none",
            marginBottom: 5,
          }}
        >
          • {text}
        </Text>
      </TouchableOpacity>
    </>
  );
};
