 
import FooterTwo from '../../layouts/footers/FooterTwo'
import HeaderThree from '../../layouts/headers/HeaderThree'
import Wrapper from '../../layouts/Wrapper'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree' 
import BlogDetailsArea from './BlogDetailsArea'

export default function BlogDetails() {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumnd title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  )
}
