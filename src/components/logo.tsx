import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fonts";
import { StyleSheet, Text, View } from "react-native";

export default function Logo() {
    return (
        <View style={styles.wrapper}>

            <View style={styles.logo}>
                <Text style={styles.r}>R</Text>
            </View>
            <View style={{ gap: 10, paddingVertical: 7 }}>
                <Text style={styles.recurly}>Recurly</Text>
                <Text style={styles.smart}>SMART BILLING</Text>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({

    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },

    logo: {
        backgroundColor: colors.primary,
        width: 64,
        height: 64,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    r: {
        color: 'white',
        fontFamily: fontFamily.bold,
        fontSize: 36,
        letterSpacing: -1.44,
    },

    recurly: {
        fontFamily: fontFamily.bold,
        fontSize: 24,
        lineHeight: 26.4,
        letterSpacing: -0.48,
    },

    smart: {
        fontFamily: fontFamily.medium,
        fontSize: 14,
        lineHeight: 14,
        letterSpacing: 0,
        color: colors.textSecondary

    }
});