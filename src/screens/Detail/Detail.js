import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {DetailCard, Loading} from '../../components';
import {getDetailApi} from '../../service';

const Detail = ({route}) => {
  const {strMeal} = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    detail();
  }, []);

  const detail = () => {
    getDetailApi(strMeal)
      .then(detail => {
        setData(detail.meals);
        setLoading(false);
      })
      .catch(error => {
        console.error('hata:', error);
      });
  };

  if (loading) {
    return <Loading />;
  }

  const renderDetail = ({item}) => <DetailCard Details={item} />;
  return (
    <View>
      <FlatList data={data} renderItem={renderDetail} />
    </View>
  );
};

export default Detail;
