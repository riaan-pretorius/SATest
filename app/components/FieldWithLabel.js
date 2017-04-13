import React, { Component } from 'react'
import ReactNative from 'react-native'
import {styles} from '../styles'

const {
	View,
	Text,
	TextInput
} = ReactNative

export class FieldWithLabel extends Component {
	render() {
		console.log(this.props)
		return <View>
			<Text style={styles.label}>{this.props.label}</Text>
			<TextInput
				style={styles.input}
        name={this.props.fieldName}
			/>
		</View>
	}
}
