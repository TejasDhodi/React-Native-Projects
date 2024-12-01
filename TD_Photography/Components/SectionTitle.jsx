import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SectionTitle = ({title, description}) => {
    const {sectionTitle, sectionDescription, textCenter} = styles;
  return (
    <View style={{marginBlock: 20}}>
      <Text style={[textCenter, sectionTitle]}>{title}</Text>
      <Text style={[textCenter, sectionDescription]}>{description}</Text>
    </View>
  )
}

export default SectionTitle

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 40,
        color: '#282628',
        opacity: 0.7,
        fontWeight: 'bold'
    },
    sectionDescription: {
        fontSize: 19.2,
        color: '#282628',
        textTransform: 'uppercase'
    },
    textCenter: {
        textAlign: 'center'
    }
})