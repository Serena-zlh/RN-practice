import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

export default class TopNav extends Component {
	_back() {
		alert(this.props.navigator.getCurrentRoutes())
		this.props.navigator.pop()
	}
	_quit() {
		alert('退出')
	}
	render() {
		return(
			<View style={styles.navBarStyle}>
				<TouchableHighlight onPress={ () => this._back()}>
					<Text style={styles.leftButtonTitleStyle}>后退</Text>
				</TouchableHighlight>
				<Text style={styles.navBarTitleStyle}>物联网信息平台管理系统</Text>
				<TouchableHighlight onPress={ () => this._quit()}>
					<Text style={styles.rightButtonTitleStyle}>退出</Text>
				</TouchableHighlight>
			</View>
		)
		
	}
}

  var styles = StyleSheet.create({
        container: {
            backgroundColor:'yellow',
            flex:1
        },

        navBarStyle: {
            // 尺寸
            
            
            // 背景颜色
            backgroundColor:'rgba(255, 255, 255, 0.9)',
            // 底部分隔线
            borderBottomWidth:0.5,
            borderBottomColor:'gray',
            // 主轴方向
            flexDirection:'row',
            // 对齐方式
            alignItems:'center',
            justifyContent:'space-between'
        },

        leftButtonTitleStyle: {
            // 字体大小
            fontSize:15,
            // 字体颜色
            color:'blue',
            // 内边距
            paddingLeft:8
        },

        navBarTitleStyle: {
            // 字体大小
            fontSize:17,
            // 字体颜色
            color:'black'
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

