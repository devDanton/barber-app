import { Input as NativeBaseInput, IInputProps, Text, View } from 'native-base';

type Props = IInputProps & {
  label: string;
}
export function Input({ label, ...rest }: Props) {
  return (
    <View>
      <Text
        className='text-gray-300 text-base'
      >{label}
      </Text>
      <NativeBaseInput
        className='bg-zinc-800 h-14 text-base placeholder:text-gray-300 flex-1'
        borderWidth={0}
        {...rest}
      >
      </NativeBaseInput>

    </View >
  );
}