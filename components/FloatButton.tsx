import { observer } from "mobx-react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { button } from "../consts/ui";
import todoStore from "../store/store";

const screenWidth = Dimensions.get('window').width;

export const FloatButton = observer(() => {
  return (
    <TouchableOpacity style={styles.container} onPress={ () => todoStore.setShowModal() }>
      <Ionicons name='add' size={24} color='white' />
    </TouchableOpacity>
  );
})

const styles = StyleSheet.create({
  container: {
    bottom: 50,
    left: screenWidth / 2 - 25,
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: button.actionBackground,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  } 
});
