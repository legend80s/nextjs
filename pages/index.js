import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<div>
    <div className={styles.container2}>
      1. 正常
      <div className={styles['number-input-container']}>
        <div className={styles['currency-symbol']}>¥</div>

        <div className={styles['number-input-value-container']}>
          <div className={styles['number-input-value']}>23</div>
          <div className={`${styles['number-input-container-cursor']} ${styles['animation']}`}></div>
        </div>
      </div>

      2. 去除 animation

      <div className={styles['number-input-container']}>
        <div className={styles['currency-symbol']}>¥</div>

        <div className={styles['number-input-value-container']}>
          <div className={styles['number-input-value']}>23</div>
          <div className={styles['number-input-container-cursor']}></div>
        </div>
      </div>

      3. 去除 step-start

      <div className={styles['number-input-container']}>
        <div className={styles['currency-symbol']}>¥</div>

        <div className={styles['number-input-value-container']}>
          <div className={styles['number-input-value']}>23</div>
          <div className={`${styles['number-input-container-cursor']} ${styles['animation-no-step-start']}`}></div>
        </div>
      </div>

      <textarea name="" id="" cols="80" rows="37" readOnly value={
`
.number-input-container-cursor {
  content: '';
  position: relative;
  display: inline-block;
  top: 2px;
  width: 2px;
  height: 100%;
  border-radius: 1px;
  background-color: #1677ff;
  animation: numberInputCursor 1s step-start infinite;
  vertical-align: middle;
}

@keyframes numberInputCursor {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

<div class="number-input-container">
  <div class="currency-symbol">¥</div>

  <div class="number-input-value-container">
    <div class="number-input-value">23</div>
    <div class="number-input-container-cursor"></div>
  </div>
</div>
`
      }>
      </textarea>
    </div>
  
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
    </div>)
}
