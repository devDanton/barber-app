import { DateTimePickerAndroid, DatePickerOptions } from '@react-native-community/datetimepicker';
import Moment from 'moment';
import { View, Text, IButtonProps, IInputProps, VStack, Box } from 'native-base';
import { useState } from 'react';
import { Input } from './Input';
'react-native-calendars/src/services';

let data: Date;
export const infoData = {
  data
};

type Props = IInputProps & {
  mode: string
}
export function Calendar({ mode, ...rest }: Props) {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    infoData.data = selectedDate;
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true
    });
    console.log(date)
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <Input
      className='bg-zinc-800 rounded-lg h-14 text-base placeholder:text-gray-300 px-5 flex-1'
      borderWidth={0}
      label='Data'
      onPressIn={showDatepicker}
      value={Moment(date).format('DD/MM/YYYY')}
      {...rest}
    >
    </Input >
  );
};






