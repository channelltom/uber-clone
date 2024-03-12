import { Icon } from "@rneui/base";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

data = [
  {
    id: "1234",
    icon: "home",
    location: "Home",
    destination: "Blackmans Bay, TAS, Australia",
  },
  {
    id: "5678",
    icon: "briefcase",
    location: "Work",
    destination: "Surry Hills, NSW, Australia",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => {
        <View style={[tw`bg-gray-300`, { height: 0.5 }]} />;
      }}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
