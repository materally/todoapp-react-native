import React from 'react';
import { View, Text } from 'react-native';

import Layout from '../components/Layout';

export function HomeScreen(): JSX.Element {
  return (
    <Layout title='My task' count={0}>
      <View><Text>HomeScreen</Text></View>
    </Layout>
  );
}
