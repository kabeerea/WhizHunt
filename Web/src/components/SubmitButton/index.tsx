import React from 'react'
import { Button, Form, type FormItemProps } from 'antd'
import { type SizeType } from 'antd/es/config-provider/SizeContext'

interface SubmitButtonProps extends FormItemProps {
  label?: string
  block?: boolean
  size?: SizeType
}
const SubmitButton: React.FC<SubmitButtonProps> = ({ size, block, label, ...formProps }) => (
    <Form.Item {...formProps}>
        <Button type="primary" htmlType="submit" block={block} size={size}>
            {(label != null) || 'Submit'}
        </Button>
    </Form.Item>
)

export default SubmitButton
