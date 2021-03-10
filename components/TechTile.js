import TechList from "./TechList";
import dynamic from 'next/dynamic';

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
        <>
            <div className="p-8 overflow-hidden bg-white shadow-lg tech-panel rounded-xl bg-opacity-60 bg-blur">
                {/* Backdrop */}
                <div className="absolute inset-0 flex items-end justify-center opacity-10 backdrop">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-indigo-600 transform scale-125 -translate-x-24"><path fill="currentColor" d="M0,256L60,224C120,192,240,128,360,112C480,96,600,128,720,138.7C840,149,960,139,1080,112C1200,85,1320,43,1380,21.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                
                <div className="relative">

                    {/* Code List */}
                    <TechList intro={'Code'} list={langList} />

                    {/* Platform List */}
                    <TechList intro={'Platforms'} list={platList} />

                </div>
                
            </div>
        </>
    );
}

export default TechTile;