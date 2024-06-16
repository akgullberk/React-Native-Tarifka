import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Meals = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Image style={styles.image} source={{uri: meal.strMealThumb}}></Image>
          <View style={styles.meal_name_container}>
            <Text style={styles.meal_name}>{meal.strMeal}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Meals;
