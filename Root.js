/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';
import Actions from './redux';

const Root = () => {
  const dispatch = useDispatch();
  const count = useSelector(({app: {count}}) => count);

  const handleIncrement = () => dispatch(Actions.setCount(count + 1));

  return (
    <>
      <Header />
      <Text
        style={{textAlign: 'center', fontSize: 40}}
        onPress={handleIncrement}>
        {count}
      </Text>
    </>
  );
};

export default Root;
