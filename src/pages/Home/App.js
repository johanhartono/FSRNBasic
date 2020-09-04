/*
 function components example
 nothing different between function and class components at moments
 can be used togehter
 */

import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

//import SampleComponent from '../SampleComponent.js';
//import MateriFlexBox from '../MateriFlexBox.js';
//import StylingReactNativeComponent from '../StylingReactNativeComponent.js';
//import PositionReactNative from '../PositionReactNative.js';
//
import SampleComponent from '../SampleComponent';
import FlexBox from '../FlexBox';
import StylingComponent from '../StylingComponent';
import Position from '../Position';
import StateDinamis from '../StateDinamis';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false);
    }, 6000);
  }, []);

  return (
    <ScrollView>
      {/* <SampleComponent />
      <StylingComponent />
      <Position /> 
      {isShow && <FlexBox />} */}
      {/* <FlexBox /> */}
      <StateDinamis />
    </ScrollView>
  );
};

export default App;
