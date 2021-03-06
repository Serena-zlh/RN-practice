// import '../assets/css/main.css'
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
import Main from './main.android.js'
import TopNav from './topNav.android.js'
export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			pwd: ''
		}
	}

	_login() {
		if (!this.state.user || !this.state.pwd) {
			Alert.alert(
				'提示信息',
				'用户名或密码不能为空'
			)
		} else {
			console.log(this.props.navigator.getCurrentRoutes())
			this.props.navigator.push({
				id: 'Main',
				component: Main,
				params: {
					user: this.state.user
				}
			})
		}
	}

	render() {
		return (
			<View>
				<View>
					{/*这个地方要把当前路由对象传递到导航栏上，不然undefined*/}
					<TopNav navigator={this.props.navigator}></TopNav>
				</View>
				
				<Text>登陆</Text>
				<View>
					<TextInput 
						placeholder="请输入用户名"
						onChangeText = {(text) => this.setState( {user:text} )}
					/>
					<TextInput 
						placeholder="请输入密码"
						onChangeText = {(pwd) => this.setState( {pwd:pwd} )}
					/>
				</View>
				<TouchableHighlight onPress={() => this._login()}>
					<Text>登陆</Text>
				</TouchableHighlight>
			</View>
		)
	}
}