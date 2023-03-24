import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getTest} from '../redux/actions/testAction';

const HomeScreen = () => {

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getTest());
  }, [dispatch]);

  const testText = useSelector((state) => state.homeReducers.error)

  return (
    <View>
      <Text>{testText}</Text>
    </View>
  )
}

export default HomeScreen