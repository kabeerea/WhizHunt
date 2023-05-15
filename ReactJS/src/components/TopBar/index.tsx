import React from 'react'
import './index.scss'
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import { Menu, type MenuProps } from 'antd'
import { type MenuClickEventHandler } from 'rc-menu/lib/interface'
import { useNavigate } from 'react-router-dom'
import { menuItems, screenPath } from '../../constants'
import authService from '../../services/auth.service'

const TopBar: React.FC = () => {
  const navigate = useNavigate()

  const onClick: MenuClickEventHandler = (e) => {
    if (e.key === menuItems.LOGOUT) {
      authService.signout()
    } else if (Object.values(screenPath).includes(e.key as screenPath)) {
      navigate(e.key)
    }
  }

  const items: MenuProps['items'] = [
    {
      label: 'Users',
      key: screenPath.USERS,
      icon: <UserOutlined />
    },
    {
      label: 'Settings',
      key: screenPath.SETTINGS,
      icon: <SettingOutlined />
    },
    {
      label: 'Logout',
      key: 'logout',
      icon: <LogoutOutlined />,
      className: 'logout-menu'
    }
  ]

  return (
    <Menu
      className="top-bar-menu"
      onClick={onClick}
      selectedKeys={[window.location.pathname]}
      mode="horizontal"
      items={items}
    />
  )
}

export default TopBar
