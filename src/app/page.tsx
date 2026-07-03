import Layout from '@components/shared/Layout'
import Hero from '@components/sections/Hero'
import Impact from '@components/sections/Impact'
import TrustedBy from '@components/sections/TrustedBy'
import WhatWeDo from '@components/sections/WhatWeDo'
import FeaturedEvent from '@components/sections/FeaturedEvent'
import Highlights from '@components/sections/Highlights'
import Stories from '@components/sections/Stories'
import HallOfFame from '@components/sections/HallOfFame'
import CommunitySnapshot from '@components/sections/CommunitySnapshot'
import PartnerEcosystem from '@components/sections/PartnerEcosystem'
import CTA from '@components/sections/CTA'

export const metadata = {
  title: 'CodeQuesters - Building the Next Generation of Builders',
  description: 'Join a community of builders learning, competing, and growing together through hackathons, workshops, and real-world opportunities.',
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Impact />
      <TrustedBy />
      <WhatWeDo />
      <FeaturedEvent />
      <Highlights />
      <Stories />
      <HallOfFame />
      <CommunitySnapshot />
      <PartnerEcosystem />
      <CTA />
    </Layout>
  )
}
