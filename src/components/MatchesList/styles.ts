import {THEME} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.PRIMARY,
    marginVertical: 25,
    paddingHorizontal: 25,
    width: '100%',
  },
  card: {
    marginVertical: 5,
    height: 100,
    backgroundColor: THEME.PRIMARY_ALT,
    padding: 15,
    borderRadius: 5,
  },
  rowTitle: {
    textTransform: 'uppercase',
    color: THEME.SECONDARY,
    fontSize: 16,
    fontWeight: '700',
  },
});
