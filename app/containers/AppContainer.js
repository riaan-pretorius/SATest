import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { reduxForm } from 'redux-form'
import { FieldWithLabel } from '../components/FieldWithLabel'
import {styles} from '../styles'
import { saveUserData } from '../actions/UserForm'

const {
	View,
	Text,
	TextInput,
	Field,
	StyleSheet,
	TouchableOpacity,
} = ReactNative;

const submit = (values, dispatch) => {
	console.log('<<<SUBMIT FORM>>>', values)
	dispatch(saveUserData(values))
}

class AppContainer extends Component {
	render () {
		const { handleSubmit } = this.props;
		return (
			<View style={styles.container}>
				<FieldWithLabel label="Full Name" fieldName="fullName" />
				<FieldWithLabel label="Email" fieldName="email" />
				<FieldWithLabel label="Password" fieldName="password" />
				<FieldWithLabel label="Confirm Password" fieldName="confirmPassword" />
				<FieldWithLabel label="State" fieldName="state" />
				<FieldWithLabel label="Zip" fieldName="zip" />
				<TouchableOpacity onPress={handleSubmit(submit)}>
					<Text style={styles.button} >Submit</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

AppContainer = reduxForm({
	form: 'test'
})(AppContainer)

export default connect((state) => {
	return {
		recipeCount: state.recipeCount,
		fullName: state.fullName
	}
 }, mapDispatchToProps)(AppContainer);
