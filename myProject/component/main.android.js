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
import TopNav from './topNav.android.js'
export default class Main extends Component {
	render() {
		return (
			<View>
				<View>
					<TopNav navigator={this.props.navigator}></TopNav>
				</View>
				<Text>你好！{this.props.user}这是首页！</Text>
			</View>
		)
	}
}