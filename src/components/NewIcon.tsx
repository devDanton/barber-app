import React from 'react';
import { Center, Text, View, VStack } from 'native-base';
import { Plus } from 'phosphor-react-native';
import { IconProps } from 'phosphor-react-native';

export function NewIcon({ size, focused, ...rest }) {
  return (
    <View {...rest} className='w-16 h-16 flex justify-center items-center mb-5 rounded-full bg-slate-200'
      style={[{ backgroundColor: focused === true ? "white" : "gray" }]}>
      <Plus size={size} color={focused === true ? "#000000" : "#FFFFFF"} />
    </View >
  );
}