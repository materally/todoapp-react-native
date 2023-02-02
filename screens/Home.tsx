import React from 'react';
import { FlatList } from 'react-native';

import Header from '../components/Header';
import { Item } from '../components/Item';
import Layout from '../components/Layout';
import todoStore from '../store/store';

export function HomeScreen(): JSX.Element {
  return (
    <Layout>
      <Header title='My task' count={todoStore.unCompletedList().count} />
      <FlatList
        contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
        data={todoStore.unCompletedList().list}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
}
