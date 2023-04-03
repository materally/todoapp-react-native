import { SafeAreaView, StyleSheet } from "react-native";
import { background } from "../consts/ui";

interface LayoutProps {
  children: JSX.Element | Array<JSX.Element>;
}

function Layout ({ children }: LayoutProps) {
  return (
    <SafeAreaView style={styles.appContainer}>
      { children }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: background.base,
    flex: 1
  }
});

export default Layout;
