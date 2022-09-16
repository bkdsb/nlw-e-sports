// E aqui que vamos escolher qual estratégia utilizar para navegação

//Aqui importamos o NavigationContainer para criar um container de navegação

// Então improtamos o Component de rotas

// E criamos a função Routes() retornando o nosso container de navegação com nosso Component AppRoutes

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}