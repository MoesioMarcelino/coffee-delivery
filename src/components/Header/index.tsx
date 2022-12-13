import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import coffeeDeliveryLogo from '../../assets/coffe-delivery.svg'
import { useCart } from '../../hooks/Cart'
import { Tooltip } from '../Tooltip'

import {
  ActionsContainer,
  BadgeValue,
  Container,
  LocationContainer,
  ShoppingCartContainer,
} from './styles'

export function Header() {
  const { total } = useCart()

  return (
    <Container>
      <NavLink to="/">
        <img
          src={coffeeDeliveryLogo}
          alt="Copo de café mais a escrita 'Coffe Delivery'"
        />
      </NavLink>

      <ActionsContainer>
        <Tooltip title="Porto Alegre, RS">
          <LocationContainer>
            <MapPin size={22} weight="fill" />
            <div>Porto Alegre, RS</div>
          </LocationContainer>
        </Tooltip>

        <NavLink to="/cart">
          <ShoppingCartContainer>
            <ShoppingCart size={22} weight="fill" />
            {total > 0 && <BadgeValue>{total}</BadgeValue>}
          </ShoppingCartContainer>
        </NavLink>
      </ActionsContainer>
    </Container>
  )
}
