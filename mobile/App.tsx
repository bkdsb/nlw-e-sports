import { StatusBar } from 'react-native';

//O use fonts é responsável pelo carregamento da nossa fonte, como instalamos o componente expo-google-fonts, importamos ele também

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';

// O componente é uma função que retorna o que deve ser renderizado na tela
// A view é equivalente a uma div

//Por exemplo, nessa view estamos dizendo que ela vai receber um estilo, e esse estilo é um container que vem de dentro desse objeto styles

// interface ButtonProps {
//   title: string;
// }

// function Button(props: ButtonProps) {
//   return (
//     <TouchableOpacity>
//       <Text>
//         {props.title}
//       </Text>
//     </TouchableOpacity>
//   )
// }


export default function App() {
  //Abre parentes e adicionamos os objetos que queremos utilizar

  //Para garantir que as fontes carreguem, confirmando com um boolean
  const [fontsLoaded] =
    useFonts({
      Inter_400Regular,
      Inter_600SemiBold,
      Inter_700Bold,
      Inter_900Black
    });

  return (
    // <View style={styles.container}>
    //     <Button  title='Send 2'/>

    //   <StatusBar style="auto" />

    // {fontsLoaded ? <Home /> : <Loading />} Caso nossa fonte seja carregada mostre a rome, caso contrário, mostre o loading 

    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loading />}

    </Background>
  );
}

// E esse objeto styles ele nada mais é que um StyleSheet e nós criamos e definimos o nome e quais são as regras, a diferença do css web é que usamos background-color, e aqui utilizamos camel case, "backgroundColor", também por padrão no React Native o flex vem ativado, sem precisar do "display: flex"

// Também utilizamos aspas quando é texto e quando é número não precisa

//O Button é o componente, que é uma função agora, precisa retornar alguma coisa

//Recupero a propriedade pelo props:




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// Para usar uma font expo install expo-font @expo-google-fonts/inter utilizamos o gerenciador de pacotes do proprio expo q faz tudo nativamente para gente

// Também uma biblioteca chamada React Navigations
// expo install react-native-safe-area-context
// Para uma aplicação funcionar dentro dos limites da tela

// Também para termos a biblioteca de gradient
// expo install expo-linear-gradient
