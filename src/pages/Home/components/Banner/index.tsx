import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import bannerBackgroundImg from '../../../../assets/banner-background.png'
import mainCoffeeImg from '../../../../assets/main-image-coffee.png'

import { texts } from '../../../../core'

import {
  Container,
  Content,
  Title,
  Subtitle,
  Reasons,
  Reason,
  Icon,
} from './styles'

const TEXTS = texts.banner

export function Banner() {
  return (
    <Container background={bannerBackgroundImg}>
      <Content>
        <Title>{TEXTS.title}</Title>
        <Subtitle>{TEXTS.subtitle}</Subtitle>
        <Reasons>
          <Reason>
            <Icon variant="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </Icon>
            {TEXTS.reasons[1]}
          </Reason>
          <Reason>
            <Icon variant="base-text">
              <Package size={16} weight="fill" />
            </Icon>
            {TEXTS.reasons[2]}
          </Reason>
          <Reason>
            <Icon variant="yellow">
              <Timer size={16} weight="fill" />
            </Icon>
            {TEXTS.reasons[3]}
          </Reason>
          <Reason>
            <Icon variant="purple">
              <Coffee size={16} weight="fill" />
            </Icon>
            {TEXTS.reasons[4]}
          </Reason>
        </Reasons>
      </Content>
      <img src={mainCoffeeImg} alt={TEXTS.altTexts[1]} width={476} />
    </Container>
  )
}
