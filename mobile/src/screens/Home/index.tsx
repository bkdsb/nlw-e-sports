// Então importamos o useEffect

import { useState, useEffect } from 'react';


//Precisamos também declarar "Image" para exibi-la
// Do ReactNative importamos o FlatList para podermos exibir listas
import { Image, FlatList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';


//Importa a logo
import logoImg from '../../assets/logo-nlw-esports.png';
//Importamos o background e envolvemos a SafeView dentro dele e no game fazemos a mesma coisa
import { Background } from '../../components/Background';

import { GameCard, GameCardProps } from '../../components/GameCard';

//Importa o componente Heading
import { Heading } from '../../components/Heading';

import { styles } from './styles';

export function Home() {
  //Armazenamos no useState o primeiro sendo a variável, o segundo a função que atualiza a variável

  // Também adicionamos a tipagem feita no Component <GameCarProps> para o TS identificar o que iremos puxar da API

  const [games,setGames] = useState<GameCardProps[]>([]);

// Uma particularidade do mobile é que não colocamos localhost
// Colocamos o endereço IP principalmente por causa do Android
// http://192.168.1.14:3333/games
// Coloco o setGames para quando a resposta for transformada em JSON e recebida como data setarmos o novo estado 
  
//Para nos movermos para outra tela, criamos uma função handleOpenGame() e importamos o useNavigation

const navigation = useNavigation();

//Então uso de navigation uma propriedade chamada navigate e digo qual a rota que quero
//Também preciso definir uma tipagem para o TypeScript reconhecer as rotas
//Então na função preciso colocar uma tipagem, nesse caso, usamos a própria do GameCardProps
function handleOpenGame({id, title, bannerUrl}: GameCardProps){
  navigation.navigate('game', {id, title, bannerUrl});
}

useEffect(() => {
    fetch('http://192.168.1.14:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  },
  []);
  

  return (
    <Background>

    <SafeAreaView style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre o seu duo"
        subtitle="Selecione o game que deseja jogar..."
      />


      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item}) => (

          //O nosso GameCard tem uma propriedade onPress e passamos a função que queremos chamar, e só está com essa opção porque extendemos as Props do TouchableOpacityProps para o GameCard

          //Então na função handleOpenGame, preciso passar o jogo selecionado, podemos deixar somente com a função, mas se existem parâmetros temos que adicionar () => 
          <GameCard
            data={item}
            onPress={() => handleOpenGame(item)}
          />
        )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
      />
    </SafeAreaView>
    </Background>
  );
}