import {
  Image,
  Linking,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../Button/Button';

const DetailCard = ({Details}) => {
  const onPress = () => {
    const url = Details.strYoutube;
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };
  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <View style={styles.image_container}>
          <Image style={styles.image} source={{uri: Details.strMealThumb}} />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.strMeal}>{Details.strMeal}</Text>
          <Text style={styles.strArea}>{Details.strArea}</Text>
        </View>
        <Text style={styles.strInstructions}>{Details.strInstructions}</Text>
      </View>
      <Button
        onPress={() => {
          onPress();
        }}
      />
    </View>
  );
};

export default DetailCard;
