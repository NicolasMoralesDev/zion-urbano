import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const custom404 = () => {
  return (
    <>
    <Head>
        <title>404</title>
    </Head>
    <Layout>
    <main>
    <div className="d-flex justify-content-center container-fluid ">
    <Image src='/404.png'  alt="Error 404" width={800} height={500}/>
    </div>
    </main>
    </Layout>
    </>
  )
}

export default custom404