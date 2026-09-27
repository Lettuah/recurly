import { colors } from "@/theme/colors";
import { Image } from 'expo-image';
import { StyleSheet, View } from "react-native";


type TabIconProps = {
    focused: boolean,
    source: string
}

export default function TabIcon({ focused, source }: TabIconProps) {

    return (
        <View style={focused && styles.focus}>
            <Image
                source={source}
                style={styles.img}
                contentFit="contain"
            />
        </View>
    );
}


const styles = StyleSheet.create({

    focus: {
        width: 46,
        height: 46,
        borderRadius: 60,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        width: 30,
        height: 30,
    }
});