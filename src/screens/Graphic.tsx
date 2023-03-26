import { Center, Heading, Text, VStack } from 'native-base';
import { Navbar } from '../components/Navbar';

export function Graphic() {
  return (
    <VStack
      className='bg-black'
      h="full"
      alignItems="center"
      px={6}
      pt={24} >
      <Navbar />
      <Center>
        <Heading className='text-white'>Estatisticas</Heading>
      </Center>
    </VStack>
  );
}