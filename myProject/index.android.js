/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
		AppRegistry,
		StyleSheet,
		Text,
		View,
		Navigator
} from 'react-native';

import Footer from './component/Footer.android.js'

export default class myProject extends Component {
	render() {
		let defaultPage = Footer;
		return (
		        < View >
				< Navigator
				initialRoute = {
					{ name: '首页', component: defaultPage } }
				configureScene = {
					(route) => {
						return Navigator.SceneConfigs.FloatFromRight; } }
				renderScene = {
					(route, navigator) => {
						let Component = route.component;
							return <Component {...route.params } navigator = { navigator }/> }} / >
				< /View>
						);
				}
		}

const styles = StyleSheet.create({
		container: {
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#F5FCFF',
		},
		welcome: {
				fontSize: 20,
				textAlign: 'center',
				margin: 10,
		},
		instructions: {
				textAlign: 'center',
				color: '#333333',
				marginBottom: 5,
		},
});

AppRegistry.registerComponent('myProject', () => myProject);
