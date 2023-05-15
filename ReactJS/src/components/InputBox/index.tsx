import React from 'react'
import { type ColProps, Form, Input, InputNumber } from 'antd'
import { type Rule } from 'antd/es/form'
import { type NamePath } from 'rc-field-form/es/interface'
import { type SizeType } from 'antd/es/config-provider/SizeContext'

interface InputBoxProps {
  name: NamePath
  label?: string
  placeholder: string
  rules?: Rule[]
  prefix?: React.ReactNode
  type?: 'text' | 'password' | 'number'
  labelCol?: ColProps
  wrapperCol?: ColProps
  size?: SizeType
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const InputBox: React.FC<InputBoxProps> = ({
  name,
  label,
  rules,
  type,
  labelCol,
  wrapperCol,
  ...inputProps
}) => (
  <Form.Item
    name={name}
    rules={rules}
    label={label}
    labelCol={labelCol}
    wrapperCol={wrapperCol}
  >
    {type === 'password'
      ? <Input.Password {...inputProps}/>
      : (type === 'number'
          ? <InputNumber {...inputProps}/>
          : <Input {...inputProps}/>)}

  </Form.Item>
)

export default InputBox
