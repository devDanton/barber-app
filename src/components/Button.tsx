
import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
  title: string;
}
export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg="green.700"
      h={14}
      fontSize="sm"
      _pressed={{ bg: "green.600" }}
      mb={5}
      borderRadius={10}
      {...rest}
    >
      <Heading
        fontSize="md"
        color="gray.100">{title}</Heading>
    </ButtonNativeBase>
  );
}