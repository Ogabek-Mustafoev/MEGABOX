'use client'
import { Input } from '@nextui-org/react';
import { FieldProps } from 'formik';
import { get, isFunction } from 'lodash';
import { useState } from 'react';

interface IMainInput extends FieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  inputProps?: any;
  isValid?: any;
  size?: string;
  addonBefore?: string;
}

export const MainInput = (props: IMainInput) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    label,
    type = 'text',
    placeholder,
    field,
    form,
    inputProps,
    isValid = () => true,
  } = props;
  return (
    <div className="input__wrapper">
      {/* <label className={`${get(form.touched, field.name) && get(form.errors, field.name) ? 'text_validator' : 'text_invalidator'}`}>{label}</label> */}
      <Input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        {...field}
        autoComplete="off"
        placeholder={placeholder}
        onChange={(event) => {
          if (isValid(event)) {
            isFunction(get(inputProps, 'onChange')) && inputProps.onChange(event);
            field.onChange(event);
          }
        }}
      />
    </div>
  );
};
