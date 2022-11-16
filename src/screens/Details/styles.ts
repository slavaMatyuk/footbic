import {THEME} from '@styles/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.PRIMARY,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: THEME.PRIMARY_ALT,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: THEME.SECONDARY_ALT,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginVertical: 25,
  },
});
