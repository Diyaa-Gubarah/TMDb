import App from './App';
import {AppRegistry} from 'react-native';
/**
 * @format
 */
import {I18nManager} from 'react-native';
import {name as appName} from './app.json';

// Disable RTL layout and RTL support
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);


AppRegistry.registerComponent(appName, () => App);
