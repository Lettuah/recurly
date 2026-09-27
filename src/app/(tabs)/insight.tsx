import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Insight() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Insight Screen</Text>
            </View>
        </SafeAreaView>
    );
}