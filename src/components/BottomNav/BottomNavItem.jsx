import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHome,
  IconHomeActive,
  IconSearch,
  IconSearchActive,
  IconBagan,
  IconBaganActive,
  IconAcara,
  IconAcaraActive,
  IconSetting,
  IconSettingActive,
} from '../../assets';

export default function TabItemBox({isFocused, onPress, onLongPress, label}) {
  const Icon = () => {
    if (label === 'Beranda') {
      return isFocused ? <IconHomeActive /> : <IconHome />;
    }
    if (label === 'Pencarian') {
      return isFocused ? <IconSearchActive /> : <IconSearch />;
    }
    if (label === 'Bagan') {
      return isFocused ? <IconBaganActive /> : <IconBagan />;
    }
    if (label === 'Acara') {
      return isFocused ? <IconAcaraActive /> : <IconAcara />;
    }
    if (label === 'Pengaturan') {
      return isFocused ? <IconSettingActive /> : <IconSetting />;
    }
    return <IconHome />; // default
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      className="w-20 items-center justify-center ">
      <Icon />
      <Text
        className={
          (isFocused ? 'text-black' : 'text-[#8D92A3]') + ' text-[9px] mt-1'
        }>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
