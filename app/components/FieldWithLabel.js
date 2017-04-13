import React, { Component } from 'react'
import ReactNative from 'react-native'
import {styles} from '../styles'

const {
	View,
	Text,
	TextInput
} = ReactNative

export const FieldWithLabel = (props) => {
	return (
		<View>
			<Text style={styles.label}>{props.label}</Text>
			<TextInput
				name="fullName" style={styles.input}
				onChangeText={props.input.onChange} />
		</View>
	)
}

// export const FieldWithLabel = ({ input: { onChange, ...restInput }}) => {
// 	console.log(this.props)
// 	return <View>
// 		<Text style={styles.label}>{this.props.label}</Text>
// 		<TextInput
// 			style={styles.input}
// 			onChangeText={onChange} {...restInput} />
// 	</View>
// }
