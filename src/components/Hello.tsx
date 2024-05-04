import { View, Text, StyleSheet, type TextStyle} from 'react-native'
interface Props{
    children: string
    style?: TextStyle
}
const Hello = (props: Props): JSX.Element => {
    const { children, style} = props
    return (
        <View>
            <Text style={[styles.text, style]}>Hello {children}!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16
    }
})
export default Hello
