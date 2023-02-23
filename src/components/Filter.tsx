import { Text, Button, IButtonProps, useTheme } from 'native-base';

type Props = IButtonProps & {
  // & = and, | = ou, ?: indica que a propriedade é opcional
  title: string;
  isActive?: boolean;
  type: 'open' | 'closed';

}

export function Filter({ title, isActive = false, type, ...rest }: Props) {

  const { colors } = useTheme();

  const colorType = type == 'open' ? colors.orange[500] : colors.cyan[500];

  return (
    <Button

      className=' bg-zinc-800 flex-1 size'
      size="sm"
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      // bgColor="gray.700"
      // flex={1}
      {...rest}>
      <Text color={isActive ? colorType : "gray.300"} fontSize="xs" textTransform="uppercase">
        {title}
      </Text>
    </Button>
  );
} 