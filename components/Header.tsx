import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { background, text } from "../consts/ui";

export interface HeaderProps {
  title: string;
  count?: number;
  onClose?: () => void;
}

function Header({ title, count, onClose }: HeaderProps): JSX.Element {
  const showCount = typeof count === "number";

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {
          onClose && (
            <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
              <Ionicons name="close" size={32} />
            </TouchableOpacity>
          )
        }
        <Text style={styles.title}>{ title }</Text>
        {
          showCount ? (
            <View style={styles.countContainer}>
              <Text>{ count }</Text>
            </View>
          ) : null
        }
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
    backgroundColor: background.counter,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  countText: {
    color: text.base
  },
  closeContainer: {
    left: -110,
    position: 'absolute',
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Header;
