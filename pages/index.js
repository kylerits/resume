import Head from 'next/head'
import Greeting from '../components/Greeting'
import Intro from '../components/Intro'
import Experience from '../components/Experience'
import Tech from '../components/Tech'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import PageNav from '../components/PageNav'

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
        <section id="greeting"><Greeting /></section>
        <section id="intro"><Intro /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="tech"><Tech /> </section>
        <section id="contact"><Contact /></section>

        {/* Footer */}
        <footer className="relative block">
          <div className="mx-auto prose-sm prose">
            <p className="text-center">All material &copy; Kyle Rodgers 2021</p>
          </div>
        </footer>
      </main>
      <PageNav />
    </>
  );
}
