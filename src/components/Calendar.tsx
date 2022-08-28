import { DateTimePickerAndroid, DatePickerOptions } from '@react-native-community/datetimepicker';
import Moment from 'moment';
import { View, Text, IButtonProps, IInputProps, VStack, Box } from 'native-base';
import { Hourglass } from 'phosphor-react-native';
import { useState } from 'react';
import { Button } from './Button';
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
  };

  const showDatepicker = () => {
    showMode('date');
  };

  function dataFormatada() {
    let dia = date.getDate()
    let mes = (date.getMonth() + 1)
    let ano = date.getFullYear()
    return dia + "/" + mes + "/" + ano
  }

  return (
    <Input
      label='Data'
      h={14}
      bg="gray.500"
      fontSize="md"
      borderWidth={0}
      px={5}
      mb={5}
      justifyContent="center"
      onPressIn={showDatepicker}
      value={Moment(date).format('DD/MM/YYYY')}
      {...rest}
    >
      {/* <Text
        color="white"
        fontSize="md"
      >{ } 
    </Text>*/}
    </Input >
  );
};






