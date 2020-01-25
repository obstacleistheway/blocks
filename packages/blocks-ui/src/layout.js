/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import { Global } from '@emotion/core'

import Header from './header'

export default ({ children }) => {
  return (
    <Styled.root>
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box'
          },
          'html, body': {
            margin: 0,
            padding: 0
          }
        }}
      />
      <div
        css={{
          display: 'grid',
          gridTemplateRows: 'auto 1fr',
          minHeight: '100vh'
        }}
      >
        <Header />
        <main>{children}</main>
      </div>
    </Styled.root>
  )
}
