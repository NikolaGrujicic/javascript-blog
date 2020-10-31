import React from 'react'
import { Heading } from 'theme-ui'
import Divider from '@components/Divider'

/**
 * Shadow me to add your own content
 */

const styles = {
  heading: {
    background: (t) => `
      linear-gradient(
        45deg,
        ${t.colors.alpha} 32.5%,
        ${t.colors.betaDark} 50.5%)
    `,
    color: `beta`,
    WebkitBackgroundClip: `text`,
    WebkitTextFillColor: `transparent`,
    fontWeight: `bold`,
  },
  running: {
    color: `omegaDark`,
    fontWeight: `normal`,
    maxWidth: [`full`, `full`, `2/3`],
  },
}

export default () => (
  <>
    <Divider space={3} />
    <Heading variant='h1' sx={styles.heading}>
      Learn new skills from
      <br />
      The best React experts on the web
    </Heading>
    <Divider space={3} />
    <Heading variant='h3' sx={styles.running}>
      Why Learn ReactJS? <br />
      ReactJS presents graceful solutions to some of front-end programming’s most persistent issues. 
      It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing. 
      There’s never been a better time to learn React.
    </Heading>
  </>
)
