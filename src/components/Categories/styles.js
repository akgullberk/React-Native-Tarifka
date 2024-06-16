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
    flexDirection: 'row',
    backgroundColor: '#eceff1',
    width: windowWidth * 0.95,
    height: windowHeight * 0.11,
    borderTopLeftRadius: windowHeight * 0.05,
    borderBottomLeftRadius: windowHeight * 0.05,
    margin: windowHeight * 0.01,
    borderWidth: windowWidth * 0.004,
    borderColor: '#d6cfce',
    alignItems: 'center',
  },

  image: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.3,
    marginLeft: windowHeight * 0.02,
    resizeMode: 'contain',
  },
  category_name: {
    fonntweight: 'bold',
    fontSize: windowHeight * 0.025,
    marginLeft: windowHeight * 0.02,
    color: 'black',
  },
});
