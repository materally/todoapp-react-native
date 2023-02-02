import React from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { observer } from 'mobx-react';

import Header from '../components/Header';
import { Item } from '../components/Item';
import Layout from '../components/Layout';
import todoStore from '../store/store';
import { AddEditTodo } from '../components/AddEditTodo';
import { Item as ItemProps } from '../store/model';

export const HomeScreen = observer(() => {

  const editItem = (item: ItemProps) => {
    todoStore.setEditItem(item);
    todoStore.setShowModal();
  }

  const doneTodo = (id: string) => {
    Alert.alert('Biztosan?', 'Biztosan elvégzed a feladatot?', [
      {
        text: 'Nem',
        style: 'cancel',
      },
      {
        text: 'Igen', onPress: () => todoStore.setItemStatus(id)
      },
    ]);
  }

  return (
    <Layout>
      <Header title='My Task' count={todoStore.unCompletedList().count} />
      <FlatList
        contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
        data={todoStore.unCompletedList().list}
        renderItem={({ item }) => <Item id={item.id} title={item.title} date={item.date} done={item.done} onLongPress={() => editItem(item)} onPress={() => doneTodo(item.id)} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>There are no tasks!</Text>}
      />
      <AddEditTodo />
    </Layout>
  );
})
