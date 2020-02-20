import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Frontend Test</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
     </link>
    </Head>
    

    <main className="text-center">
      <h1 className="text-secondary text-center">
      Fernando Benavides Rodriguez
      </h1>

      <h3 className="text-secondary text-center">
        Frontend Test
      </h3>

      <a href="/focusable-input" className="btn btn-outline-secondary m-3 mt-5" role="button" aria-pressed="true">Focusable Input</a>

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

      a {
        color: inherit;
        text-decoration: none;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
