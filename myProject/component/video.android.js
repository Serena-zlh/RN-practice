//显示实时视频页面
import React, { Component, PropTypes } from 'react';
import {
	AppRegistry,
	Text,
	TouchableHighlight,
	View,
	StyleSheet,
	Navigator,
	TextInput,
	Image
} from 'react-native';
import TopNav from './topNav.android.js'
import BottomNav from './bottomNav.android.js'
export default class Main extends Component {
	render() {
		return (
			<View>
				<View>
					<TopNav navigator={this.props.navigator}></TopNav>
				</View>
				<Image style={{width:40,height:40}} source={require('../assets/img/test.png')} />
				<Image style={{width:40,height:40}} source={require('../assets/img/test.png')} />
				<Image style={{width:40,height:40}} source={require('../assets/img/test.png')} />
				<Image style={{width:40,height:40}} source={require('../assets/img/test.png')} />
				<Image style={{width:40,height:40}} source={require('../assets/img/test.png')} />
				<Image style={{width:40,height:40}} source={require('../assets/img/test.png')} />
				<Image style={{width:40,height:40}} source={require('../assets/img/test.png')} />
				<View>
					<BottomNav navigator={this.props.navigator}></BottomNav>
				</View>
			</View>
		)
	}
}