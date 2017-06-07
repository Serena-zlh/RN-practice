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
	Image,
} from 'react-native';

import Login from './login.android.js'
import Main from './main.android.js'

export default class Home extends Component {
	_jumpMain() {
		this.props.navigator.push({
			type: 'user',
			id: 'Main',
			component: Main,
		})
	}
	_jumpLogin() {
		this.props.navigator.push({
			type: 'admin',
			id: 'Login',
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
				<Image style={{width:40,height:40}} source={require('../assets/img/test.png')} />
			</View>
		)
	}
}