// Declarando que a home é undefined, isso significa que a rota não precisa de nenhum parametro

export interface GameParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game:GameParams;
    }
  }
}