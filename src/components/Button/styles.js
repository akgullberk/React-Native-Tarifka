import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    borderRadius: windowHeight * 0.01,
    backgroundColor: '#ff0000',
    width: windowWidth * 0.93,
    height: windowHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    margin: windowHeight * 0.03,
  },

  text: {
    color: 'white',
  },
});
