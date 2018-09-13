import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {load} from "../InitializeFrom";

const data = {
    FirstName:"Manoj",
    LastName:"Prajapati",
    Age: '27',
    Sex:'male'
}
// console.log("load", load);
let ContactForm = (props) => {
    console.log("props", props);
    return(
        <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>First Name :</label>
                <Field type="text" component="input" name="FirstName"/>
            </div>
            <div>
                <label>Last Name:</label>
                <Field type="text" component="input" name="LastName"/>
            </div>
            <div>
                <label>Age :</label>
                <Field type="text" component="input" name="Age"/>
            </div>
            <div>
                <label>Male</label>
                <Field type="radio" component="input" name="Sex" value="male"/>
                <label>Female</label>
                <Field type="radio" component="input" name="Sex" value="female"/>
            </div>
        <button type="submit" >Submit</button>
        <button type="button" onClick={() => props.load(data)}>load</button>
        </form>
        </div>
    );
}

ContactForm= reduxForm({
    form: 'contact'
})(ContactForm);

ContactForm = connect(
    (state)=>({
        initialValues: state.initializeForm.data
    }),
    (dispatch)=>({
    load: data => dispatch(load(data))
    })
)(ContactForm);
export default ContactForm;