import ProjectsList from "./ProjectsList";

const list = [
    {
        title: 'Agency Portfolio',
        company: 'BIG [Brand Innovation Group]',
        url: 'https://www.gotobig.com/',
        image: '/images/projects/big-meta.jpeg',
        desc: '',
    },
    {
        title: 'Partnership Website',
        company: 'The Lutheran Schools Partnership',
        url: 'https://www.thelutheranschools.org/',
        image: '/images/projects/tlsp-meta.jpg',
        desc: '',
    },
    {
        title: 'Breads to Live By.',
        company: 'Aunt Millie‘s',
        url: 'https://live.auntmillies.com/',
        image: '/images/projects/aml-meta.jpg',
        desc: '',
    },
    {
        title: 'Look Up',
        company: 'The Lutheran Foundation',
        url: 'https://lookupindiana.org/',
        image: '/images/projects/lookup-meta.jpg',
        desc: '',
    },
];

const Projects = () => {
    return (
        <div className="relative py-10 overflow-hidden lg:py-16">
            <div className="container">
                <h2 className="relative font-bold text-indigo-600 opacity-50 text-8xl lg:pl-16">Projects</h2>

                {/* Code */}
                <div className="mb-6 projects-wrap lg:mb-10">
                    <ProjectsList list={list} />
                </div>
            </div>
        </div>
    );
}

export default Projects;