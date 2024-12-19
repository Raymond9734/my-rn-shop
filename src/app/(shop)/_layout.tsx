import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
  return <FontAwesome size={24} {...props} style={{color: '#1BC464'}} />;
}

const TabLayout = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <Tabs screenOptions={{
        tabBarActiveTintColor: "#1BC464",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
            paddingTop: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "shop",
            tabBarIcon: (props) => (
                  <TabBarIcon {... props} name="shopping-cart" />
            ),
          }}
      />
        <Tabs.Screen
          name="orders"
          options={{
            title: "orders",
            tabBarIcon: (props) => (
              <TabBarIcon {... props} name="book" />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
