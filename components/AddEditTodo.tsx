import { useEffect, useState } from "react";
import { StyleSheet, View, Modal, Text, TextInput, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";
import Ionicons from "react-native-vector-icons/Ionicons";
import DatePicker from 'react-native-date-picker'

import todoStore from "../store/store";
import Header from "./Header";
import Layout from "./Layout";
import { button, text } from "../consts/ui";

export const AddEditTodo = observer(() => {
  const storeEdit = todoStore?.editItem;
  const [id, setId] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const onClose = () => {
    setId(null);
    setTitle('');
    setDesc('');
    setDate(new Date());
    todoStore.setShowModal()
    todoStore.setEditItem(undefined);
  }

  const addTodo = () => {
    if(title === "") return;

    todoStore.create(title, desc, date);

    onClose();
  }

  const editTodo = () => {
    if(title === "") return;
    if(!id) return;

    todoStore.update({
      id,
      title,
      desc,
      date,
      done: false
    });

    onClose();
  }

  useEffect(() => {
    if(storeEdit){
      const { id, title, desc, date } = storeEdit;

      setId(id);
      setTitle(title);
      setDesc(desc || '');
      setDate(date);
    }
  }, [storeEdit])

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={todoStore.showModal}>
      <Layout>
        <Header title={id ? "Edit Task" : "Add New Task"} onClose={onClose} />

        <TextInput
          placeholder="My Task"
          placeholderTextColor={text.inputPlaceholder}
          style={styles.titleInput}
          onChangeText={setTitle}
          value={title}
        />

        <View style={styles.holder}>
          <Ionicons name="document-text-outline" size={24} style={{ width: 30 }} />
          <TextInput
            style={styles.descInput}
            editable
            multiline
            numberOfLines={6}
            onChangeText={setDesc}
            value={desc}
            placeholder="Details"
            placeholderTextColor={text.inputPlaceholder}
          />
        </View>

        <View style={styles.holder}>
          <Ionicons name="calendar-outline" size={24} style={{ width: 30 }} />
          <View style={styles.dateHolder}>
            <TouchableOpacity onPress={() => setOpenDatePicker(true)}>
              <Text style={{ color: date === new Date() ? text.inputPlaceholder : text.base }}>
                {date.toDateString()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={id ? editTodo : addTodo}>
          <Text style={styles.buttonText}>{ id ? "EDIT TASK" : "ADD TASK"}</Text>
        </TouchableOpacity>

      </Layout>

      <DatePicker
        mode="date"
        modal
        open={openDatePicker}
        date={date}
        onConfirm={(date) => {
          setOpenDatePicker(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpenDatePicker(false)
        }}
      />
    </Modal>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  holder: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10
  },
  titleInput: {
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    fontSize: 32,
    color: text.base
  },
  descInput: {
    flex: 1,
    padding: 5,
    fontSize: 16
  },
  dateHolder: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 5
  },
  buttonContainer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    paddingBottom: 30,
    paddingTop: 20,
    backgroundColor: button.actionBackground
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});
