import {StyleSheet} from 'react-native';
import {THEME} from '@styles/theme';

export const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: 10,
    backgroundColor: THEME.PRIMARY,
    borderRadius: 5,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    color: THEME.PRIMARY_ALT,
    padding: 10,
  },
});
