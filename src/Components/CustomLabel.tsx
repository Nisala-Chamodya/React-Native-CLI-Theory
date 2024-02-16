import {View, Text} from 'react-native';
import React from 'react';

const CustomLabel = (props: any) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: 'pink',
          fontWeight: '700',
          marginLeft: 50,
          marginTop: 200,
        }}>
        {props.children}
      </Text>
    </View>
  );
};

export default CustomLabel;
