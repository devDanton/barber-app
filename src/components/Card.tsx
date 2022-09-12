import { VStack, HStack, Text, Select, Heading, Icon, IconButton, IButtonProps, useTheme, Button } from 'native-base';
import Moment from 'moment';
import { Pressable } from 'react-native';
import { Check, IconProps } from 'phosphor-react-native';

export type CardProps = {
  id: string;
  cliente: string;
  data: string;
  horario: string;
  corte: string;
  barba: string;
  sombrancelha: string;
  status: string;
}

type Props = IconProps & {
  data: CardProps;
  onPress: () => void;
}

export function Card({ data, onPress }: Props) {
  const { colors } = useTheme();
  return (
    <Pressable>
      <VStack
        w="100%"
        bg="gray.500"
        mb={5}
        borderRadius={10}
        borderWidth={3}
        color="gray.100"
        borderColor={'green.700'}
        p={3}
        justifyItems="center"
      >
        <Heading
          fontSize="md"
          color="gray.100"
          fontWeight="bold"
          px={5}
          justifyContent="center"
        >Cliente: {data.cliente}
        </Heading>
        <Text
          fontSize="sm"
          color="gray.100"
          fontWeight="normal"
          px={5}
        >Agendado: {Moment(data.data).format("DD/MM/YY") + " às " + data.horario}
        </Text>
        <Text
          fontSize="sm"
          color="gray.100"
          fontWeight="normal"
          px={5}
        >Tipo:
          {data.corte && !data.barba && !data.sombrancelha ? " Corte " : ""}
          {data.corte && data.barba && !data.sombrancelha ? " Corte, Barba" : ""}
          {data.corte && !data.barba && data.sombrancelha ? " Corte, Sombrancelha " : ""}
          {!data.corte && data.barba && !data.sombrancelha ? " Barba " : ""}
          {!data.corte && data.barba && data.sombrancelha ? " Barba, Sombrancelha " : ""}
          {!data.corte && !data.barba && data.sombrancelha ? " Sombrancelha" : ""}
          {data.corte && data.barba && data.sombrancelha ? " Corte, Barba, Sombrancelha" : ""}
        </Text>
        <Button borderRadius={10} mt={2} bg="gray.400" w="full" _pressed={{ bg: "green.700" }} onPress={onPress}>Finalizar
        </Button>
      </VStack>
    </Pressable >
  );
}