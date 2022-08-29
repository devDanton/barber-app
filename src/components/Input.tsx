import { Input as NativeBaseInput, IInputProps, Text, View } from 'native-base';

type Props = IInputProps & {
  label: string;
}
export function Input({ label, ...rest }: Props) {
  return (
    <View>
      <Text
        color="gray.300"
        fontSize="md"
      >{label}
      </Text>
      <NativeBaseInput
        bg="gray.500"
        h={14}
        size="md"
        fontSize="md"
        borderWidth={0}
        placeholderTextColor="gray.300"
        color="gray.100"
        px={5}
        mb={5}
        {...rest}
      >
      </NativeBaseInput>

    </View>
  );
}