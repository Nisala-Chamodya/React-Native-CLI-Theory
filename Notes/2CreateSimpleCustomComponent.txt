import {View, Text} from 'react-native';
import React from 'react';

const CustomLabel = () => {
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
        Create Custom Component
      </Text>
    </View>
  );
};

export default CustomLabel;
