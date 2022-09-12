import React, { useCallback, useState } from 'react';
import { FlatList, Heading, Text, VStack } from 'native-base';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Navbar } from '../components/Navbar';
import { Card, CardProps } from '../components/Card';
import { useFocusEffect } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export function Ended() {
  const [data, setData] = useState<CardProps[]>([]);
  const { getItem, setItem } = useAsyncStorage("@barberapp:agendamentosFinalizados")

  async function handleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setData(data);
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

  useFocusEffect(useCallback(() => {
    handleFetchData();
  }, []));
  return (
    <VStack
      h="full"
      alignItems="center"
      bg="gray.700"
      px={6}
      pt={24} >
      <Toast />
      <Navbar />
      <Heading mb={10} color="gray.100">Finalizados</Heading>

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
        }></FlatList>
    </VStack >
  );
}