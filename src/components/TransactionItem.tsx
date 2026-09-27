import { colors } from '@/theme/colors';
import { fontFamily } from '@/theme/fonts';
import { typography } from '@/theme/typography';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from "react-native";

export default function TransactionItem() {
    return (
        <View style={styles.card}>

            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', }}>
                <View style={styles.logoContainer}>
                    <Image source={require('@/assets/img/2.png')} style={styles.logo} />
                </View>
                <View style={{ gap: 10 }}>
                    <Text style={styles.title}>Open AI</Text>
                    <Text style={styles.subtitle}>June 05, 18:00</Text>
                </View>
            </View>

            <View style={{ gap: 10 }}>
                <Text style={styles.amount}>$42.25</Text>
                <Text style={styles.duration}>per month</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#99B7DD',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 20,
        gap: 10
    },

    logoContainer: {
        backgroundColor: '#FFFFFF4D',
        borderRadius: 10,
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 36,
        height: 36
    },

    title: {
        ...typography.h3,
        fontFamily: fontFamily.bold,
        lineHeight: 19.8, // 1.1
        color: colors.textPrimary,
    },

    subtitle: {
        ...typography.captionSemiBold,
        color: colors.textSecondary
    },

    amount: {
        ...typography.h3,
        fontFamily: fontFamily.bold,
        lineHeight: 19.8, // 1.1
        color: colors.textPrimary,
    },

    duration: {
        ...typography.captionSemiBold,
        color: colors.textSecondary
    }

});