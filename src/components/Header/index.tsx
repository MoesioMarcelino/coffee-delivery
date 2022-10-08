import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import coffeeDeliveryLogo from '../../assets/coffe-delivery.svg'

import {
  ActionsContainer,
  BadgeValue,
  Container,
  LocationContainer,
  ShoppingCartContainer,
} from './styles'

export function Header() {
  return (
    <Container>
      <NavLink to="/">
        <img
          src={coffeeDeliveryLogo}
          alt="Copo de café mais a escrita 'Coffe Delivery'"
        />
      </NavLink>

      <ActionsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationContainer>

        <NavLink to="/cart">
          <ShoppingCartContainer>
            <ShoppingCart size={22} weight="fill" />
            <BadgeValue>5</BadgeValue>
          </ShoppingCartContainer>
        </NavLink>
      </ActionsContainer>
    </Container>
  )
}
