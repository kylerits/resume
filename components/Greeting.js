import Image from 'next/image';
import { Parallax } from 'react-parallax';
import Tooltip from './Tooltip';

const Greeting = () => {
    return ( 
        <div className="relative overflow-hidden">
            {/* <div className="absolute inset-0 bg-green-600 opacity-50 background">
                <Image src={'/images/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.jpg'} alt={'pine forest'} width={1920} height={1080} className="relative block object-cover object-center w-full h-full" />
            </div> */}
            <Parallax bgImage="/images/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.jpg" strength={300}>    
                <div className="absolute bottom-0 right-0 w-full overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-green-600 transform scale-125 -translate-x-24"><path fill="currentColor" d="M0,256L60,224C120,192,240,128,360,112C480,96,600,128,720,138.7C840,149,960,139,1080,112C1200,85,1320,43,1380,21.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div className="absolute bottom-0 right-0 w-full overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gray-50"><path fill="currentColor" d="M0,256L60,224C120,192,240,128,360,112C480,96,600,128,720,138.7C840,149,960,139,1080,112C1200,85,1320,43,1380,21.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div className="container relative py-10 lg:py-16">
                    <div className="flex flex-wrap items-center justify-center" style={{ minHeight: '60vh' }}>
                        <div className="w-full">
                            <div className="max-w-2xl p-10 mx-auto bg-white shadow-2xl bg-opacity-80 rounded-2xl bg-blur">
                                <Tooltip content={"“General Kinobe!”"} direction='right'><h1 className="pb-2"><span className="font-bold text-7xl">Hello there.</span></h1></Tooltip>
                                <div className="prose">
                                    <p className="lead">My name is Kyle Rodgers. I have a passion for creating dynamic user experiences on the web.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
}

export default Greeting;