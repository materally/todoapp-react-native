import React from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { observer } from 'mobx-react';

import Header from '../components/Header';
import { Item } from '../components/Item';
import Layout from '../components/Layout';
import todoStore from '../store/store';

export const CompletedScreen = observer(() => {
  
  const undoTodo = (id: string) => {
    Alert.alert('Biztosan?', 'Biztosan visszavonod a feladatot?', [
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
      <Header title='Completed' count={todoStore.completedItems().count} />
      <FlatList
        contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
        data={todoStore.completedItems().items}
        renderItem={({ item: { id, title, date, done } }) => <Item id={id} title={title} date={date} done={done} onPress={() => undoTodo(id)} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>There are no tasks!</Text>}
      />
    </Layout>
  );
})
