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
      w="full"
      h={14}
    >
      <IconButton
        icon={<CaretLeft color={colors.gray[300]} size={24} />} onPress={handleGoBack} >
      </IconButton>
    </HStack >
  );
}