import React from 'react';
import PropTypes from 'prop-types';
import { TextField, makeStyles } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool
};

const useStyles = makeStyles(theme=>({
    textField:{
        border: " 2px solid white",
        borderRadius: "4px",
    }
}))

function InputField({form,name,label,disabled}) {
    const {errors, formState} =form;
    const classes = useStyles();
    const hasErrors = formState.touched[name] && errors[name]
    return (
        <Controller
        name={name}
        control={form.control}
        as={TextField}
        fullWidth
        disabled={disabled}
        error={!!hasErrors}
        helperText={errors[name]?.message}
        variant="outlined"
        placeholder='Todo'
        className={classes.textField}
        >
        </Controller>
    );
}

export default InputField;