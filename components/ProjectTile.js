import Image from 'next/image';

const ProjectTile = (props) => {
    const {title, company, url, image, desc} = props.details;
    return (
        <div className="relative max-w-sm pb-4 pr-4 tile-wrap lg:pr-8 lg:pb-8">
            <div className="relative">
                {image.length > 0 ? <><div className="absolute inset-0 rounded-lg shadow-image"><Image src={image} layout="fill" className="object-cover w-full h-full" alt={title} /></div></> : null }
                <a href={url} className="relative block overflow-hidden text-gray-100 duration-300 transform translate-y-0 job-tile rounded-xl bg-opacity-60 bg-blur project-tile hover:-translate-y-2" target="_blank" rel="noreferrer">
                    {image.length > 0 ? <><div className="absolute inset-0"><Image src={image} layout="fill" className="object-cover w-full h-full" alt={title} /></div><div className="absolute inset-0 bg-gradient-overlay"></div></> : null}
                    <div className="relative flex items-end p-8 lg:w-80 lg:h-72">
                        <div className="relative block w-full">
                            <h3 className="text-2xl font-bold leading-none">{title}</h3>
                            <p className="font-serif text-sm text-gray-300"><span>{company}</span></p>
                            {/* <p className="font-serif">{desc}</p> */}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ProjectTile;