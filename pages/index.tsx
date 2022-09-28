import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import About from '../components/About';
import Header from '../components/Header';

enum LangState {
  en,
  fa,
}

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [lang, setLang] = useState<LangState>(LangState.fa);

  if (!mounted) return null;
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <About lang={lang} setLang={setLang} />
    </div>
  );
};

export default Home;
