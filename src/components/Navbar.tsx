import React from 'react';
import { Box, HStack, IconButton, StyledProps, useTheme } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

type Props = StyledProps & {
  // title: string;
}

export function Navbar({ ...rest }: Props) {
  function handleGoBack() {
    navigation.goBack();
  }
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <HStack
      className='w-full h-0 mt-10'
    >
      <IconButton
        className='h-7 w-7 rounded-md'
        icon={<CaretLeft color={colors.gray[300]} size={24} />} onPress={handleGoBack} _pressed={{ bg: "gray.800" }}>
      </IconButton>
    </HStack >
  );
}