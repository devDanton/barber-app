import { VStack, Heading, HStack, FlatList, Text, Pressable, Box, Divider } from "native-base"
import { useCallback, useState } from "react"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage"
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import { Button } from "../components/Button"
import { Card, CardProps } from "../components/Card"
import { Input } from "../components/Input"
import { Register } from "./Register"
import { Loading } from "../components/Loading"
export function Home() {
  const navigation = useNavigation()

  const [data, setData] = useState<CardProps[]>([]);
  const [dataFinal, setDataFinal] = useState<CardProps[]>([]);

  const { getItem, setItem } = useAsyncStorage("@barberapp:agendamentos");

  function handleRegister() {
    navigation.navigate('register');
  }

  async function handleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }

  async function handleFetchDataFinal() {
    const response = await AsyncStorage.getItem("@barberapp:agendamentosFinalizados");
    const dataFinal = response ? JSON.parse(response) : [];
    setDataFinal(dataFinal);
  }

  async function handleRemove(id: string) {
    try {
      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      const data = previousData.filter((item: CardProps) => item.id !== id);
      setItem(JSON.stringify(data));
      handleFetchData();

      Toast.show({
        type: "success",
        text1: "Finalizado com sucesso"
      })
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Não foi possível finalizar"
      })
    }
  }

  async function handleMove(id: string) {
    try {
      const response = await getItem();
      const responseF = await AsyncStorage.getItem("@barberapp:agendamentosFinalizados");
      const previousData = response ? JSON.parse(response) : [];
      const previousDataF = responseF ? JSON.parse(response) : [];

      const dataF = previousData.filter((item: CardProps) => item.id === id) + previousDataF;
      const data = previousData.filter((item: CardProps) => item.id !== id);
      setItem(JSON.stringify(data));
      AsyncStorage.setItem("@barberapp:agendamentosFinalizados", JSON.stringify(dataF));
      handleFetchData();
      handleFetchDataFinal();

      Toast.show({
        type: "success",
        text1: "Finalizado com sucesso"
      })
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Não foi possível finalizar"
      })
    }
  }

  function handleFinalizados() {
    navigation.navigate("ended");
  }

  useFocusEffect(useCallback(() => {
    handleFetchData();
    handleFetchDataFinal();
  }, []));

  return (
    <Pressable>
      <VStack
        h="full"
        alignItems="center"
        bg="gray.700"
        px={6}
        pt={24}
      >
        <Toast />
        <HStack>
          <Heading mb={10} color="gray.100" fontSize="2xl">Barber App</Heading>
        </HStack>
        <VStack
          flex={1}
          alignItems="center"
        >
          <HStack w="full" justifyContent="space-around" alignItems="center">
            <Heading mb={2} color="gray.100">Meus horários</Heading>
            <Text color="gray.200">{data.length}</Text>
          </HStack>
          <FlatList
            mb={5}
            scrollEnabled
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <Card
                data={item}
                onPress={() => handleRemove(item.id)}
              />
            }>
          </FlatList>
        </VStack>
        {/* <Divider bg="gray.100" mb={5} />
        <Button title="Finalizados" h={10} bg="gray.700" mb={1} fontWeight="normal" onPress={handleFinalizados} /> */}
        <Button
          title="Agendar"
          w="full"
          onPress={handleRegister}
        />
      </VStack>
    </Pressable >
  )
}
