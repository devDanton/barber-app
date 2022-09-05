import { VStack, Heading, HStack, FlatList, Text, Pressable, Box } from "native-base"
import { useCallback, useState } from "react"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { Button } from "../components/Button"
import { Card, CardProps } from "../components/Card"
import { Input } from "../components/Input"
import { Register } from "./Register"
import { Loading } from "../components/Loading"
import { Filter } from "../components/Filter"

export function Home() {
  const navigation = useNavigation()

  const [data, setData] = useState<CardProps[]>([]);

  function handleRegister() {
    navigation.navigate('register');
  }

  async function handleFetchData() {
    const response = await AsyncStorage.getItem("@barberapp:agendamentos");
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }

  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));

  return (
    <Pressable>
      <VStack
        h="full"
        alignItems="center"
        bg="gray.700"
        px={8}
        pt={24}
      >
        <VStack
          flex={1}
          alignItems="center"
        >
          <Heading mb={10} color="gray.100" fontSize="2xl" > Barber App</Heading>
          <Text marginBottom={2} color="gray.100" fontSize="lg">Agenda de horários</Text>
          <Filter />
          <FlatList

            mb={5}
            scrollEnabled
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <Card
                data={item}
                onPress={() => { }} />
            }>
          </FlatList>
        </VStack>
        <Button
          title="Agendar"
          w="full"
          onPress={handleRegister}
        />
      </VStack>
    </Pressable >
  )
}
