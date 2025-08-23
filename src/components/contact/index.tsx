 
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree' 
import ContactHomeTwo from '../homes/home-2/ContactHomeTwo'
import GoogleMap from './GoogleMap'
import ContactInfo from './ContactInfo'
import Wrapper from '../../layouts/Wrapper'
import HeaderThree from '../../layouts/headers/HeaderThree'
import FooterTwo from '../../layouts/footers/FooterTwo'

export default function Contact() {
  return (
    <Wrapper>
      <HeaderThree />
      <Breadcrumnd title="Contact" subtitle="Contact" />
      <ContactHomeTwo />
      <GoogleMap />
      <ContactInfo />
      <SubscribeHomeThree />
      <FooterTwo />
    </Wrapper>
  )
}
