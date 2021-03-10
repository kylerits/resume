import Head from 'next/head'
import Greeting from '../components/Greeting'
import Intro from '../components/Intro'
import Experience from '../components/Experience'
import Tech from '../components/Tech'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyle Rodgers | Frontend Enthusiast</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin:400,500,600,700&display=swap"/>
        <link
            rel="preload"
            href="/fonts/EBGaramond/EBGaramond-VariableFont_wght.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/EBGaramond/EBGaramond-Italic-VariableFont_wght.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>
      <main id="pageWrap" className="pb-12">
        <Greeting />
        <Intro />
        <Experience />
        <Projects />
        <Tech />
        <Contact />
      </main>
    </>
  );
}
