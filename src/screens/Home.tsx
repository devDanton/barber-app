import { VStack, Heading, HStack, Text, Pressable, Center, useTheme, Button as ButtonNativeBase } from "native-base"
import React, { useCallback, useState } from "react"

import { useFocusEffect, useNavigation } from "@react-navigation/native"

import { Alert, FlatList } from "react-native";
import { get_realm } from "../databases/realm";
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import { Card, CardProps } from "../components/Card";
import { Filter } from "../components/Filter";
import { ChatTeardropText } from "phosphor-react-native";
import { Loading } from "../components/Loading";
import Logo from "../assets/logo.svg"

export function Home() {
  const { colors } = useTheme();
  const [data, setData] = useState<CardProps[]>([]);
  const [status, setStatus] = useState<'open' | 'closed'>('open');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation()

  async function fetchAgendamentos() {
    setIsLoading(true);

    const realm = await get_realm();

    try {
      const response = await realm
        .objects<CardProps[]>("Agend")
        .filtered(`status = '${status}'`)
        .sorted("end_date")
        .toJSON();

      setData(response);
      console.log(status)
      console.log(response);

      // Toast.show({
      //   type: "success",
      //   text1: "Agendamentos carregados com sucesso!"
      // });

    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Não foi possível carregar os agendamentos!"
      });

    } finally {
      realm.close();
      console.log("REAML.CLOSE")
      setIsLoading(false);
    }
  }

  async function updateAgendamentos(id: string) {

    const realm = await get_realm();
    try {
      const agendamentoSelected = await realm
        .objects<CardProps>("Agend")
        .filtered(`_id = '${id}'`)[0]

      console.log(agendamentoSelected);

      realm.write(() => {
        agendamentoSelected.status = agendamentoSelected.status === 'open'
          ? 'closed'
          : 'open';

        if (status === 'open') {
          Toast.show({
            type: "success",
            text1: "O agendamento foi concluido!"
          });
          fetchAgendamentos();

        } else {
          Toast.show({
            type: "success",
            text1: "O agendamento foi reaberto!"
          });

          fetchAgendamentos()
        }
      });

    } catch (error) {
      console.log(error);
      Toast.show({
        type: "Error",
        text1: "Não foi possível finalizar o agendamento!!"
      });
    }
  }

  function handleUpdateAgendamento(id: string) {
    if (status === 'open') {
      Alert.alert(
        "Chamado",
        "Deseja concluir o agendamento?",
        [
          {
            text: "Cancelar",
            style: "cancel"
          },
          {
            text: "confirmar",
            onPress: () => updateAgendamentos(id)
          }
        ]
      );
    } else {
      Alert.alert(
        "Chamado",
        "Deseja reabrir o agendamento?",
        [
          {
            text: "Cancelar",
            style: "cancel"
          },
          {
            text: "confirmar",
            onPress: () => updateAgendamentos(id)
          }
        ]
      );
    }
  }

  function handleRegister() {
    navigation.navigate('register');
  }

  function handleFinalizados() {
    navigation.navigate("ended");
  }

  function handleCarteira() {
    navigation.navigate("wallet");
  }
  function handleGrafico() {
    navigation.navigate("graphic");
  }

  useFocusEffect(useCallback(() => {
    fetchAgendamentos();
  }, [status]));

  return (
    <Pressable>
      <VStack
        className="w-full h-full bg-black"
      >
        <HStack className="w-full bg-background pt-10">
          <HStack className="flex-1 justify-center px-8 items-center">
            <Logo width={200} height={100} />
            {/* <Heading className="text-white font-bold text-4xl my-5">Barber App</Heading> */}
            <Toast />
          </HStack>
        </HStack>
        <Toast />
        <VStack
          className="flex-1 px-8"
        >
          <HStack className="mt-8 mb-4 flex justify-between items-center" >
            <Heading className="text-gray-300">Meus horários</Heading>
            <Text className="text-gray-300">{data.length}</Text>
          </HStack>
          <HStack space={3} marginBottom={2}>
            <Filter
              title="Pendentes"
              isActive={status === 'open'}
              type="open"
              onPress={() => setStatus('open')}
            />

            <Filter
              title="Finalizados"
              isActive={status == 'closed'}
              type="closed"
              onPress={() => setStatus('closed')}
            />
          </HStack>
          {isLoading ? <Loading /> : <FlatList
            scrollEnabled
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <Card data={item} onPress={() => handleUpdateAgendamento(item._id)} />
            )}
            // contentContainerStyle={{}}
            ListEmptyComponent={() => (
              <Center className="flex-1 mt-4">
                <ChatTeardropText color={colors.gray[300]} size={40} />
                <Text color="gray.300" fontSize="xl" textAlign="center">
                  Você ainda não possui {'\n'}
                  agendamentos {status === 'open' ? 'em andamento' : 'finalizadas'}
                </Text>
              </Center>
            )} />
          }
        </VStack>
      </VStack>
    </Pressable >
  )
}
