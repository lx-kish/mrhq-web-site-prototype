import React, { Component } from 'react';
import FormFields from '../../hoc/formfields/formfields';

class Apply extends Component {

    state = {
        formData: {
            fullname: {
                element: 'input',
                value: '',
                label: false,
                labelText: 'Full Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Full Name',
                    className: 'apply-screen__form--input'
                }
            },
            pathway: {
                element: 'select',
                value: '',
                label: false,
                labelText: 'Choose your pathway',
                config: {
                    name: 'pathway_input',
                    options: [
                        { val: '0', text: 'Choose Your Pathway' },
                        { val: '1', text: 'AI Developer' }, { val: '1', text: 'AI Developer' },
                        { val: '2', text: 'Data Analyst' },
                        { val: '3', text: 'Business Analyst' },
                        { val: '4', text: 'UX Designer' }
                    ],
                    className: 'apply-screen__form--select'
                }
            },
            intake: {
                element: 'select',
                value: '',
                label: false,
                labelText: 'Choose your intake',
                config: {
                    name: 'intake_input',
                    options: [
                        { val: '0', text: 'Choose Your Intake' },
                        { val: '1', text: 'November, 2019' },
                        { val: '2', text: 'February, 2020' }
                    ],
                    className: 'apply-screen__form--select'
                }
            },
            phone: {
                element: 'input',
                value: '',
                label: false,
                labelText: 'Phone Number',
                config: {
                    name: 'tel_input',
                    type: 'tel',
                    placeholder: 'Phone',
                    className: 'apply-screen__form--input'
                }
            },
            email: {
                element: 'input',
                value: '',
                label: false,
                labelText: 'Full Name',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Email',
                    className: 'apply-screen__form--input'
                }
            },
            label: {
                element: 'sign',
                value: "I'm interested in funding options"
            },
            yes: {
                element: 'checkbox',
                value: 'yes',
                label: true,
                labelText: 'Yes',
                config: {
                    name: 'yes',
                    type: 'checkbox',
                    className: 'apply-screen__form--checkbox'
                }
            },
            no: {
                element: 'checkbox',
                value: 'no',
                label: true,
                labelText: 'No',
                config: {
                    name: 'no',
                    type: 'checkbox',
                    className: 'apply-screen__form--checkbox'
                }
            }
        }
    }

    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};

        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value
        }
        console.log(dataToSubmit);
    }

    render() {
        return (
            <div className="apply-screen">
                <div className="apply-screen__header">
                    <h1>Register Your Interest</h1>
                    <p>Apply here and we'll contact you to discuss your placement and funding.We look forward to meet you.</p>
                </div>
                <form className="apply-screen__form" onSubmit={this.submitForm}>

                    <FormFields
                        formData={this.state.formData}
                        onblur={(newState) => this.updateForm(newState)}
                        change={(newState) => this.updateForm(newState)}
                    />

                    <div className="apply-screen__form--button">
                        <button type="submmit" className="btn">Let's Go</button>
                    </div>
                </form>
                <div>
                    <p>All personal data collected by MRHQ is private and for our use only. It will not be shared with any outside party. By sharring your infurmation with us you agree to receive information about our products and services. Read more about our privacy policy <a href="/">here</a>.</p>
                </div>
            </div>
        )
    }

}

export default Apply;