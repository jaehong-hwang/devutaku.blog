import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head'
import styles from '../styles/footer.module.css'
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>DEVUTAKU - 개발 블로그</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

      <Component {...pageProps} />

			<footer>
				<a href="https://github.com/jaehong-hwang" target="_blank" className={styles.copyright}>
					Powered by{' '} @devutakus
				</a>
			</footer>
		</>
	);
};

export default App;
