import styles from 'styles/common.module.css'

export default () => {
  return (
    <header className={styles.headerWrap}>
      <div className="header">
        <h1 className={styles.logo}><a href="/">devutaku</a></h1>
        <p className={styles.logoDescription}>
          이모지모 개발 블로그 - written by <a href="/info" target="_blank"><span className={styles.badge}>@jaehong-hwang</span></a>
        </p>
      </div>
    </header>
  )
}