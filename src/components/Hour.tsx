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
    <VStack className='mb-2'>
      <Input
        className='bg-zinc-800 rounded-lg h-14 text-base placeholder:text-gray-300 px-5 flex-1 '
        borderWidth={0}
        label='Horário'
        onPressIn={showTimepicker}
        value={Moment(date).format("HH:mm")}
        {...rest}
      >
      </Input>
    </VStack >

  );
};






