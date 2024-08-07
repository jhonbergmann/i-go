import {Text, TouchableOpacity, View} from 'react-native'

import {styles} from './styles'
import {IParticipantProps} from './data'

export function Participant({name, onRemove}: IParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
