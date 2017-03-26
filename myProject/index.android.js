import React, { Component, PropTypes } from 'react';
import {
	AppRegistry,
	Text,
	TouchableHighlight,
	View,
	StyleSheet,
	Navigator,
	TextInput,
	Alert,
} from 'react-native';

import Home from './component/home.android.js'

export default class myProject extends Component {
	render() {
		let defaultName = 'Home';
		let defaultComponent = Home;
		return (
			<Navigator 
				initialRoute={{name: defaultName, component: defaultComponent}}
				configureScene={(route) => {
					return Navigator.SceneConfigs.FloatFromRight;
				}}
				renderScene={(route, navigator) => {
					let Component = route.component;
					return <Component {...route.params} navigator={navigator} />
				}}
			/>
		)
	}
}




AppRegistry.registerComponent('myProject', () => myProject);
