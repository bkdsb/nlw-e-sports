

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Game } from '../screens/Game';

//Nós conseguimos desestruturar o createNativeStackNavigator

// O Navigator para criar navegação e o Screen para quando tal rota for chamada qual componente deve ser renderizado

const { Navigator, Screen} = createNativeStackNavigator();

// Criamos uma função chamada AppRoutes() {} return ()
//Que retorna o Navigator com um Screen com o nome da rota, por exemplo: home
// E quando alguém chamar pela rota home, qual componente quero renderizar

//Podemos customizar as screens, com a propriedade options {{ headerShown: false }}

//Ou passamos direto para o Navigator screenOptions={{ headerShown: false }} ele também vai remover o cabeçalho mas para todas as rotas

export function AppRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
      name="home"
      component={Home}
      />

<Screen 
      name="game"
      component={Game}
      />
    </Navigator>

  )
}