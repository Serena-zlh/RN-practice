import React, {
    Component,
    PropTypes
} from 'react';
import {
    AppRegistry,
    Text,
    TouchableHighlight,
    View,
    StyleSheet,
    Navigator,
} from 'react-native';
// About Class
var About = React.createClass({
    render() {
        return (
            <View style={ styles.container }>
                <TouchableHighlight onPress={ () => this.props.navigator.pop() }
                style={ styles.button }>
                    <Text>返回</Text>
                </TouchableHighlight>
                <Text>关于软件</Text>
            </View>
        )
    }
})

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        marginTop: 60
    },
    button: {
        height: 50,
        backgroundColor: '#ededed',
        marginTop: 10,
        // 垂直居中用justifyContent
        justifyContent: 'center',
        // 水平居中用alignItems
        alignItems: 'center'
    },
    text: {
        marginTop: 10,
        height: 50,
        // 文本居中
        textAlign: 'center'
    }
});
module.exports = About