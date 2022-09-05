import React from 'react';
import { VStack, View, Box, Text, HStack, Pressable, Button } from 'native-base';

export function Filter() {
  return (
    <Pressable>
      <HStack
        mb={4}
        w="full"
        justifyContent="space-between"
      >
        <HStack
          w="full"
          px={4}
          justifyContent="space-between">
          <Button
            bg="gray.700"
            borderColor="secondary.700"
            borderRadius={3}
            borderWidth={3}
            px={5}
            py={1}
          >
            <Text color="gray.100" justifyContent="center">
              Pendentes
            </Text>
          </Button>

          <Button
            bg="gray.700"
            borderColor="green.700"
            borderRadius={5}
            borderWidth={3}
            px={5}
            py={1}>
            <Text color="gray.100">
              Finalizados
            </Text>
          </Button >
        </HStack>
      </HStack >
    </Pressable >
  );
}