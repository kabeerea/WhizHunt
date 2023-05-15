import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import './index.scss'
import { Divider, Modal } from 'antd'
import Form, { FormInstance } from '../Form'

interface ModalProps {
  title: string
  initialValues: Record<string, any>
  children: React.ReactNode
  onSubmit: (values: any) => void
}

export interface ModalRefs {
  closeEditModal?: () => void
  showEditModal?: () => void
}

const EditUser = forwardRef<ModalRefs, ModalProps>(({
  title,
  initialValues,
  children,
  onSubmit
}, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [form] = FormInstance.useForm()

  useImperativeHandle(ref, () => ({
    closeEditModal () {
      handleCancel()
    },
    showEditModal () {
      showModal()
    }
  }))

  useEffect(() => {
    form.resetFields()
  }, [form, initialValues])

  const showModal: () => void = () => {
    setIsModalOpen(true)
  }

  const checkFieldErrors: () => Promise<boolean> = async () => {
    try {
      await form.validateFields()
      return false
    } catch (fieldErrors) {
      return true
    }
  }

  const handleOk: () => Promise<void> = async () => {
    setIsLoading(true)
    const isFieldErrorExist = await checkFieldErrors()
    if (!isFieldErrorExist) {
      const values = form.getFieldsValue()
      onSubmit(values)
    } else {
      setIsLoading(false)
    }
  }

  const handleCancel: () => void = () => {
    setIsModalOpen(false)
    setIsLoading(false)
    form.resetFields()
  }

  return (
    <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} initialValues={initialValues}>
      <Modal
        className='edit-modal'
        title={title}
        open={isModalOpen}
        onOk={() => { void handleOk() }}
        onCancel={handleCancel}
        maskClosable={false}
        closable={false}
        keyboard={false}
        confirmLoading={isLoading}
      >
          <Divider />
            <div className="edit-modal-body">{children}</div>
          <Divider />
      </Modal>
      </Form>
  )
})

EditUser.displayName = 'EditUser'
export default EditUser
