import React, { useEffect, useState } from 'react'
import './index.scss'
import TopBar from '../../components/TopBar'
import Table from '../../components/Table'
import { type User } from '../../interfaces'
import { deleteUser, getUsers } from '../../services/user.service'
import EditUser, { type EditUserRef } from './components/EditUser'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const Users: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User>({})
  const [dataSource, setDataSource] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const editUserRef = React.useRef<EditUserRef>({})

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers: () => void = () => {
    setIsLoading(true)
    const users = getUsers()
    setDataSource(users)
    setIsLoading(false)
  }

  const handleDelete: (id: string) => void = (id) => {
    deleteUser(id)
    getAllUsers()
  }

  const fields = [
    { title: 'Name', key: 'name' },
    { title: 'Age', key: 'age' },
    { title: 'Phone Number', key: 'phone' },
    { title: 'Email', key: 'email' }
  ]

  const handleEdit: (user: User) => void = (user) => {
    setSelectedUser(user)
    if (editUserRef.current.showEditUserModal !== undefined) {
      editUserRef.current.showEditUserModal()
    }
  }

  return (
    <>
      <TopBar />
      <Button
        type="primary"
        onClick={() => { handleEdit({}) }}
        className="toggle-btn"
        icon={<PlusOutlined />}
      >
        Add User
      </Button>
      <Table
        loading={isLoading}
        fields={fields}
        dataSource={dataSource}
        onEdit={handleEdit}
        onDelete={(id) => { handleDelete(id) }}
      />
      <EditUser
        ref={editUserRef}
        title={`${selectedUser.id === undefined ? 'Create' : 'Edit'} User`}
        reloadUsers={getAllUsers}
        user={selectedUser} />
    </>
  )
}

export default Users
