import React from 'react'
import './index.scss'
import { Popconfirm, Space, Table as AntdTable } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { type TableProps } from 'rc-table'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { isEmptyArray } from '../../helper/validations'
import { type User } from '../../interfaces'

interface AntdTableProps extends TableProps {
  fields: ColumnsType<any>
  dataSource: Array<Record<string, any>>
  loading?: boolean
  onEdit?: (user: User) => void
  onDelete?: (id: string) => void
}

const Table: React.FC<AntdTableProps> = ({
  fields,
  dataSource,
  loading,
  onEdit,
  onDelete
}) => {
  const handleEdit: (user: User) => void = (user) => {
    if (onEdit !== undefined) {
      onEdit(user)
    }
  }

  const handleDelete: (id: string) => void = (id) => {
    if (onDelete !== undefined) {
      onDelete(id)
    }
  }

  const getColums: () => ColumnsType<any> = () => {
    const columns = fields.map((data) => ({
      title: data.title,
      dataIndex: data.key,
      key: data.key
    })) as ColumnsType<any>
    columns.push({
      title: 'Action',
      key: 'action',
      render: (_, record, index) => (
        <Space size="middle">
          <EditOutlined
            className="table-action-btn"
            onClick={() => {
              handleEdit(record)
            }}
          />
          <Popconfirm
            title="Sure to delete?"
            okText="Delete"
            onConfirm={() => {
              handleDelete(record.id)
            }}
          >
            <DeleteOutlined className="table-action-btn" />
          </Popconfirm>
        </Space>
      )
    })
    return columns
  }

  return (
    <AntdTable
      loading={loading}
      columns={isEmptyArray(fields) ? undefined : getColums()}
      dataSource={isEmptyArray(fields) ? undefined : dataSource}
    />
  )
}

export default Table
