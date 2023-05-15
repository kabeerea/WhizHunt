import React from 'react'
import { Checkbox, Form, type FormItemProps } from 'antd'

interface CheckBoxProps extends FormItemProps {

}
const CheckBox: React.FC<CheckBoxProps> = ({ label, ...formProps }) => (
    <Form.Item
        {...formProps}
    >
        <Checkbox>{label}</Checkbox>
    </Form.Item>
)

export default CheckBox
