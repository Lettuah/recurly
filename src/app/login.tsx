import Logo from "@/components/logo";
import { colors } from "@/theme/colors";
import { fontFamily } from "@/theme/fonts";
import { typography } from "@/theme/typography";
import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {

    const router = useRouter();
    return (

        <SafeAreaView style={styles.container} >
            <Logo />
            <View style={{ height: 80 }}></View>
            <View style={{ gap: 12 }}>
                <Text style={styles.title}>Welcome back</Text>
                <Text style={styles.subtitle}>Sign in to continue managing your subscriptions</Text>
            </View>
            <View style={{ height: 30 }}></View>

            <View style={styles.formCard}>
                <View style={{ gap: 10 }}><Text style={styles.label}>Email</Text>
                    <TextInput placeholder="Enter your email" placeholderTextColor={colors.textPrimary} style={styles.input}></TextInput>
                </View>

                <View style={{ gap: 10 }}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput placeholder="Enter your password" placeholderTextColor={colors.textPrimary} style={styles.input} />
                </View>

                <Pressable style={styles.btn} onPress={() => router.replace('/dashboard')}>
                    <Text style={styles.btnTxt}>Sign in</Text>
                </Pressable>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.registerTxt}>New to Recurly? </Text>
                    <Link href={'/'} style={styles.registerTxtLink}>Create an account</Link>
                </View>
            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 50,
        paddingHorizontal: 16,
    },

    title: {
        ...typography.h2,
        color: colors.textPrimary,
        textAlign: 'center'
    },

    subtitle: {
        ...typography.bodyMedium,
        color: colors.textSecondary,
        lineHeight: 22.4,
        paddingHorizontal: 12,
        textAlign: 'center'
    },

    formCard: {
        width: '100%',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E1DBCA',
        paddingHorizontal: 24,
        paddingVertical: 36,
        gap: 24,
        backgroundColor: '#FFF7E5',
    },

    label: {
        ...typography.bodyMedium,
        fontFamily: fontFamily.semiBold,
        color: colors.textPrimary,
    },

    input:
    {
        height: 54,
        borderRadius: 14,
        borderColor: colors.border,
        borderWidth: 1,
        paddingHorizontal: 14,
        paddingVertical: 18,
        backgroundColor: colors.background,
    },

    btn: {
        backgroundColor: colors.primary,
        borderRadius: 14,
        paddingHorizontal: 14,
        paddingVertical: 18,
    },

    btnTxt: {
        ...typography.bodyMedium,
        fontFamily: fontFamily.bold,
        textAlign: 'center',
        color: 'white'
    },

    registerTxt: {
        ...typography.bodyMedium,
        lineHeight: 22.4,
        color: colors.textSecondary
    },

    registerTxtLink: {
        ...typography.bodyMedium,
        fontFamily: fontFamily.semiBold,
        lineHeight: 22.4,
        color: colors.primary,

    }
});