import React, { Fragment } from "react"
import FocusableTextInput from '../../components/fields/FocusableTextInput'
import Head from 'next/head'


const FocusableInput = () => (
    <div className="container">
      <Head>
        <title>Frontend Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
       </link>
      </Head>

      <main className="text-center">
        <FocusableTextInput />

        <a href="/" className="btn btn-outline-secondary m-3 mt-5" role="button" aria-pressed="true">Back Home</a>
      </main>

      <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    </div>
  )

  export default FocusableInput