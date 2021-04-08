import React from 'react';
import { Button } from '../../components/Button';
import { FormInput, FormWrapper, FormLabel, ErrorLabel } from '../../components/Form.styles';
import { Formik, FormikProps, Form, FormikHelpers } from 'formik';
import { createNewProduct } from './API';

interface InitialValuesTypes {
    title: string,
    email?: string,
    description?: string
    price: number
 }

 const initialValues: InitialValuesTypes = {
        title: '',
        email: '',
        description: '',
        price: 0
 };

 function validateEmail(value: string) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  function validateName(value: string) {
    let error;
    if (value.length < 3) {
      error = 'Please type longer name';
    }
    return error;
  }


export const CreateItemPage = () => {

    const handleSubmit = (el: InitialValuesTypes) => {
        createNewProduct(
            {
                title: el.title,
                description: el.description,
            }
        );
        console.log('x', el.title, el.price, el.description);
    };

    return (
        <>

        <Formik
            initialValues={initialValues}
            onSubmit={( values: InitialValuesTypes, actions: FormikHelpers<InitialValuesTypes> ) => {
                  actions.setSubmitting(false);
                  actions.resetForm();
                  actions.setStatus('form has been send');
                  handleSubmit(values);
                  console.log('values', values,'actions', actions); //values from input and available actions of Formik
              }}

        >{(props: FormikProps<any>) => (

            <FormWrapper>
                <Form>
                    <FormLabel htmlFor="name">Product title</FormLabel>
                    <FormInput type="text" id="title" name="title" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.title} validate={validateName}/>
                    {props.errors.title && props.touched.title ? <ErrorLabel>{props.errors.title}</ErrorLabel> : null}

                    {/* <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput type="text" id="email" name="email" validate={validateEmail} />
                    {props.errors.email && props.touched.email ? <ErrorLabel>{props.errors.email}</ErrorLabel> : null} */}
                    <FormLabel htmlFor="email">Description</FormLabel>
                    <FormInput type="text" id="description" name="description" validate={validateName} />
                    {props.errors.description ? <ErrorLabel>{props.errors.description}</ErrorLabel> : null}

                    <FormLabel htmlFor="channel">Price</FormLabel>
                    <FormInput type="text" id="price" name="price" />
                    <div>{props.status}</div>

                    <Button type="submit" onClick={() => console.log('props', props)} bgColor="blue" >Submit</Button>
                    <Button type="button" bgColor="red" onClick={props.resetForm}>reset values</Button>
                </Form>
            </FormWrapper>
          )}

        </Formik>

        </>
    );
};
