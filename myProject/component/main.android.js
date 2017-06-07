//显示传感器信息页面
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
	ListView
} from 'react-native';
import TopNav from './topNav.android.js'
import BottomNav from './bottomNav.android.js'

const mookData = [
	{name:'设备名称-1',type:'类型-1',location:'位置-1',ip:'IP-1',port:'端口-1'},
	{name:'设备名称-2',type:'类型-2',location:'位置-2',ip:'IP-2',port:'端口-2'},
	{name:'设备名称-3',type:'类型-3',location:'位置-3',ip:'IP-3',port:'端口-3'}
]
export default class Main extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(mookData)
		};
	}
	getRow(rowData,sectionID) {
		console.log(rowData)
		return(
			<View style={styles.tableContainer}>
				<Text>{rowData.name}</Text>
				<Text>{rowData.type}</Text>
				<Text>{rowData.location}</Text>
				<Text>{rowData.ip}</Text>
				<Text>{rowData.port}</Text>
			</View>
		)
	}
	render() {
		return (
			<View>
				<View>
					<TopNav navigator={this.props.navigator}></TopNav>
				</View>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => this.getRow(rowData)}
				/>
				<View>
					<BottomNav navigator={this.props.navigator}></BottomNav>
				</View>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	tableContainer: {
		flexDirection:'row',
		flexWrap:'wrap',
		justifyContent:'space-between'
	}
});