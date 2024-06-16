import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {CategoriesCard, Loading} from '../../components';
import {getCategoryApi} from '../../service';

const Categories = ({navigation}) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    getCategoryApi()
      .then(fetchCategories => {
        setCategoriesData(fetchCategories.categories);
        setLoading(false);
      })
      .catch(error => {
        console.error('hata:', error);
      });
  };

  if (loading) {
    return <Loading />;
  }

  const handleCategoriesSelect = strCategory => {
    navigation.navigate('Meals', {strCategory});
  };
  const renderCategories = ({item}) => (
    <CategoriesCard
      categoriesItem={item}
      onSelect={() => handleCategoriesSelect(item.strCategory)}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList data={categoriesData} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;
