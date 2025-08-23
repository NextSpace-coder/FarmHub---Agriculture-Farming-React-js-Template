 
import FooterTwo from '../../layouts/footers/FooterTwo'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree' 
import GalleryArea from './GalleryArea'

export default function Gallery() {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumnd title="Gallery" subtitle="Gallery" />
      <GalleryArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  )
}
