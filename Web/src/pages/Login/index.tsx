import React from 'react'
import './index.scss'
import Form from '../../components/Form'
import SubmitButton from '../../components/SubmitButton'
import InputBox from '../../components/InputBox'
import authService from '../../services/auth.service'
import { Col, Row, Typography } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

const onFinish: (values: any) => void = (values) => {
  authService.signin(values.email, values.password)
}

const onFinishFailed: (errorInfo: any) => void = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const Login: React.FC = () => {
  const { Title } = Typography
  return (
    <Row className='login-container'>
      <Col span={14} className='left-section' />
      <Col span={10} className='right-section'>
        <Form
          className="login-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className="login-icon-container">
            <LockOutlined className='login-icon' />
          </div>
          <Title className="login-title">Signin</Title>
          <InputBox
            placeholder="Email"
            size="large"
            name="email"
            prefix={<UserOutlined />}
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          />
          <InputBox
            placeholder="Password"
            name="password"
            size="large"
            type="password"
            prefix={<LockOutlined />}
            rules={[{ required: true, message: 'Please enter your password!' }]}
          />
          <SubmitButton size="large" block />
        </Form>
      </Col>
    </Row>

  )
}

export default Login
