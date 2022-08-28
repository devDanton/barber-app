import { Heading, HStack, Pressable, Text, View, VStack } from 'native-base';
import { useState } from 'react';
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import { Button } from '../components/Button';
import { Calendar, infoData } from '../components/Calendar';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { Hour, infoHour } from '../components/Hour';

export function Register() {
  const [cliente, setCliente] = useState('');
  const [data, setData] = useState(new Date());
  const [horario, setHorario] = useState(new Date());
  const [corte, setCorte] = useState(false);
  const [barba, setBarba] = useState(false);
  const [sombrancelha, setSombrancelha] = useState(false);

  async function handleNew() {
    try {
      const id = uuid.v4();

      const newData = {
        id,
        cliente,
        data,
        horario,
        corte,
        barba,
        sombrancelha,
      };

      console.log(
        id,
        cliente,
        data,
        horario,
        corte,
        barba,
        sombrancelha)

      await AsyncStorage.setItem("@barberapp:agendamentos", JSON.stringify(newData));
      Toast.show({
        type: "seccess",
        text1: "Agendado com sucesso!"
      })
    } catch (error) {
      console.log(error)
      Toast.show({
        type: "error",
        text1: "Não foi possivel cadastrar!"
      })
    }
  }

  return (
    <VStack h="full" alignItems="center" bg="gray.700" px={8} pt={24}>
      <Heading mb={10} color="white">Agendar</Heading>
      <Text mb={5} color="white" fontSize="md"
      >Insira os dados solicitados</Text>

      <VStack w="full" flex={1}>
        <Input label="Nome cliente" onChangeText={setCliente} />
        <Calendar mode='date' />
        <Hour mode='time' />

        <HStack>
          <Checkbox value='Corte' onChange={setCorte}>
            <Text color="white" fontSize="xs">Corte</Text>
          </Checkbox>

          <Checkbox value='Barba' onChange={setBarba}
          >
            <Text color="white" fontSize="xs">Barba</Text>
          </Checkbox>

          <Checkbox value='Sombrancelha' onChange={setSombrancelha}>
            <Text color="white" fontSize="xs">Sombranc.</Text>
          </Checkbox>
        </HStack>
      </VStack>

      <Button title="Agendar" w="full" onPress={handleNew} />
    </VStack >
  );
}