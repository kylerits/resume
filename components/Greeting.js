import Image from 'next/image';
// import { Parallax, Background } from 'react-parallax';
import Tooltip from './Tooltip';

const Greeting = () => {
    return ( 
        <div className="relative">
            <div className="container relative py-10 lg:py-16">
                <div className="flex flex-wrap items-center justify-center" style={{ minHeight: '40vh' }}>
                    <div className="relative w-full">
                        <div className="relative max-w-2xl mx-auto">
                            {/* Image Tiles */}
                            <div className="absolute top-0 left-0 block w-40 h-40 " style={{ transform: 'translate(-20%, -70%)' }}>
                                <div className="absolute inset-0 rounded-lg shadow-image"><Image src="/images/winter.png" layout="fill" alt="Winter" /></div>
                                <div className="relative w-full h-full overflow-hidden rounded-lg ring-8 ring-indigo-600">
                                    <Image src="/images/winter.png" alt="Winter" layout="fill" />
                                </div>
                            </div>
                            <div className="absolute top-0 block w-48 h-48 overflow-hidden rounded-lg shadow-lg ring-8 ring-indigo-600 left-1/2" style={{ transform: 'translate(50px, -150px)' }}>
                                <Image src="/images/kayak.png" alt="Kayak" layout="fill" />
                            </div>
                            <div className="absolute bottom-0 right-0 block w-48 h-48 overflow-hidden rounded-lg shadow-lg ring-8 ring-indigo-600" style={{ transform: 'translate(70%, 40%)' }}>
                                <Image src="/images/newt.png" alt="Newt" layout="fill" />
                            </div>
                            {/* Content Tile */}
                            <div className="relative max-w-2xl p-10 mx-auto bg-white shadow-xl bg-opacity-80 rounded-2xl bg-blur">
                                <Tooltip content={"“General Kinobe!”"} direction='right'><h1 className="pb-2"><span className="font-bold text-7xl">Hello there.</span></h1></Tooltip>
                                <div className="prose">
                                    <p className="lead">My name is Kyle Rodgers. I have a passion for creating dynamic user experiences on the web.</p>
                                </div>
                            </div>
                            {/* Image Tiles */}
                            <div className="absolute bottom-0 left-0 block w-48 h-48 overflow-hidden rounded-lg shadow-2xl ring-8 ring-indigo-600" style={{ transform: 'translate(-90%,70%)' }}>
                                <Image src="/images/Kyle-Profile.jpg" alt="Kyle" layout="fill" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Greeting;