// Para irmos de uma página a outra usamos o react navigation

// A gente tem 3 estratégias, a stack navigator, quando você tem uma tela e abre sobre a outra, na tela home e abre por cima outra tela, a home não foi fechada, está em segundo plano e é a que usamos

// Também temos, a tab navigator, com os botões na tela 

// E também temos a drawer navigation, quando vc tem uma tela que vc puxa pelas laterais

// Para instalar a biblioteca npm install, o core da instalação @react-navigation/native

// Também precisamos instalar dependências que lida com transições de uma tela para outra 
// expo install react-native-screens

// E o safeareacontext para garantir que os elementos estejam sempre sendo exibidos na area segura da tela 
// react-native-safe-area-context

// O comando inteiro 
// expo install react-native-screens react-native-safe-area-context

// Quando utilizamos o expo, precisamos apenas aproveitar os comandos, e não fazer manualmente

// Importamos o rnsac e adicionamos o SafeAreaView e trocamos da View padrão por ela em todos os lugares

//Agora vamos instalar a estratégia que utilizaremos para navegar que é a Stack

// npm install @react-navigation/native-stack


import { View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//Importamos do React Navigation o useRoute para resgatarmos as informações que vem das rotas 
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png';


import { THEME } from '../../theme';
import { styles } from './styles';

import { GameParams } from '../../@types/navigation';

import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';

export function Game() {

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  //Criamos a função e adicionamos o método do navigation.goBack, e chamaremos ele quando clicarmos no TouchableOpacity
  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right}/>
        </View>

      <Image 
      source={{ uri: game.bannerUrl}}
      style={styles.cover}
      resizeMode="cover"
      />

      <Heading 
      title={game.title}
      subtitle="Conecte-se e comece a jogar!"
      />

      </SafeAreaView>
    </Background>
  );
}