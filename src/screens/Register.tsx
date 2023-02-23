import uuid from 'react-native-uuid'
import { get_realm } from '../databases/realm';
import { PressableProps } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Heading, HStack, Pressable, Text, View, VStack } from 'native-base';
import { useState } from 'react';
import { Button } from '../components/Button';
import { Calendar, infoData } from '../components/Calendar';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { Hour, infoHour } from '../components/Hour';
import { Navbar } from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import Moment from 'moment';

export type AgendamentoProps = {
  _id: string;
  client: string
  corte: boolean;
  barba: boolean;
  sombrancelha: boolean;
  status: string;
  created_at: Date;
  end_date: Date;
  end_time: Date;
}
type Props = PressableProps & {
  data: AgendamentoProps;
}


export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [getItem, setItem] = useState();
  const [cliente, setCliente] = useState('');
  const [corte, setCorte] = useState(false);
  const [barba, setBarba] = useState(false);
  const [sombrancelha, setSombrancelha] = useState(false);
  const [status, setStatus] = useState('');

  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  async function handleNewAppointmentRegister() {
    const realm = await get_realm();

    console.log(infoData.data)
    try {

      setIsLoading(false);
      if (cliente != "") {
        realm.write(() => {
          const created = realm.create('Agend', {
            _id: uuid.v4(),
            client: cliente,
            corte: corte,
            barba: barba,
            sombrancelha: sombrancelha,
            status: "open",
            created_at: new Date(),
            end_date: infoData.data === undefined ? new Date()
              : infoData.data,
            end_time: infoHour.hour === undefined ? new Date()
              : infoHour.hour,
          });
          console.log("Created: ", created);
          infoData.data = new Date();
          infoHour.hour = new Date();
        });

        Toast.show({
          type: "success",
          text1: "Agendado com sucesso!"
        });

      } else {
        Toast.show({
          type: "error",
          text1: "Preencha o nome do cliente!"
        });
      }
    }
    catch (error) {
      console.log(error)
      Toast.show({
        type: "error",
        text1: "Não foi possivel agendar!"
      });
    } finally {
      realm.close();
      setIsLoading(false);
    }
  }

  return (
    <Pressable >
      <VStack className='flex w-full h-full items-center bg-black px-8 pt-24'>
        <Navbar />
        <Heading className='text-white my-4 font-Black text-3xl'>Agendar</Heading>
        <Toast />
        <Text
          className='text-white my-4 font-medium text-base'
        >Insira os dados solicitados</Text>

        <VStack className='w-full flex-1'>
          <Input className="" label="Nome cliente" onChangeText={setCliente} />
          <Calendar className="pb-2" mode='date' />
          <Hour className="pb-2" mode='time' />

          <HStack className='w-full flex flex-row content-between pt-4'>
            <Checkbox value='Corte' onChange={setCorte}>
              <Text className='text-gray-300 text-base '>Corte</Text>
            </Checkbox>

            <Checkbox value='Barba' onChange={setBarba}>
              <Text className='text-gray-300 text-base'>Barba</Text>
            </Checkbox>

            <Checkbox value='Sombrancelha' onChange={setSombrancelha}>
              <Text className='text-gray-300 text-base'>Sombran...</Text>
            </Checkbox>
          </HStack>
        </VStack>
        <Button className='w-full' title="Agendar"
          onPress={handleNewAppointmentRegister} />
      </VStack >
    </Pressable>
  );
}