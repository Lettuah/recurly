import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const router = useRouter();

  return (

    <SafeAreaView style={styles.container}>

      <Image source={require("@/assets/onboarding.png")}
        style={styles.image} contentFit="contain" />

      <View style={styles.bottomSection}>

        <View style={{ gap: 16 }}>
          <Text style={styles.title}>Gain Financial Clarity</Text>
          <Text style={styles.subitle}>Track, analyze and cancel with ease</Text>
        </View>

        <Pressable style={styles.btn} onPress={() => router.push('/login')} >
          <Text style={styles.btnText}>Get started</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  bottomSection: {
    paddingHorizontal: 24,
    gap: 20
  },

  title: {
    ...typography.display,
    fontWeight: '700',
    fontSize: 36,
    letterSpacing: -0.8,
    lineHeight: 36,
    color: 'white',
    textAlign: 'center'
  },

  subitle: {
    color: '#FFEAE2',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: -0.4,
    textAlign: 'center'
  },

  image: {
    flex: 1,
    width: '100%',
    marginBottom: 73
  },

  btn: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 10000,
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginTop: 20,
    marginBottom: 54,
    color: colors.textPrimary,
  },

  btnText: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 19.8,
    letterSpacing: -0.36,
    textAlign: 'center'
  }
});
