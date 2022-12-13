import { itemsMenu } from '../../content/menu'
import { Banner, MenuItem } from './components'

import { Container, MenuContainer, Title, ItemsContainer } from './styles'

export function Home() {
  return (
    <Container>
      <Banner />

      <MenuContainer>
        <Title>Nossos cafés</Title>

        <ItemsContainer>
          {itemsMenu.map((item) => (
            <MenuItem key={`coffee-option-${item.id}`} {...item} />
          ))}
        </ItemsContainer>
      </MenuContainer>
    </Container>
  )
}
