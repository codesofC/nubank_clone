import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { Operations } from "@/constants/Operations";
import { OperationsHomeProps } from "@/types";

const OperationsContainer = () => {
  const renderItem = ({ item }: { item: OperationsHomeProps }) => (
    <View className="gap-y-3 items-center mr-4">
      <Pressable className="relative p-4 rounded-full bg-gray-200">
        {item.icon}
        {item.extra && (
          <Text className="bg-primary p-[1px] rounded-sm text-sm absolute -bottom-2 text-center text-white">
            {" "}
            {item.extra}{" "}
          </Text>
        )}
      </Pressable>
      <Text className="text-center flex-wrap"> {item.title} </Text>
    </View>
  );

  return (
    <FlatList
      data={Operations}
      renderItem={renderItem}
      keyExtractor={(_item, index) => index.toString()}
      horizontal
    />
  );
};

export default OperationsContainer;
