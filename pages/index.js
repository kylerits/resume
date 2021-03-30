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
        <title>Kyle Rodgers | Frontend Web Enthusiast</title>

        <meta data-n-head="ssr" data-hid="description" name="description" content="I have a passion for creating dynamic user experiences on the web for local entrepreneurs and small businesses."></meta>
        <meta data-n-head="ssr" property="og:title" content="A Fort Wayne based Web Developer | Kyle Rodgers"></meta>
        <meta data-n-head="ssr" property="og:type" content="website"></meta>
        <meta data-n-head="ssr" property="og:url" content="https://krresume.netlify.app"></meta>
        <meta data-n-head="ssr" property="og:image" content="https://kylerodgers.me/images/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.jpg"></meta>
        <meta data-n-head="ssr" property="og:description" content="I have a passion for creating dynamic user experiences on the web."></meta>
        <meta data-n-head="ssr" name="twitter:card" content="summary"></meta>
        <meta data-n-head="ssr" name="twitter:site" content="https://krresume.netlify.app"></meta>
        <meta data-n-head="ssr" name="twitter:title" content="A Fort Wayne based Web Developer | Kyle Rodgers"></meta>
        <meta data-n-head="ssr" name="twitter:description" content="I have a passion for creating dynamic user experiences on the web."></meta>
        <meta data-n-head="ssr" name="twitter:creator" content="@kyle_rits"></meta>
        <meta data-n-head="ssr" name="twitter:image:src" content="https://kylerodgers.me/images/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.jpg"></meta>
        <meta data-n-head="ssr" name="msapplication-TileColor" content="#6b9686"></meta>
        <meta data-n-head="ssr" name="theme-color" content="#edf6f8"></meta>
        <meta data-n-head="ssr" data-hid="charset" charset="utf-8"></meta>
        <meta data-n-head="ssr" data-hid="mobile-web-app-capable" name="mobile-web-app-capable" content="yes"></meta>
        <meta data-n-head="ssr" data-hid="apple-mobile-web-app-title" name="apple-mobile-web-app-title" content="Kyle Rodgers | Resume"></meta>

        <link data-n-head="ssr" rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <link data-n-head="ssr" rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"></link>
        <link data-n-head="ssr" rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"></link>
        <link data-n-head="ssr" rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"></link>
        <link data-n-head="ssr" rel="mask-icon" href="/favicons/safari-pinned-tab.svg" colors="#6b9686"></link>

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
      <main id="pageWrap" className="relative pb-12">
        <section id="greeting" className="relative"><Greeting /></section>
        <section id="intro" className="relative"><Intro /></section>
        <section id="projects" className="relative"><Projects /></section>
        <section id="experience" className="relative"><Experience /></section>
        <section id="tech" className="relative"><Tech /> </section>
        <section id="contact" className="relative"><Contact /></section>

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
