import { Form as AntdForm, type FormProps } from 'antd'
import React from 'react'

interface AntdFormProps extends FormProps {
  children: React.ReactNode
}

const Form: React.FC<AntdFormProps> = (props) => {
  return (
    <AntdForm
      {...props}
      name="basic"
      autoComplete="off"
      validateTrigger="onBlur"
    >
      {props.children}
    </AntdForm>
  )
}

export { AntdForm as FormInstance }
export default Form
