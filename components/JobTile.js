const JobTile = (props) => {
    const {title, company, companyUrl, timeStart, timeEnd, location, description} = props.details;
    return (
        <div className="tile-wrap pr-4 lg:pr-8 pb-4 lg:pb-8 max-w-sm">
            <div className="job-tile bg-white p-8 rounded-xl shadow-lg bg-opacity-60 bg-blur">
                <h3 className="text-2xl font-bold leading-none">{title}</h3>
                <p className="text-sm mb-5 text-gray-500"><a href={companyUrl} target="_blank" rel="noreferrer">{company}</a> • {location}</p>
                <p className="text-sm italic mb-5 text-gray-500">{timeStart}–{timeEnd}</p>
                <p className="font-serif">{description}</p>
            </div>
        </div>
    );
}

export default JobTile;