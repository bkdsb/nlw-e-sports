// Então importamos o useEffect

import { useState, useEffect } from 'react';


//Precisamos também declarar "Image" para exibi-la
// Do ReactNative importamos o FlatList para podermos exibir listas
import { View, Image, FlatList } from 'react-native';

//Importa a logo
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard, GameCardProps } from '../../components/GameCard';

//Importa o componente Heading
import { Heading } from '../../components/Heading';

import { GAMES } from '../../utils/games';

import { styles } from './styles';

export function Home() {
  //Armazenamos no useState o primeiro sendo a variável, o segundo a função que atualiza a variável

  // Também adicionamos a tipagem feita no Component <GameCarProps> para o TS identificar o que iremos puxar da API

  const [games,setGames] = useState<GameCardProps[]>([]);

// Uma particularidade do mobile é que não colocamos localhost
// Colocamos o endereço IP principalmente por causa do Android
// http://192.168.1.14:3333/games
// Coloco o setGames para quando a resposta for transformada em JSON e recebida como data setarmos o novo estado 
  useEffect(() => {
    fetch('http://192.168.1.14:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  },
  []);
  

  return (
    <View style={styles.container}>
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

          <GameCard
            data={item}
          />
        )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
      />
    </View>
  );
}