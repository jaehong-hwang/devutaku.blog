import styles from '../styles/common.module.css'

export default () => {
	const githubURL = 'https://github.com/jaehong-hwang'

  return (
    <footer className={styles.footer}>
      <a href={githubURL} target="_blank" className={styles.copyright}>
        Powered by{' '} @devutakus
      </a>
    </footer>
  )
}