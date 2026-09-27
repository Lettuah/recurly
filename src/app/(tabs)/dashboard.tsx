import EventItem from '@/components/event_item';
import SectionHeader from '@/components/SectionHeader';
import TransactionItem from '@/components/TransactionItem';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {

    return (
        <SafeAreaView style={styles.body}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <Image source={require('@/assets/profile.png')} contentFit='cover' style={styles.photo} />
                    <Text style={styles.name}>Ayam Psyber</Text>
                </View>
                <View style={styles.addCircle}>
                    <Image source={require('@/assets/icons/plus1.png')} style={styles.plus} />
                </View>
            </View>

            <View style={styles.balanceCard}>
                <Text style={styles.balLabel}>Balance</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.amount}>$198.53</Text>
                    <Text style={styles.date}>04/21</Text>
                </View>
            </View>

            <View style={{ gap: 18 }}>
                <SectionHeader title="Upcoming" />
                <EventItem />
            </View>

            <View style={{ gap: 25 }}>
                <SectionHeader title="All Subscriptions" />
                <View style={{ gap: 18 }}>
                    <TransactionItem />
                </View>
            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 16,
        gap: 32
    },

    photo: {
        width: 50,
        height: 50,
        borderRadius: 25
    },

    name: {
        ...typography.h2,
        fontSize: 20,
        letterSpacing: -0.4,
        color: colors.textPrimary
    },

    addCircle: {
        width: 50,
        height: 50,
        borderRadius: 10000,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center'
    },

    plus: {
        width: 24,
        height: 24,
    },

    balanceCard: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 26,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        gap: 24,
    },

    balLabel: {
        ...typography.h2,
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: -0.4,
        color: colors.white
    },

    amount: {
        ...typography.display,
        color: colors.white
    },

    date: {
        ...typography.h2,
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: -0.4,
        color: colors.white
    },




});