import React, { useCallback, useState } from 'react';
import { FlatList, Heading, Text, VStack } from 'native-base';
import { Navbar } from '../components/Navbar';
import { Card, CardProps } from '../components/Card';
import { useFocusEffect } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export function Ended() {
  const [data, setData] = useState<CardProps[]>([]);

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

      {/* <FlatList
        mb={5}
        scrollEnabled
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <Card
            data={item}
            onPress={() => handleRemove(item.id)}
          />
        }></FlatList> */}
    </VStack >
  );
}