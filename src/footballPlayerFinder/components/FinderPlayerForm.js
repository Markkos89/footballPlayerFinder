import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PlayerFinderSchema from './../validationSchemas/playerFinderSchema.js';

const renderOptions = values => 
    values.map(({ value, label }) =>
        <option className="option" key={ value } value={ value } label={ label }>{ label }</option>
    )

const FinderPlayerForm = ({ onSubmit, initialValues, selectOptions }) => {
    return ( 
        <div className="container">
            <Formik 
                initialValues={ initialValues } 
                onSubmit={ onSubmit } 
                validationSchema={ PlayerFinderSchema }
                render={({ errors, status, touched, isSubmitting }) => ( 
                    <Form>
                        <div className="level" >
                            <div>
                                <Field className="input" type="text" name="playerName" placeholder="Player Name"/>
                                <ErrorMessage name="playerName" />
                            </div>
                            <div className="select" >
                                <Field component="select" name="position"> 
                                {
                                    renderOptions(selectOptions)
                                } 
                                </Field> 
                            </div>
                            <div>
                                <Field className="input" type="text" name="age" placeholder="Age" />
                                <ErrorMessage name="age" />
                            </div>                           
                            <button className="button" type="submit" disabled={ isSubmitting } >
                                Search
                            </button> 
                        </div>
                    </Form>
                )}
            />
        </div>
    )
};

FinderPlayerForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired,
    selectOptions: PropTypes.array.isRequired
};

export default FinderPlayerForm;