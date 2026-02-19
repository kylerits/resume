import {Reveal, Tween} from 'react-gsap';
const JobTile = (props) => {
    const {title, company, companyUrl, timeStart, timeEnd, location, description} = props.details;
    return (
        <Reveal>
            <Tween
                from={{ opacity: 0, scale: 0.8, }}
                duration={0.3}
                delay={0.1*props.index}
                ease="back.out(1.2)"
            >
                <div className="max-w-sm pb-4 pr-4 tile-wrap lg:pr-8 lg:pb-8">
                    <div className="p-8 bg-white shadow-lg job-tile rounded-xl bg-opacity-60 bg-blur">
                        <h3 className="text-2xl font-bold leading-none">{title}</h3>
                        <p className="mb-5 text-sm text-gray-500"><a href={companyUrl} target="_blank" rel="noreferrer">{company}</a> • {location}</p>
                        <p className="mb-5 text-sm italic text-gray-500">{timeStart}–{timeEnd}</p>
                        <p className="font-serif">{description}</p>
                    </div>
                </div>
            </Tween>
        </Reveal>
    );
}

export default JobTile;