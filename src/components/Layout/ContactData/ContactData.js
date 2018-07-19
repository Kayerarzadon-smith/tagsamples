import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import css from './ContactData.css';
import axios from '../../../axios-samples';
import Input from '../Input/Input';

class ContactData extends Component {
    state = {
        sampleForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            state: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'State'
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip',
                },
                value: ''
                // validation: {
                //     required: true,
                //     minLength: 5,
                //     maxLength: 5
                // },
                // valid: false,
                // touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Phone Number'
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            organization: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Organization's Name"
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            position: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Job Title"
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            sport: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Sport"
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            colors: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Team Colors"
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            helmet: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Helmet Color"
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            helmet: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Helmet Color"
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },
            website: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Team Website (if applicable)"
                },
                value: '',
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            },

            logo: {
                // selectedFile: null
                elementType: 'input',
                elementConfig: {
                    type: 'file',
                    placeholder: "upload logo"
                },
                // value: ''
                // validation: {
                //     required: true
                // },
                // valid: false,
                // touched: false
            }
        },
        loading: false
    }

    sampleHandler = (event) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.sampleForm) {
            formData[formElementIdentifier] = this.state.sampleForm[formElementIdentifier].value;
        }
        const sample = {
            sampleData: formData
        }
        axios.post( '/samples.json', sample )
            .then( response => {
                this.setState( { loading: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }


    // checkValidity(value, rules) {
    //     let isValid = true;

    // //     // if (rules.required) {
    // //     //     isValid = value.trim() !== '' && isValid;
    // //     // }
    // //     if (rules.minLength) {
    // //         isValid = value.length >= rules.minLength && isValid
    // //     }
    // //     if (rules.maxLength) {
    // //         isValid = value.length <= rules.maxLength && isValid
    // //     }
    // //     return isValid;
    // }

    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('https://tagsports-samples-e8a74.firebaseio.com/', fd);
    }

            

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedSampleForm = {
            ...this.state.sampleForm
        }
        const updatedFormElement = {
            ...updatedSampleForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        // updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        // updatedFormElement.touched = true;
        updatedSampleForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement);
        this.setState({sampleForm: updatedSampleForm});
    }

    render () {
        const formElementsArray = [];
        for(let key in this.state.sampleForm){
            formElementsArray.push({
                id: key,
                config: this.state.sampleForm[key]
            });
        }
        let form = (
            <form onSubmit={this.sampleHandler}> 
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value} 
                        // invalid={!formElement.config.valid}
                        // shouldValidate={formElement.config.validation}
                        // touched={formElement.config.touched}
                        onChange={this.fileSelectedHandler}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button>Get Sample</Button>
            </form> 
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={css.ContactData}>
                <h4> Enter Your Contact Info </h4>
                {form}
            </div>    
        );
    }
}

export default ContactData;
