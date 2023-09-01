
import React from 'react'
import { View, Text, Linking } from 'react-native'

import styles from './footer.style'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Footer = ({url}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
        source={icons.heartOutline}
        resizeMode='contain'
        style={styles.likeBtnImage}
        />

      </TouchableOpacity>
      <TouchableOpacity 
      style ={styles.applyBtn}
      onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for Job</Text>

      </TouchableOpacity>
    </View>
  )
}

export default Footer