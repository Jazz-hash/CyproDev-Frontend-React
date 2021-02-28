import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Banner from '../components/Banner'

const IndexPage = () => (
  <IndexLayout>
    <Page>
        <Banner title="We Are Awesome" subtitle="Agency" />
      <Container>
        {/* <h1>Hi people</h1> */}
        {/* <p>Welcome to your new Gatsby site.</p> */}
        {/* <p>Now go build something great.</p> */}
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
