import { VStack, HStack, Text, Select, Heading } from 'native-base';

type Props = {
  cliente: string
  horario: string
  tipo: string
}

export function Card({ cliente, horario, tipo }: Props) {
  return (
    <HStack justifyContent="center">
      <VStack
        w="100%"
        bg="gray.500"
        mb={5}
        borderRadius={7}
        borderWidth={3}
        color="gray.100"
        borderColor="secondary.700"
        p={3}
      >
        <Heading
          fontSize="md"
          color="gray.100"
          fontWeight="bold"
          px={5}
          justifyContent="center"
          mb={1}
        >Cliente: {cliente}
        </Heading>
        <Text
          mb={1}
          mt={0.5}
          fontSize="sm"
          color="gray.100"
          fontWeight="normal"
          px={5}
        >Agendado: {horario}
        </Text>
        <Text
          mt={0.5}
          fontSize="sm"
          color="gray.100"
          fontWeight="normal"
          px={5}
        >Tipo: {tipo}
        </Text>
      </VStack>
    </HStack >
  );
}