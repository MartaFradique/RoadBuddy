import React from 'react'
import {Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";



const List = () => {

  const navigation = useNavigation();
  return (
    <div>
     <Text
      onPress={() => navigation.navigate("WelcomePage")}
     >
      hello
     </Text>
    </div>
  )
}

export default List
