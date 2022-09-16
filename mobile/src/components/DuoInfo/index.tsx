import { ColorValue, Text, View } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

//Criando tipagem

interface Props {
  label: string;
  value: string;
  colorValue?: ColorValue;
}

//Dentro do React Native, podemos colocar mais de uma regra de estilo, colocamos um array [] - style={[styles.value, {color: colorValue}]}

export function DuoInfo({ label, value, colorValue = THEME.COLORS.TEXT}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text 
      style={[styles.value, {color: colorValue}]}
      numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  );
}