import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import { Field, reduxForm } from 'redux-form'
import { FieldWithLabel } from '../components/FieldWithLabel'
import {styles} from '../styles'
import { saveUserData } from '../actions/UserForm'
import * as global from '../global'

const {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} = ReactNative

const submit = (values, dispatch) => {
	console.log('<<<SUBMIT FORM>>>', values)
	dispatch(saveUserData(values))
}

class AppContainer extends Component {
	constructor(props) {
		super(props)
	}



	render () {
		const { handleSubmit } = this.props;
		return (
			<View style={styles.container}>
				<Field label="FirstName" name="firstName" nextField="2" refName="1"
					component={FieldWithLabel} />
				<Field label="LastName" name="lastName" nextField="3" refName="2"
					component={FieldWithLabel} />
				<Field label="Email" name="email" nextField="" refName="3"
					component={FieldWithLabel} />
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
