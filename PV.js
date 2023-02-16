import DatePicker from "./DatePicker";
import Input from "./Input";
import React from "react";
import Form from '../components/Form';

export const PV = ({label, model, name, date, disabled, notVisible, value, onChange, type}) => (
  !notVisible ?
    <Form.Item label={label}>
      {date ? <DatePicker model={model} name={name} disabled={disabled} value={value}/> :
        <Input model={model} name={name} disabled={disabled} value={value} onChange={onChange} type={type}/>}
    </Form.Item> : null
);