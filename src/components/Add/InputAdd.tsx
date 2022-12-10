import classNames from 'classnames/bind';
import styles from './Add.module.scss';

import axios from 'axios'
import { Form, FormikProvider, useFormik } from 'formik';
import React from 'react';
import { TInputAddProps } from './InputAdd.types';
import { TextField } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

const cx = classNames.bind(styles);
const InputAdd: React.FC<TInputAddProps> = ({ reloadData }) => {
    const formik = useFormik({
        initialValues:  {
          name: '',
          quantity: 1,
          checked: false
        },
        onSubmit: (values) => {
            axios.post('http://localhost:3005/api/create', values)
            .then(function (response) {
                reloadData()
                setFieldValue('name', '')
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    });
    const {  handleSubmit, getFieldProps, setFieldValue } = formik;
    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit} className={cx('add__form')}>
                <TextField
                    fullWidth
                    type="text"
                    label="Add an item..."
                    {...getFieldProps('name')}
                />
                <button type= "submit" className={cx('add__button')}>
                    <AddIcon className={cx('add__icon')} />
                </button>
            </Form>
        </FormikProvider>
    );
};

export default InputAdd;
