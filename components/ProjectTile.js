import Image from 'next/image';

const ProjectTile = (props) => {
    const {title, company, image, desc} = props.details;
    return (
        <div className="max-w-sm pb-4 pr-4 tile-wrap lg:pr-8 lg:pb-8">
            <div className="p-8 bg-white shadow-lg job-tile rounded-xl bg-opacity-60 bg-blur">
                {image.length > 0 ? <Image src={image} width={600} height={314} className="h-auto max-w-full" alt={title} /> : null}
                <h3 className="text-2xl font-bold leading-none">{title}</h3>
                <p className="mb-5 text-sm text-gray-500"><span>{company}</span></p>
                <p className="font-serif">{desc}</p>
            </div>
        </div>
    );
}

export default ProjectTile;