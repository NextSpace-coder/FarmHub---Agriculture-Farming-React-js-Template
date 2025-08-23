 
import FooterTwo from '../../layouts/footers/FooterTwo'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree' 
import GalleryDetailsArea from './GalleryDetailsArea'

export default function GalleryDetails() {
  return (
    <Wrapper>
    <HeaderThree />
    <Breadcrumnd title="Gallery Details" subtitle="Gallery Details" />
    <GalleryDetailsArea />
    <SubscribeHomeThree />
    <FooterTwo />
    </Wrapper>
  )
}
