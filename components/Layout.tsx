import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { backgroud } from "../consts/ui";

interface LayoutProps {
  children: JSX.Element | Array<JSX.Element>;
}

function Layout ({ children }: LayoutProps) {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        { children }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: backgroud.base,
    flex: 1
  }
});

export default Layout;
