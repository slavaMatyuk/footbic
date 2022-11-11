import {THEME} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.PRIMARY,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: THEME.PRIMARY_ALT,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
