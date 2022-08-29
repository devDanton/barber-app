import { DateTimePickerAndroid, DatePickerOptions } from '@react-native-community/datetimepicker';
import Moment from 'moment';
import { View, Text, IButtonProps, IInputProps, VStack, Box } from 'native-base';
import { Hourglass } from 'phosphor-react-native';
import { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

let hour: Date
export const infoHour = {
  hour
}

type Props = IInputProps & {
  mode: string
}
export function Hour({ mode, ...rest }: Props) {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    infoHour.hour = selectedDate;
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true
    });
  };

  const showTimepicker = () => {
    showMode('time');
  };



  return (
    <VStack>
      <Input
        label='Horário'
        h={14}
        bg="gray.500"
        fontSize="md"
        borderWidth={0}
        px={5}
        mb={10}
        justifyContent="center"
        onPressIn={showTimepicker}
        value={Moment(date).format("HH:mm")}
        {...rest}
      >
        {/* <Text
          color="gray.100"
          fontSize="md"
        >{} 
      </Text>*/}
      </Input>
    </VStack >

  );
};






