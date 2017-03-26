import React, {
	Component,
	PropTypes
} from 'react';
import {
	AppRegistry,
	Text,
	TouchableHighlight,
	View,
	TextInput,
	StyleSheet,
} from 'react-native';

import Login from './login.android.js'
import Main from './main.android.js'

export default class Home extends Component {
	_jumpMain() {
		this.props.navigator.push({
			name: 'Main',
			component: Main,
		})
	}

	_jumpLogin() {
		this.props.navigator.push({
			name: 'Login',
			component: Login,
		})
	}


	render() {
		return (
			<View>
				<Text>物联网信息平台管理系统</Text>
				<Text>Home</Text>
				<TouchableHighlight onPress={ () => this._jumpLogin()}>
					<Text>管理员入口</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={ () => this._jumpMain()}>
					<Text>普通用户入口</Text>
				</TouchableHighlight>
			</View>
		)
	}
}