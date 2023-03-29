import {ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 1000);
  }, [navigation]);

  return (
    <ImageBackground className="flex-1 items-center justify-center bg-blue-500">
      <Image source={Logo} className="w-52 h-52" />
    </ImageBackground>
  );
};

export default Splash;
