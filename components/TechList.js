import Image from 'next/image';
import Tooltip from './Tooltip';

const TechList = (props) => {
    return (
        <div className="relative tech-inner">
            <h3 className="relative mb-8 text-base italic font-bold tracking-wider text-indigo-600 tech-intro"><span className="relative inline-block pb-1">{props.intro}</span><span className="absolute bottom-0 left-0 inline-block w-56 border-b-2 border-indigo-600"></span></h3>
            <ul className="relative block">
                {Object.keys(props.list).map(key => {
                    const item = props.list[key];
                    return (
                        <li key={key} className="inline-flex items-center justify-center p-4 mb-6 mr-6 bg-white border border-indigo-300 shadow-sm rounded-xl">
                            <Tooltip content={item.title} direction="bottom">
                                <Image src={item.iconPath ? item.iconPath : '/icons/empty.svg'} alt={item.title} width={70} height={70} className="block opacity-80" />
                            </Tooltip>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TechList;