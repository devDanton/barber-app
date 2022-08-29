
import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
  title: string;
}
export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg="indigo.500"
      h={14}
      fontSize="sm"
      _pressed={{ bg: "primary.700" }}
      mb={1}
      {...rest}
    >
      <Heading
        fontSize="md"
        color="gray.100">{title}</Heading>
    </ButtonNativeBase>
  );
}