import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fonts";
import { typography } from "@/theme/typography";
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from "react-native";

export default function EventItem() {
    return (
        <View>
            <View style={styles.eventCard}>
                <View style={{ gap: 10, flexDirection: 'row', alignItems: "center" }}>
                    <View style={styles.logoContainer}>
                        <Image source={require('@/assets/img/1.png')} style={styles.logo} />
                    </View>
                    <View style={{ gap: 8 }}>
                        <Text style={styles.amount}>$20.00</Text>
                        <Text style={styles.time}>12 days left</Text>
                    </View>
                </View>
                <Text style={styles.title}>Notion Team</Text>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    eventCard: {
        width: 180,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 14,
        paddingVertical: 20,
        gap: 14,

    },

    logoContainer: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#F6ECC9',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 30,
        height: 30,
    },

    title: {
        ...typography.h3,
        fontFamily: fontFamily.bold,
        lineHeight: 19.8, // 1.1
        color: colors.textPrimary,
    },

    amount: {
        ...typography.h3,
        fontFamily: fontFamily.bold,
        lineHeight: 18, // 1
        color: colors.textPrimary,
    },

    time: {
        ...typography.captionSemiBold,
        color: colors.textSecondary
    }

});