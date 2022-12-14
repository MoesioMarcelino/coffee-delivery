import { ReactNode } from 'react'

import { CartProvider } from './Cart'
import { ModalProvider } from './Modal'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ModalProvider>
      <CartProvider>{children}</CartProvider>
    </ModalProvider>
  )
}
