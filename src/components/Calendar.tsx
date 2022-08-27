import { DateTimePickerAndroid, DatePickerOptions } from '@react-native-community/datetimepicker';
import { View, Text, IButtonProps, IInputProps, VStack, Box } from 'native-base';
import { Hourglass } from 'phosphor-react-native';
import { useState } from 'react';
import { Button } from './Button';
'react-native-calendars/src/services';
import { Input } from './Input';

type Props = IInputProps & {
  placeholderDate,
  placeholderHour
}
export const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(selectedDate);
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
  const showTimepicker = () => {
    showMode('time');
  };

  function dataFormatada() {
    let dia = date.getDate()
    let mes = (date.getMonth() + 1)
    let ano = date.getFullYear()
    return dia + "/" + mes + "/" + ano
  }
  const onChangeDate = date => {
    setDate(date);
  };

  return (
    <VStack>

      <Box

        mb={10}

      >
      </Box>
    </VStack >

  );
};






