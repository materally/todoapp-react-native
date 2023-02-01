import React from 'react';
import { View, Text } from 'react-native';

import Header from '../components/Header';
import Layout from '../components/Layout';

export function HomeScreen(): JSX.Element {
  return (
    <Layout>
      <Header title='My task' count={0} />

      <View><Text>HomeScreen</Text></View>
    </Layout>
  );
}
