import React from 'react'
import { Form, Input } from 'antd'
import { type Rule } from 'antd/es/form'
import { type NamePath } from 'antd/es/form/interface'

interface TextInputProps {
  label: string
  name: NamePath
  rules?: Rule[]
  type?: 'text' | 'password'
  prefix?: React.ReactNode
}

const TextInput: React.FC<TextInputProps> = ({
  prefix,
  label,
  name,
  rules,
  type
}) => (
  <Form.Item
    name={name}
    rules={rules}
  >
    {type === 'password'
      ? <Input.Password placeholder={label} />
      : <Input placeholder={label} prefix={prefix} />
    }
  </Form.Item>
)

export default TextInput
