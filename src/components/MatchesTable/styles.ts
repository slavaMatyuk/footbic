import {THEME} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.PRIMARY,
    marginVertical: 25,
    paddingHorizontal: 25,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 3,
    justifyContent: 'space-between',
  },
  title: {
    textTransform: 'uppercase',
    color: THEME.SECONDARY_ALT,
    fontSize: 16,
    fontWeight: '700',
  },
  cell: {
    color: THEME.PRIMARY_ALT,
  },
  lastCell: {
    color: THEME.SUCCESS,
  },
});
