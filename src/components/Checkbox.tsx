import { HStack, Checkbox as CheckboxNativeBase, ICheckboxProps } from 'native-base';

type Props = {

}
export function Checkbox({ ...rest }: ICheckboxProps) {
  return (
    <HStack className='flex-1'>
      <CheckboxNativeBase
        value=""
        {...rest}
      >
      </CheckboxNativeBase>
    </HStack>
  );
}