import {THEME} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.SECONDARY_ALT,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: THEME.SECONDARY_ALT,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: THEME.SECONDARY,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
