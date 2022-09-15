// O componente sempre deve iniciar com uma letra maisucula

//Um componente no React nada mais é que uma função que retorna um conjunto de html

//Props = propriedades do meu componente 

// Como estamos usando o TS precisamos definir quais atributos terão a nossa propriedade

interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

//depois defino na função as propriedades que quero receber ex; GameBanner(props:GameBannerProps)

//Depois substituo os links e texto que sejam relacionados as propriedades no cod como abaixo

// <img src={props.bannerUrl} alt="" />

//<strong className='font-bold text-white block'>{props.title}</strong>

//<span className=' text-zinc-300 text-sm block'>{props.title} anúncios</span>

//Quando a propriedade é um número, não passamos como string, apenas com {5}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className='relative rounded-lg overflow-hidden'>
    <img src={props.bannerUrl} alt="" />

    <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
      <strong className='font-bold text-white block'>{props.title}</strong>
      <span className=' text-zinc-300 text-sm block'>{props.adsCount} anúncio(s)</span>
    </div>
  </a>
  )
}