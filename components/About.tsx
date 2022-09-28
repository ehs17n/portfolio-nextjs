import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { Dispatch } from 'react';
import Header from './Header';

type AboutProps = {
  lang: LangState;
  setLang: Dispatch<LangState>;
  // import reactIcon from '@iconify/icons-logos/react';
};
enum LangState {
  en,
  fa,
}

const About: React.FC<AboutProps> = ({ lang, setLang }) => {
  return (
    <section
      id='about'
      className='flex flex-col h-[100vh] justify-between bg-[rgba(233,213,161,1)]'
    >
      <Header />

      <h1 className='text-center p-7 mx-10 font-sans  text-lg '>ABOUT ME</h1>

      <div className='flex items-center justify-around  flex-wrap '>
        <div className='items-center p-10 shadow-custom font-semibold'>
          <Image src='/images/profilepic.jpg' width='200px' height='200px' />
        </div>

        <div>
          <div className='card |  max-w-[700px]  '>
            <div
              className='card-header | border border-[rgb(223,223,223)] flex h-[40px] items-center  w-full 
             bg-[rgba(0,0,0,.08)]'
            >
              <span className='w-3 h-3 bg-blue-500 rounded-full  border border-blue-300 ml-4 '></span>
              <span className='w-3 h-3 bg-blue-500 rounded-full  border border-blue-300 ml-4 '></span>
              <span className='w-3 h-3 bg-blue-500 rounded-full  border border-blue-300 ml-4 '></span>
            </div>
            <div
              className='card-body |  text-justify  border border-[rgb(223,223,223)] p-6 w-full'
              style={{
                height: 'auto',
                fontSize: '132%',
                lineHeight: '200%',
              }}
            >
              <span className='wave '>hello :) </span>

              <br />
              <br />
              <p className='text-sm'>
                👋 Im Davina Griss. Fictional person for preview purposes :) Im
                working with newest front-end frameworks like Angular, React and
                Vue. What you are seeing now is portfolio template from
                Dorota1997. If you like this portfolio template, make sure to ⭐
                the repository to make it more recognizable for other users.
                Thank you 💜
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='self-center'>
        <button onClick={() => setLang(LangState.fa)}>Fa</button>
        <button onClick={() => setLang(LangState.en)}>En</button>
      </div>
      <p>{lang}</p>
    </section>
  );
};
export default About;
