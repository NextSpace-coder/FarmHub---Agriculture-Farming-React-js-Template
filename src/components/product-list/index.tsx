 
 
import Breadcrumnd from '../common/Breadcrumnd'
import ProductListArea from './ProductListArea'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree' 
import Wrapper from '../../layouts/Wrapper'
import HeaderThree from '../../layouts/headers/HeaderThree'
import FooterTwo from '../../layouts/footers/FooterTwo'

export default function ProductList() {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumnd title="Product List" subtitle="Product List" />
      <ProductListArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  )
}
