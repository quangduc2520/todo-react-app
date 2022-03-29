import React from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().required('Please enter what you want to do!')
})

TodoForm.propTypes = {
    onSubmit: PropTypes.func
};

function TodoForm({onSubmit}) {
    const form = useForm({
        defaultValue:{
            title: ''
        },
        resolver: yupResolver(schema)
    });

    const handleSubmit = (values)=>{
        if(onSubmit){
            onSubmit(values)
        }
        form.reset();
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form}/>
        </form>
    );
}

export default TodoForm;