import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { item } from "../consts/ui";

export interface ItemProps {
  title: string;
}

export function Item({ title }: ItemProps): JSX.Element {
  
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.innerContainer}>

        <View style={styles.checkboxContainer}>
          <Ionicons name='ios-square-outline' size={24} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{ title }</Text>
        </View>

        <View style={styles.date}>
          <Text>01 Nov</Text>
        </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minWidth: '95%',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  innerContainer: {
    borderRightWidth: 2,
    borderRightColor: item.borderUnCompletedColor,
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },

  checkboxContainer: {
    paddingRight: 15
  },

  titleContainer: {
    flex: 1
  },

  title: {
    color: item.titleColor,
    textAlign: 'left',
    textTransform: 'uppercase'
  },

  date: {
    paddingRight: 10
  }
  
});
