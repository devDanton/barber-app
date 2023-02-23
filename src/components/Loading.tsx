import { Center, Spinner, Text, View } from "native-base";
import Logo from "../assets/logo.svg"

export function Loading() {
  return (
    <Center className=" bg-background flex-1">
      <Spinner color="#22c55e" size={50} />
    </Center>
  );
}