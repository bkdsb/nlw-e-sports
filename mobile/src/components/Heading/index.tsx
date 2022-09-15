//Definimos que haverá texto no import, também uma ViewProps para dizer que essa View pode receber todas as propriedades, como estilização

import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

//Passamos o title, o subtitle, e também podemos passar todo o resto que a há dentro de Views, com '...rest'

export function Heading({title, subtitle, ...rest}:Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}