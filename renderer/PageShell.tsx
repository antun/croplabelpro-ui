import React from 'react'
import logo from './logo.svg'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.css'
import { Link } from './Link'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          {children}
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header>
        <h1 style={{color: '#ffffff', margin: '10px'}}>CropLabel Pro</h1>
      </Header>
      <div style={{height: 'calc(100vh - 60px)'}}>
        {children}
      </div>
    </div>
  )
}

function Header({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: '#000000',
        height: 60,
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  )
}
