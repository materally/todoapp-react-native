import { View, Text, StyleSheet } from "react-native";
import { backgroud, text } from "../consts/ui";

interface HeaderProps {
  title: string;
  count: number;
}

function Header({ title, count }: HeaderProps): JSX.Element {
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{ title }</Text>

        <View style={styles.countContainer}>
          <Text>{ count }</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  titleContainer: {
    position: 'relative'
  },
  title: {
    fontSize: 24,
    color: text.base
  },
  countContainer: {
    right: -40,
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: backgroud.counter,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  countText: {
    color: text.base
  }
});

export default Header;
