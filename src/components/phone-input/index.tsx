'use client'

import { FieldProps } from "formik";
import { get, isFunction } from "lodash";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

interface PhoneInputMaskTypes extends FieldProps {
    placeholder: string;
    format?: string;
    label: string;
    maskFormat: string;
    isDisabled?: boolean;
    inputProps: any;
}

export const PhoneInputMask = (props: PhoneInputMaskTypes)=> {
    const [allowFormat, setAllowFormat] = useState(false);
    const { placeholder = '+998 (90) 123-45-67', format = '+998 (##) ###-##-##', label, maskFormat, field, form, isDisabled, inputProps } = props;
    return (
        <div className="phone__mask">
        <label htmlFor="input">
          <span className={`${get(form.touched, field.name) && get(form.errors, field.name) ? 'text_validator' : 'text_invalidator'} `}>
            {form?.errors[field?.name] ? label : label}
          </span>
        </label>
        <PatternFormat
          allowEmptyFormatting={allowFormat}
          onFocus={() => setAllowFormat(true)}
          type="text"
          format={format}
          {...field}
          {...inputProps}
          value={field?.value?.slice(4)}
          mask={maskFormat}
          placeholder={placeholder}
          disabled={isDisabled}
          className={`phone_input ${get(form.touched, field.name) && get(form.errors, field.name)}`}
          onChange={event => {
            field?.onChange(event);
            isFunction(get(inputProps, 'onChange')) && inputProps?.onChange(event);
          }}
        />
        {get(form.touched, field.name) && get(form.errors, field.name) && (
          <div className="error__message">{form.errors[field.name] && field.name && 'dfd'}</div>
        )}
      </div>
    )
}
