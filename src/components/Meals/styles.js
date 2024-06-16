import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffa500',
    justifyContent: 'center',
    alignItems: 'center',
  },

  body_container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: windowHeight * 0.01,
  },
  image: {
    width: windowWidth * 0.94,
    height: windowHeight * 0.23,
    borderRadius: windowHeight * 0.01,
  },

  meal_name_container: {
    position: 'absolute',
    bottom: -1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: windowWidth * 0.94,

    borderBottomRightRadius: windowHeight * 0.01,
    borderBottomLeftRadius: windowHeight * 0.01,
    height: windowHeight * 0.05,
  },

  meal_name: {
    color: 'white',
    fontSize: windowHeight * 0.038,
    textAlign: 'right',
    marginRight: windowHeight * 0.01,
  },
});
