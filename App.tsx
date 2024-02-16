import React from 'react';
import {Button, Text, View} from 'react-native';
import CustomLabel from './src/Components/CustomLabel';
import UsingProps from './src/Components/UsingProps';

function App(): React.JSX.Element {
  //why we are use props/properties --> we can import valuses from other side using this props
  //How to inject outside values from the component
  return (
    <View>
      <UsingProps fSize={20} test={'How To Use PROPS'} />
    </View>
  );
}

export default App;
