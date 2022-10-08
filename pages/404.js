import React from 'react'
import Layout from './layout'
import Link from 'next/link'
import Head from 'next/head'

const custom404 = () => {
  return (
    <>
    <Head>
        <title>404</title>
    </Head>
    <Layout>
    <div>404</div>
    </Layout>
    </>
  )
}

export default custom404