import { Center, Heading, Text, Toast, VStack } from 'native-base';
import { Navbar } from '../components/Navbar';

export function Wallet() {
  return (
    <VStack
      className='bg-black'
      h="full"
      alignItems="center"
      px={6}
      pt={24} >
      <Navbar />
      <Center>
        <Heading className='text-white'>Carteira</Heading>
      </Center>
    </VStack>
  );
}