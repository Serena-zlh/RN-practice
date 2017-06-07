import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

import Main from './main.android.js'
import CurrentData from './currentData.android.js'
import HistoryData from './historyData.android.js'
import Video from './video.android.js'
export default class bottomNav extends Component {
	_jumpToById(id, component) {
		var obj = {
			destRoute: {},
			hasRoute: false
		}
		this.props.navigator.getCurrentRoutes().map((route, i) => {
			if (route.id === id) {
				obj.destRoute = route;
				obj.hasRoute = true;
			}
		});
		if(obj.hasRoute) {
			this.props.navigator.jumpTo(obj.destRoute);
		} else {
			this.props.navigator.push({
				id: id,
				component: component
			})
		}
	}
	_goMain() {
		this._jumpToById('Main', Main);
	}
	_goCurrentData() {
		console.log(this.props.navigator.getCurrentRoutes())
		this._jumpToById('CurrentData', CurrentData)
	}
	_goHistoryData() {
		this._jumpToById('HistoryData', HistoryData)
	}
	_goVideo() {
		this._jumpToById('Video', Video)
	}
	render() {
		return(
			<View style={styles.navBarStyle}>
				<TouchableHighlight onPress={ () => this._goMain()}>
					<Text>传感设备</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this._goCurrentData()}>
					<Text>实时数据</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={ () => this._goHistoryData()}>
					<Text>历史数据</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this._goVideo()}>
					<Text>监控视频</Text>
				</TouchableHighlight>
			</View>
		)
		
	}
}

var styles = StyleSheet.create({
	navBarStyle: {
		backgroundColor:'rgba(255, 255, 255, 0.9)',
		borderBottomWidth:0.5,
		borderBottomColor:'gray',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between'
	}
});

