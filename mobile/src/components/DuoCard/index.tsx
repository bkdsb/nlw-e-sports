import { Text, TouchableOpacity, View } from 'react-native';

//Imporamos da biblioteca os icons como se fossem componentes
import { GameController } from 'phosphor-react-native';

import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';
import { THEME } from '../../theme';

//Instalamos uma biblioteca de icons para o React Native, Phosphor Icons, com o comando npm install --save phosphor-react-native

// Também instalamos uma biblioteca do expo svg com o comando: o expo install react-native-svg

export interface DuoCardProps {
  id: string; 
  hourStart: string; 
  hoursEnd: string; 
  name: string;  
  useVoiceChannel: boolean;
  weekDays: string[];  
  yearsPlaying: number;
}

//Tipo de função que não retorna nada () => void

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hoursEnd}` }
      />


      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
      style={styles.button}
      onPress={onConnect}
      >
        <GameController
        color={THEME.COLORS.TEXT}
        size={20}
        />

        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}