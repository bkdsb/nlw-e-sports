import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

// 'Children', vai pegar tudo que estiver escrito dentro desse componente

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