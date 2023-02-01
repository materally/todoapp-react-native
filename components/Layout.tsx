import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { background } from "../consts/ui";
import Header, { HeaderProps } from "./Header";

interface LayoutProps extends HeaderProps {
  children: JSX.Element | Array<JSX.Element>;
}

function Layout ({ children, title, count }: LayoutProps) {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Header title={title} count={count} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        { children }
      </ScrollView>
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
