import styles from '../styles/common.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <section className={styles.contentWrap}>
        <div className={styles.content}>
          <img src="https://github.com/jaehong-hwang.png?size=460"/>
        </div>
      </section>
      <Footer />
    </div>
  )
}
