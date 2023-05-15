import React, { forwardRef, useImperativeHandle } from 'react'
import EditModal, { type ModalRefs } from '../../../../components/EditModal'
import InputBox from '../../../../components/InputBox'
import { allowOnlyDigits } from '../../../../helper/utitlity'
import { isEmptyString } from '../../../../helper/validations'
import { type User } from '../../../../interfaces'
import { addUser, editUser } from '../../../../services/user.service'

interface EditUserProps {
  title: string
  reloadUsers: () => void
  user: User
}

export interface EditUserRef {
  showEditUserModal?: () => void
}

const EditUser = forwardRef<EditUserRef, EditUserProps>(({ title, user, reloadUsers }, ref) => {
  const modalRef = React.useRef<ModalRefs>({})

  useImperativeHandle(ref, () => ({
    showEditUserModal () {
      if (modalRef.current.showEditModal !== undefined) {
        modalRef.current.showEditModal()
      }
    }
  }))

  const onSubmit: (values: any) => void = (values: any) => {
    if (isEmptyString(user.id)) {
      addUser(values)
    } else {
      editUser({ ...user, ...values })
    }

    if (modalRef.current.closeEditModal !== undefined) {
      modalRef.current.closeEditModal()
    }
    reloadUsers()
  }

  return (
    <EditModal
      ref={modalRef}
      title={title}
      onSubmit={onSubmit}
      initialValues={user as Record<string, any>}
    >
      <InputBox
        label="Name"
        name="name"
        placeholder="Name"
        rules={[{ required: true, message: 'Please enter your name!' }]}
      />
      <InputBox
        type="number"
        label="Age"
        name="age"
        placeholder="Age"
        rules={[{ required: true, message: 'Please enter your age!' }]}
      />
      <InputBox
        label="Phone Number"
        name="phone"
        placeholder="Phone Number"
        onKeyDown={allowOnlyDigits}
        rules={[
          { required: true, message: 'Please enter your number!' },
          { type: 'string', min: 10, max: 10, message: 'Please enter a valid phone number!' }
        ]}
      />
      <InputBox
        label="Email"
        name="email"
        placeholder="Email"
        rules={[
          { required: true, message: 'Please enter your email!' },
          { type: 'email', message: 'Please enter a valid email!' }
        ]}
      />
    </EditModal>
  )
})

EditUser.displayName = 'EditUser'
export default EditUser
