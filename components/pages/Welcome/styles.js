import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeImage: {
    shadowColor: Theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.55,
    shadowRadius: 10,
  },
  welcomeContainer: {
    height: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    width: 250,
    alignItems: 'center',
  },
});

export default styles;
