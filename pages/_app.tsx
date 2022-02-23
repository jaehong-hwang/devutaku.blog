import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head'
import styles from '../styles/common.module.css'
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>DEVUTAKU - 개발 블로그</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<header className={styles.headerWrap}>
					<h1>devutaku</h1>
					<p>기술 블로그</p>
				</header>

				<Component {...pageProps} />

				<footer className={styles.footer}>
					<a href="https://github.com/jaehong-hwang" target="_blank" className={styles.copyright}>
						Powered by{' '} @devutakus
					</a>
				</footer>
			</main>
		</>
	);
};

export default App;
