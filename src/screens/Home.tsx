import { VStack, Heading, HStack, FlatList, Text, Pressable, Box } from "native-base"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { Input } from "../components/Input"
import { Register } from "./Register"
import { Loading } from "../components/Loading"

export function Home() {
  const navigation = useNavigation()

  function handleRegister() {
    navigation.navigate('register');
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
        <VStack
          flex={1}
          alignItems="center"
        >
          <Heading mb={10} color="white" fontSize="2xl" > Barber App</Heading>
          <Text marginBottom={2} color="white" fontSize="lg">Agenda de horários</Text>

          <Card cliente="Danton da Rosa Abreu" horario="14/08/2022 às 14:20" tipo="Corte, barba e sombrancelha" />

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
