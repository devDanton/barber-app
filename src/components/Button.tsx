import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";
import { TouchableOpacity } from "react-native";

type Props = IButtonProps & {
  title: string;
}
export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      className=" h-14 mx-8 w-max flex-row justify-center items-center my-2 bg-zinc-800 rounded-lg"
      _pressed={{ opacity: 0.7 }}
      {...rest}
    >
      <Heading
        className="font-bold text-xl text-gray-300"
      >{title}</Heading>
    </ButtonNativeBase >
  );
}