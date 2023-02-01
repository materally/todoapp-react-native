import React from 'react';
import { View, Text } from 'react-native';

import Layout from '../components/Layout';

export function CompletedScreen(): JSX.Element {
  return (
    <Layout title='Completed' count={0}>
      <View><Text>CompletedScreen</Text></View>
    </Layout>
  );
}
