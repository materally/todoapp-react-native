import React from 'react';
import { View, Text } from 'react-native';

import Header from '../components/Header';
import Layout from '../components/Layout';

export function CompletedScreen(): JSX.Element {
  return (
    <Layout>
      <Header title='Completed' count={0} />

      <View><Text>CompletedScreen</Text></View>
    </Layout>
  );
}
