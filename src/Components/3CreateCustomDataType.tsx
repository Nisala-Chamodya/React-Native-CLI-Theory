import {View, Text} from 'react-native';
import React from 'react';

type customProps = {
  id: number;
  fname: string;
  lname: string;
  d?: number;
};
const CreateCustomDataType = (props: customProps) => {
  return (
    <View>
      <Text>
        {props.id} {props.fname} {props.lname}
      </Text>
    </View>
  );
};

export default CreateCustomDataType;
