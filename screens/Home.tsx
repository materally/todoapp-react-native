import React from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react';

import Header from '../components/Header';
import { Item } from '../components/Item';
import Layout from '../components/Layout';
import todoStore from '../store/store';
import { AddEditTodo } from '../components/AddEditTodo';
import { Item as ItemProps} from '../store/model';

export const HomeScreen = observer(() => {

  const editItem = (item: ItemProps) => {
    todoStore.setEditItem(item);
    todoStore.setShowModal();
  }

  return (
    <Layout>
      <Header title='My Task' count={todoStore.unCompletedList().count} />
      <FlatList
        contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
        data={todoStore.unCompletedList().list}
        renderItem={({ item }) => <Item id={item.id} title={item.title} date={item.date} done={item.done} onLongPress={() => editItem(item)} />}
        keyExtractor={item => item.id}
      />
      <AddEditTodo />
    </Layout>
  );
})
