import TabIcon from '@/components/tab/TabIcon';
import { colors } from '@/theme/colors';
import { Tabs } from "expo-router";
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';




export default function TabsLayout() {

  const inset = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.tabBarStyle,
          {
            marginBottom: inset.bottom,
            position: 'absolute',
          }
        ],
        tabBarItemStyle: styles.tabBarItemStyle,

      }}>



      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={require('@/assets/icons/home.png')} />
          )
        }}
      />

      <Tabs.Screen
        name="subscription"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={require('@/assets/icons/wallet.png')} />
          )
        }}
      />

      <Tabs.Screen
        name="insight"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={require('@/assets/icons/activity.png')} />
          )
        }}
      />

      <Tabs.Screen
        name="setting"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={require('@/assets/icons/setting-2.png')} />
          )
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.textPrimary,
    borderRadius: 10000,
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginHorizontal: 16,
  },

  tabBarItemStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});