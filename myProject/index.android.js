import React, { Component } from 'react';
import {
	AppRegistry,
	Navigator
} from 'react-native';

import Home from './component/home.android.js'

export default class myProject extends Component {
	render() {
		let defaultId = 'Home';
		let defaultComponent = Home;
		return (
			<Navigator 
				initialRoute={{id: defaultId, component: defaultComponent}}
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
