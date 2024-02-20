import React from 'react';
import {Button, Text, View} from 'react-native';
import CustomLabel from './src/Components/1 CustomLabel';
import UsingProps from './src/Components/2UsingProps';
import CreateCustomDataType from './src/Components/3CreateCustomDataType';

function App(): React.JSX.Element {
  //why we are use props/properties --> we can import valuses from other side using this props
  //How to inject outside values from the component
  return (
    <View>
      <UsingProps fSize={20} test={'How To Use PROPS'} />
      <CreateCustomDataType id={10} fname="Nisala" lname="Chamodya" />
    </View>
  );
}

export default App;
