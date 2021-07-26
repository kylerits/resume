import {Reveal, Tween} from 'react-gsap';
import TechList from "./TechList";

const langList = [
    {
        title: 'JavaScript ES6+',
        iconPath: '/icons/js-square.svg',
    },
    {
        title: 'Vue',
        iconPath: '/icons/vue.svg',
    },
    {
        title: 'React',
        iconPath: '/icons/react.svg',
    },
    {
        title: 'Alpine.js',
        iconPath: '/icons/alpine.svg',
    },
    {
        title: 'Node.js',
        iconPath: '/icons/node.svg',
    },
    {
        title: 'Express.js',
        iconPath: '/icons/express.svg',
    },
    {
        title: 'Webpack',
        iconPath: '/icons/webpack.svg',
    },
    {
        title: 'CSS',
        iconPath: '/icons/css.svg',
    },
    {
        title: 'Sass',
        iconPath: '/icons/sass.svg',
    },
];

const platList = [
    {
        title: 'Nuxt.js',
        iconPath: '/icons/nuxt.svg',
    },
    {
        title: 'Next.js',
        iconPath: '/icons/next.svg',
    },
    {
        title: 'Craft CMS',
        iconPath: '/icons/craft.svg',
    },
    {
        title: 'WordPress',
        iconPath: '/icons/wordpress.svg',
    },
    {
        title: 'Strapi',
        iconPath: '/icons/strapi.svg',
    },
    {
        title: 'Statamic',
        iconPath: '/icons/statamic.svg',
    },
    {
        title: 'Shopify',
        iconPath: '/icons/shopify.svg',
    },
    {
        title: 'Netlify',
        iconPath: '/icons/netlify.svg',
    },
    {
        title: 'Heroku',
        iconPath: '/icons/heroku.svg',
    },
    {
        title: 'DigitalOcean',
        iconPath: '/icons/digitalocean.svg',
    },
];


const TechTile = () => {
    return (
        <Reveal threshold={0.1}>
            <Tween
                from={{ opacity: 0.1, scale: 0.8, }}
                duration={0.3}
                delay={0.1}
                ease="back.out(1.2)"
            >
                <div className="p-8 overflow-hidden bg-white shadow-lg tech-panel rounded-xl bg-opacity-60 bg-blur">
                    {/* Backdrop */}
                    <div className="absolute inset-0 flex items-end justify-center opacity-10 backdrop">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-indigo-600 transform scale-125 -translate-x-24"><path fill="currentColor" d="M0,256L60,224C120,192,240,128,360,112C480,96,600,128,720,138.7C840,149,960,139,1080,112C1200,85,1320,43,1380,21.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
                        <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" className="text-indigo-600 transform scale-125 -translate-x-24"><path d="M0 366L30 369.5C60 373 120 380 180 394.3C240 408.7 300 430.3 360 451.8C420 473.3 480 494.7 540 486.7C600 478.7 660 441.3 720 428C780 414.7 840 425.3 870 430.7L900 436L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z" fill="currentColor" strokeLinecap="round" strokeLinejoin="miter"></path></svg>
                    </div>
                    
                    <div className="relative">

                        {/* Code List */}
                        <TechList intro={'Code'} list={langList} />

                        {/* Platform List */}
                        <TechList intro={'Platforms'} list={platList} />

                    </div>
                    
                </div>
            </Tween>
        </Reveal>
    );
}

export default TechTile;