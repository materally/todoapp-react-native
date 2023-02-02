import React from 'react';
import { FlatList } from 'react-native';

import { Item } from '../components/Item';
import Layout from '../components/Layout';
import todoStore from '../store/store';

export function HomeScreen(): JSX.Element {
  return (
    <Layout title='My task' count={0}>
      <FlatList
        contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
        data={todoStore.list}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </Layout>
  );
}
