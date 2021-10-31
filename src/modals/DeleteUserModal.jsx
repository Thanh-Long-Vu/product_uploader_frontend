import React, { useContext } from 'react'
import Icon from 'components/elements/Icon'
import ModalContext from 'context/ModalContext'

const DeleteUserModal = ({ mutation }) => {
  const { modalState, setModalState } = useContext(ModalContext)

  const onCloseModal = () => {
    setModalState({ ...modalState, isModalOpen: null, openDeleteUserModal: true, userId: null })
  }

  const onDelete = () => {
    mutation.mutate(modalState.userId)
    onCloseModal()
  }

  return (
    <>
      <div className="bg-white border border-gray-400 center-modal -translate-x-7/12 left-7/12">
        <div className="flex flex-row justify-between px-4 py-8 bg-gradient-to-r from-gray-500 to-gray-600">
          <p className="text-white ">Confirm delete User ?</p>
          <div className="cursor-pointer" onClick={onCloseModal}>
            <Icon name="close" style="w-8 h-8 font-bold" fill="#fff" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-4 mt-10 mb-4">
          <p>Do you want to delete this user ?</p>
          <p className="text-xl italic text-red-500">This operation cannot be reverted!</p>
        </div>
        <div className="flex items-center justify-center py-4">
          <button
            type="button"
            className="px-12 py-2 text-white bg-gray-600 rounded-full hover:bg-gray-300 hover:text-gray-800"
            onClick={onCloseModal}
          >
            No
          </button>
          <button
            type="button"
            className="px-12 py-2 ml-8 text-white bg-blue-600 rounded-full hover:bg-blue-300 hover:text-gray-800"
            onClick={onDelete}
          >
            OK
          </button>
        </div>
      </div>
    </>
  )
}

export default DeleteUserModal
