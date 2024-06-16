import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {alignItems: 'center'},
  body_container: {
    backgroundColor: '#f2f2f2',
    width: windowWidth * 0.95,
  },

  image_container: {alignItems: 'center'},

  image: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.4,
    resizeMode: 'cover',
    margin: windowHeight * 0.01,
  },

  text_container: {borderBottomWidth: 1, borderColor: '#d6cfce'},

  strMeal: {
    fontSize: windowHeight * 0.04,
    color: '#a93737',
    fontWeight: 'bold',
    marginBottom: windowHeight * -0.005,
  },

  strArea: {
    color: '#ac3c3c',
    fontSize: windowHeight * 0.025,
    fontWeight: 'bold',
    marginLeft: windowHeight * 0.001,
  },

  strInstructions: {},
});
