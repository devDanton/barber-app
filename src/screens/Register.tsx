import { Heading, HStack, Pressable, Text, View, VStack } from 'native-base';
import { useState } from 'react';
import uuid from 'react-native-uuid'
import { Button } from '../components/Button';
import { Calendar } from '../components/Calendar';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';

type Props = {
  cliente: string
  horario: string
  tipo: string
}
export function Register() {
  const [cliente, setCliente] = useState('');
  const [data, setData] = useState();
  const [horario, sethorario] = useState('');
  const [corte, setCorte] = useState(false);
  const [barba, setBarba] = useState(false);
  const [sombrancelha, setSombrancelha] = useState(false);

  function handleNewRegister() {
    const id = uuid.v4();

    const newData = {
      id,
      cliente,
      horario,
      corte,
      barba,
      sombrancelha
    };
    console.log(newData);
  }

  return (
    <Pressable>
      <VStack
        h="full"
        alignItems="center"
        bg="gray.700"
        px={8}
        pt={24}
      >
        <Heading mb={10} color="white">Agendar</Heading>
        <Text mb={5} color="white" fontSize="md">Insira os dados solicitados</Text>
        <VStack
          w="full"
          flex={1}
        >
          <Input label="Nome cliente" onChangeText={setCliente} />
          <Calendar />
          <HStack>
            <Checkbox
              value='Corte'
              onChange={setCorte}
            >
              <Text color="white" fontSize="xs">Corte</Text>
            </Checkbox>

            <Checkbox
              value='Barba'
              onChange={setBarba}
            >
              <Text color="white" fontSize="xs">Barba</Text>
            </Checkbox>

            <Checkbox
              value='Sombrancelha'
              onChange={setSombrancelha}
            >
              <Text color="white" fontSize="xs">Sombranc.</Text>
            </Checkbox>

          </HStack>
        </VStack>

        <Button title="Agendar" w="full" onPress={handleNewRegister} />
      </VStack >
    </Pressable>
  );
}