const TechTile = (props) => {
    return (
        <>
            <div className="p-8 overflow-hidden bg-white shadow-lg tech-panel rounded-xl bg-opacity-60 bg-blur">
                {/* Backdrop */}
                <div className="absolute inset-0 opacity-10 backdrop">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-red-600 transform scale-125 -translate-x-24"><path fill="currentColor" d="M0,256L60,224C120,192,240,128,360,112C480,96,600,128,720,138.7C840,149,960,139,1080,112C1200,85,1320,43,1380,21.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                {/* Content */}
                <div className="relative tech-inner">
                    <h3 className="relative mb-8 text-base italic font-bold tracking-wider text-red-600 tech-intro"><span className="relative inline-block pb-1">{props.intro}</span><span className="absolute bottom-0 left-0 inline-block w-56 border-b-2 border-red-600"></span></h3>
                    <ul className="relative block">
                        {Object.keys(props.list).map(key => {
                            const item = props.list[key];
                            return (
                                <li key={key} className="inline-block mb-6 mr-6">{item.title}</li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default TechTile;