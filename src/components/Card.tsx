import { VStack, HStack, Text, Select, Heading, Icon, IconButton, IButtonProps, useTheme, Button, Box } from 'native-base';
import Moment from 'moment';
import { Pressable } from 'react-native';
import { Check, IconProps } from 'phosphor-react-native';

export type CardProps = {
  _id: string;
  client: string
  corte: boolean;
  barba: boolean;
  sombrancelha: boolean;
  status: 'open' | "closed";
  created_at: Date;
  end_date: Date;
  end_time: Date;
}

type Props = IconProps & {
  data: CardProps;
  onPress: () => void;
}

// export type OrderProps = OrderStyleProps & {
//   _id: string;
//   patrimony: string;
//   equipment: string;
//   description: string;
//   created_at: Date;
// }

// type Props = PressableProps & {
//   data: OrderProps;
// };

let bg;
export function Card({ data, onPress }: Props) {
  return (
    <Pressable>
      <HStack
        className='mb-2 items-center justify-between overflow-hidden bg-zinc-800 rounded-md'

      >
        {data.status === 'open'
          ? <Box className='h-full w-2 bg-orange-500' />
          : <Box className='h-full w-2 bg-cyan-500' />
        }
        <VStack
          className=' '
          // w="full"
          flex={1}
          color="gray.100"
          p={3}
          justifyItems="center"
        >
          <HStack className='flex-wrap align-middle justify-between'>
            <Heading
              className='flex-row'
              fontSize="md"
              color="gray.100"
              fontWeight="bold"
              px={3}
              justifyContent="center"
            >{data.client}
            </Heading>
            <Text
              className='text-center'
              fontSize="sm"
              color="gray.100"
              fontWeight="normal"
              pl={3}
            >{Moment(data.end_date).format("DD/MM/YY") + " às " + Moment(data.end_time).format("HH:mm")}
            </Text>
            <Text
              className='inline'
              fontSize="sm"
              color="gray.100"
              fontWeight="normal"
              pl={3}
            >
              {data.corte && !data.barba && !data.sombrancelha ? " Corte " : ""}
              {data.corte && data.barba && !data.sombrancelha ? " Corte, Barba" : ""}
              {data.corte && !data.barba && data.sombrancelha ? " Corte, Sombrancelha " : ""}
              {!data.corte && data.barba && !data.sombrancelha ? " Barba " : ""}
              {!data.corte && data.barba && data.sombrancelha ? " Barba, Sombrancelha " : ""}
              {!data.corte && !data.barba && data.sombrancelha ? " Sombrancelha" : ""}
              {data.corte && data.barba && data.sombrancelha ? " Corte, Barba, Sombrancelha" : ""}
            </Text>
          </HStack>
          {
            data.status == "open"
              ? <Button className=' mx-3 flex-1 bg-orange-600 mt-2' _pressed={{ opacity: 0.7 }} onPress={onPress}>{"Concluir"}
              </Button>
              : <Button className=' mx-3 flex-1 bg-cyan-500 mt-2' _pressed={{ opacity: 0.7 }} onPress={onPress}>{"Reabrir"}
              </Button>
          }

        </VStack>
      </HStack>
    </Pressable >
  );
}