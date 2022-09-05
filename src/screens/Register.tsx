import { Heading, HStack, Pressable, Text, View, VStack } from 'native-base';
import { useState } from 'react';
import uuid from 'react-native-uuid'
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import Moment from 'moment';

import { Button } from '../components/Button';
import { Calendar, infoData } from '../components/Calendar';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { Hour, infoHour } from '../components/Hour';
import { Navbar } from '../components/Navbar';

export function Register() {
  const { getItem, setItem } = useAsyncStorage("@barberapp:agendamentos");
  const [cliente, setCliente] = useState('');
  const [corte, setCorte] = useState(false);
  const [barba, setBarba] = useState(false);
  const [sombrancelha, setSombrancelha] = useState(false);

  async function handleNew() {
    try {
      const id = uuid.v4();

      const newData = {
        id,
        cliente,
        data: infoData.data != undefined ? Moment(infoData.data.toLocaleString()).format('MM/DD/YY') : Moment(new Date()).format('MM/DD/YY'),
        horario: infoHour.hour != undefined ? Moment(infoHour.hour.toLocaleString()).format('HH:mm') : Moment(new Date()).format('HH:mm'),
        corte,
        barba,
        sombrancelha
      };

      infoData.data = new Date();
      infoHour.hour = new Date();

      //obtem os dados salvos anteriormente
      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      const data = [...previousData, newData];

      await setItem(JSON.stringify(data));
      Toast.show({
        type: "success",
        text1: "Agendado com sucesso!"
      });
    } catch (error) {
      console.log(error)
      Toast.show({
        type: "error",
        text1: "Não foi possivel cadastrar!"
      });
    }
  }

  return (
    <VStack h="full" alignItems="center" bg="gray.700" px={8} pt={24}>
      <Navbar />
      <Toast />
      <Heading mb={10} color="gray.100">Agendar</Heading>
      <Text mb={5} color="gray.100" fontSize="md"
      >Insira os dados solicitados</Text>

      <VStack w="full" flex={1}>
        <Input label="Nome cliente" onChangeText={setCliente} />
        <Calendar mode='date' />
        <Hour mode='time' />

        <HStack>
          <Checkbox value='Corte' onChange={setCorte}>
            <Text color="gray.100" fontSize="xs">Corte</Text>
          </Checkbox>

          <Checkbox value='Barba' onChange={setBarba}
          >
            <Text color="gray.100" fontSize="xs">Barba</Text>
          </Checkbox>

          <Checkbox value='Sombrancelha' onChange={setSombrancelha}>
            <Text color="gray.100" fontSize="xs">Sombranc.</Text>
          </Checkbox>
        </HStack>
      </VStack>

      <Button title="Agendar" w="full" onPress={handleNew} />
    </VStack >
  );
}