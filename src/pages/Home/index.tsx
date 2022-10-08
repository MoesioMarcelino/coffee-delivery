import { Banner, MenuItem } from './components'
import { itemMenu } from './menu'

import { Container, MenuContainer, Title, ItemsContainer } from './styles'

export function Home() {
  return (
    <Container>
      <Banner />

      <MenuContainer>
        <Title>Nossos cafés</Title>

        <ItemsContainer>
          {itemMenu.map((item) => (
            <MenuItem key={`coffee-option-${item.id}`} {...item} />
          ))}
        </ItemsContainer>
      </MenuContainer>
    </Container>
  )
}
