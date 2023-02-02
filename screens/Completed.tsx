import React from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react';

import Header from '../components/Header';
import { Item } from '../components/Item';
import Layout from '../components/Layout';
import todoStore from '../store/store';

export const CompletedScreen = observer(() => {
  return (
    <Layout>
      <Header title='Completed' count={todoStore.completedList().count} />
      <FlatList
        contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
        data={todoStore.completedList().list}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
})
