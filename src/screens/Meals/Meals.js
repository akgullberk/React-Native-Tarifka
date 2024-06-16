import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {getMealsApi} from '../../service';
import {MealsCard, Loading} from '../../components/';
import Navigation from '../../routes/Navigation';

const Meals = ({route, navigation}) => {
  const [data, setData] = useState([]);
  const {strCategory} = route.params;
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    Meal();
  }, []);
  const Meal = () => {
    getMealsApi(strCategory)
      .then(Meal => {
        console.log(strCategory);
        setData(Meal.meals);
        setLoading(false);
      })
      .catch(error => {
        console.error('hata:', error);
      });
  };

  const handleMealSelect = strMeal => {
    navigation.navigate('Detail', {strMeal});
  };

  const renderMeal = ({item}) => (
    <MealsCard meal={item} onSelect={() => handleMealSelect(item.strMeal)} />
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderMeal} />
    </View>
  );
};

export default Meals;
