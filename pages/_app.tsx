import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head'
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>DEVUTAKU - 개발 블로그</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Component {...pageProps} />
			</main>
		</>
	);
};

export default App;
