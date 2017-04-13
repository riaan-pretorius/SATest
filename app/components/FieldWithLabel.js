import React, { Component } from 'react'
import ReactNative from 'react-native'
import {styles} from '../styles'
import * as global from '../global'

const {
	View,
	Text,
	TextInput
} = ReactNative

export const FieldWithLabel = (props) => {
	const nextField = props.nextField
	const currentField = props.refName
	const isNext = nextField == "" ? "done" : "next"
	const blurSubmit = isNext == "done"
	return (
		<View>
			<Text style={styles.label}>{props.label}</Text>
			<TextInput
				name={props.input.name} style={styles.input}
				onChangeText={props.input.onChange}
				blurOnSubmit={ blurSubmit }
				returnKeyType={isNext}
				onSubmitEditing={(event) => {
					if (!blurSubmit) {
						global.focusNextField(nextField)
					}
				}}
				ref={ input => {
					global.inputs[currentField] = input;
				}} />
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
