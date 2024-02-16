import {View, Text} from 'react-native';
import React from 'react';

const UsingProps = (props: any) => {
  return (
    <View>
      <Text style={{fontSize: props.fSize}}>{props.test}</Text>
    </View>
  );
};

export default UsingProps;
