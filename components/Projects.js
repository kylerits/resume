import ProjectsList from "./ProjectsList";

const list = [
    {
        title: 'Village Pub',
        company: 'Freelance',
        url: 'https://village-pub.vercel.app/',
        image: 'villagePub',
        desc: 'Frontend cut of a larger eCommerce project.'
    },
    {
        title: 'Nice Sprites',
        company: 'built for fun',
        url: 'https://nice-sprites.vercel.app/',
        image: 'niceSprites',
        desc: 'React app to build and export svg pixel art.'
    },
    {
        title: 'Agency Portfolio',
        company: 'BIG [Brand Innovation Group]',
        url: 'https://www.gotobig.com/',
        image: 'bigMeta',
        desc: 'Portfolio to display a wide breadth of brand work.',
    },
    {
        title: 'Partnership Website',
        company: 'The Lutheran Schools Partnership',
        url: 'https://www.thelutheranschools.org/',
        image: 'tlspMeta',
        desc: 'Information hub for local schools.',
    },
    {
        title: 'Breads to Live By.',
        company: 'Aunt Millie‘s',
        url: 'https://live.auntmillies.com/',
        image: 'amlMeta',
        desc: 'Brand campaign website to promote a new product.',
    },
    {
        title: 'Look Up',
        company: 'The Lutheran Foundation',
        url: 'https://lookupindiana.org/',
        image: 'lookupMeta',
        desc: 'Marketing website and collaborative platform for regional social service providers.',
    },
];

const Projects = () => {
    return (
        <div className="relative py-10 overflow-hidden lg:py-16">
            <div className="container">
                <h2 className="relative text-5xl font-bold text-indigo-700 lg:text-8xl lg:pl-16">Projects</h2>

                {/* Code */}
                <div className="mb-6 projects-wrap lg:mb-10">
                    <ProjectsList list={list} />
                </div>
            </div>
        </div>
    );
}

export default Projects;