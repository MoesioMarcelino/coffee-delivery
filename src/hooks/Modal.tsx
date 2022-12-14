/* eslint-disable no-undef */
import { createContext, ReactNode, useContext, useState } from 'react'
import { Modal } from '../components/Modal'

interface ModalHookProps {
  showModal: boolean
  updateModalStatus: (show: boolean) => void
  updateModalContent: (content: JSX.Element) => void
}

interface ModalProviderProps {
  children: ReactNode
}

const ModalContext = createContext<ModalHookProps>({} as ModalHookProps)

function ModalProvider({ children }: ModalProviderProps) {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>)

  function updateModalStatus(show: boolean) {
    setShowModal(show)
  }

  function updateModalContent(content: JSX.Element) {
    setModalContent(content)
  }

  return (
    <ModalContext.Provider
      value={{ showModal, updateModalStatus, updateModalContent }}
    >
      {showModal && <Modal>{modalContent}</Modal>}
      {children}
    </ModalContext.Provider>
  )
}

function useModal(): ModalHookProps {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModal must be used with ModalProvider')
  }

  return context
}

export { ModalProvider, useModal }
