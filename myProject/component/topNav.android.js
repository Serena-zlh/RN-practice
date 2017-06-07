import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

export default class TopNav extends Component {
	_quit() {
		this.props.navigator.popToTop();
	}
	render() {
		return(
			<View style={styles.navBarStyle}>
				<Text style={styles.navBarTitleStyle}>物联网信息平台管理系统</Text>
				<TouchableHighlight onPress={ () => this._quit()}>
					<Text style={styles.rightButtonTitleStyle}>退出</Text>
				</TouchableHighlight>
			</View>
		)
		
	}
}

  var styles = StyleSheet.create({
		navBarStyle: {
			backgroundColor:'rgba(255, 255, 255, 0.9)',
			// 底部分隔线
			borderBottomWidth:0.5,
			borderBottomColor:'gray',
			// 主轴方向
			flexDirection:'row',
			// 对齐方式
			alignItems:'center',
			justifyContent:'space-between'
		}
		navBarTitleStyle: {
			// 字体大小
			fontSize:17,
			// 字体颜色
			color:'black',
			textAlign:'center'
		},
		rightButtonTitleStyle: {
			// 字体大小
			fontSize:15,
			// 字体颜色
			color:'blue',
			// 内边距
			paddingRight:8
		}
	});

