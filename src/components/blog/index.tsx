 
import FooterTwo from '../../layouts/footers/FooterTwo'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree' 
import BlogArea from './BlogArea'

export default function Blog() {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumnd title="Blog" subtitle="Blog" />
      <BlogArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  )
}
