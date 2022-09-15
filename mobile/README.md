# React Native - Mobile

Precisamos definir a tipagem do arquivo PNG

```js
import backgroundImg from '../../assets/background-galaxy.png';
```

Criamos então uma pasta ``@types`` e um arquivo ``png.d.ts`` para declarar ao ts e podermos usar todas as imagens que forem importadas com essa extensão

```js
declare module '*.png';
```

## 'Children' - Background

Vai pegar tudo que estiver escrito dentro desse componente:

```js
export function Background({children}: Props) {
  return (
    <ImageBackground 
    source={backgroundImg}
    defaultSource={backgroundImg}
    style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
```

## GameCard

Como será uma região clicável nós importamos o ``TouchableOpacity``.
Como é uma imagem pegando nosso cartão como um todo, usamos o ``ImageBackground``
Também preciso importar o ``TouchableOpacityProps`` para definir todas as Props que o Touchable precisa
Tudo que vamos usar devemos importar, o Text por exemplo também:

```js
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
```

Importamos também o linear gradient para o efeito poder ser utilizado do expo:

```js
import { LinearGradient } from 'expo-linear-gradient';
```

Usamos ``export`` quando queremos reutilizar essa ``interface`` de cards para quando necessitar reutiliza-la
Isso tem uma tipagem que o GameCardProps precisa para renderizar de acordo com API:

```js
export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  },
  bannerUrl: string;
}
```

Defino que o data é o GameCardsProps

Essa não exporto, uso somente aqui:

```js
interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}
```

Vou pegar da nossa propriedade 'Props'
E então pego todo o restante das Props que não deixei explícito na tipagem e importo elas com '``...rest``'

Para a tag Image source entender que estamos buscando uma imagem por URL, envolvemos em mais uma chaves de objeto {} e adicionamos uma propriedade chamada URI:

```js
export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={{ uri: data.bannerUrl}}
      >
```
