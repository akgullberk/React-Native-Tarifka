import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Watch on Youtube</Text>
    </TouchableOpacity>
  );
};

export default Button;
