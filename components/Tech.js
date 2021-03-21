import TechTile from "./TechTile"

const Tech = () => {
    return (
        <div className="relative py-10 overflow-hidden lg:py-16">
            <div className="container">
                <h2 className="relative font-bold text-green-600 opacity-50 text-8xl lg:pl-16">Technology</h2>

                {/* Code */}
                <div className="mb-6 tech-wrap lg:mb-10">
                    <TechTile />
                </div>

            </div>
        </div>
    );
}

export default Tech;