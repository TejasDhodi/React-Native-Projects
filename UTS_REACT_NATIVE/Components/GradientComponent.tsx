import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ReactNode } from 'react'

type GradientComponentProps = {
    children: ReactNode,
}
const GradientComponent: React.FC<GradientComponentProps> = ({children}) => {
    return (
        <LinearGradient
            colors={["#ec685a", "#f3ae5a"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            {children}
        </LinearGradient>
    )
}

export default GradientComponent

const styles = StyleSheet.create({})