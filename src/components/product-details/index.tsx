 
 
import FooterTwo from '../../layouts/footers/FooterTwo'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree' 
import ProductDetailsArea from './ProductDetailsArea'

export default function ProductDetails() {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumnd title="Product Details" subtitle="Product Details" />
      <ProductDetailsArea />       
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  )
}
