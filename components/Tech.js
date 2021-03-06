import TechTile from "./TechTile"

const langList = [
    {
        title: 'JavaScript ES6+',
    },
    {
        title: 'Vue',
    },
    {
        title: 'React',
    },
    {
        title: 'Alpine.js',
    },
    {
        title: 'Node.js',
    },
    {
        title: 'Express.js',
    },
    {
        title: 'Webpack',
    },
    {
        title: 'CSS',
    },
    {
        title: 'Sass',
    },
];

const platList = [];

const Tech = () => {
    return (
        <section id="tech" className="relative">
            <div className="container">
                <h2 className="relative font-bold text-red-600 opacity-50 text-8xl lg:pl-16">Technology</h2>

                {/* Code */}
                <div className="mb-6 tech-wrap lg:mb-10">
                    <TechTile intro={"Code"} list={langList} />
                </div>
                {/* Platforms */}
                <div className="mb-6 tech-wrap lg:mb-10">
                    <TechTile intro={"Platforms"} list={platList} />
                </div>

            </div>
        </section>
    );
}

export default Tech;