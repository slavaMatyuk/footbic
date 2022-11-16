import {THEME} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.PRIMARY,
    marginVertical: 25,
    marginHorizontal: 25,
    width: '100%',
  },
  row: {
    marginVertical: 3,
  },
  text: {
    fontSize: 18,
    color: THEME.PRIMARY_ALT,
  },
});
