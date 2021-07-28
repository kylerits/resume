import Image from 'next/image';
import { Reveal, Tween } from 'react-gsap';
// import { Parallax, Background } from 'react-parallax';
import Tooltip from './Tooltip';

// Images
import winter from '../public/images/winter.png';
import kayak from '../public/images/kayak.png';
import newt from '../public/images/newt.png';
import selfie from '../public/images/kyle-selfie.png';



const Greeting = () => {
    return ( 
        <div className="relative">
            <div className="container relative py-10 lg:py-16">
                <div className="flex flex-wrap items-center justify-center" style={{ minHeight: '40vh' }}>
                    <div className="relative w-full">
                        <div className="relative max-w-2xl mx-auto">
                            <Reveal>
                                {/* Image Tiles */}
                                <Tween
                                    from={{ opacity: 0, scale: 0.8, }}
                                    duration={0.3}
                                    delay={0.1}
                                    ease="back.out(1.2)"
                                >
                                    <div className="absolute top-0 left-0 hidden w-40 h-40 lg:block " style={{ transform: 'translate(-20%, -70%)' }}>
                                        <div className="absolute inset-0 rounded-lg shadow-image"><Image src={winter} layout="fill" alt="Winter" placeholder="blur" /></div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg ring-8 ring-indigo-600">
                                            <Image src={winter} alt="Winter" layout="fill" placeholder="blur" />
                                        </div>
                                    </div>
                                </Tween>
                                <Tween
                                    from={{ opacity: 0, scale: 0.8, }}
                                    duration={0.3}
                                    delay={0.15}
                                    ease="back.out(1.2)"
                                >
                                    <div className="absolute top-0 hidden w-48 h-48 lg:block left-1/2" style={{ transform: 'translate(50px, -130px)' }}>
                                        <div className="absolute inset-0 rounded-lg shadow-image"><Image src={kayak} layout="fill" alt="Kayak" /></div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg ring-8 ring-indigo-600">
                                            <Image src={kayak} alt="Kayak" layout="fill" placeholder="blur" />
                                        </div>
                                    </div>
                                </Tween>
                                <Tween
                                    from={{ opacity: 0, scale: 0.8, }}
                                    duration={0.3}
                                    delay={0.2}
                                    ease="back.out(1.2)"
                                >
                                    <div className="absolute bottom-0 right-0 hidden w-48 h-48 lg:block" style={{ transform: 'translate(70%, 40%)' }}>
                                        <div className="absolute inset-0 rounded-lg shadow-image"><Image src={newt} layout="fill" alt="Newt" placeholder="blur" /></div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg ring-8 ring-indigo-600">
                                            <Image src={newt} alt="Newt" layout="fill" placeholder="blur" />
                                        </div>
                                    </div>
                                </Tween>
                                {/* Content Tile */}
                                <Tween
                                    from={{ opacity: 0, scale: 0.8, }}
                                    duration={0.3}
                                    delay={0.3}
                                    ease="back.out(1.2)"
                                >
                                    <div className="relative max-w-2xl p-10 mx-auto bg-white shadow-xl bg-opacity-80 rounded-2xl bg-blur">
                                        <Tooltip content={"“General Kinobe!”"} direction='right'><h1 className="pb-2"><span className="text-5xl font-bold lg:text-7xl text-indigo-700">Hello there.</span></h1></Tooltip>
                                        <div className="prose">
                                            <p className="lead">My name is Kyle Rodgers. I spend most of my life in front of a computer screen. Some of that time is spent building things.</p>
                                        </div>
                                    </div>
                                </Tween>
                                {/* Image Tiles */}
                                <Tween
                                    from={{ opacity: 0, scale: 1.2, }}
                                    duration={0.3}
                                    delay={0.4}
                                    ease="back.out(1.2)"
                                >
                                    <div className="absolute bottom-0 left-0 hidden w-48 h-48 lg:block" style={{ transform: 'translate(-90%,55%)' }}>
                                        <div className="absolute inset-0 rounded-lg shadow-image"><Image src={selfie} layout="fill" alt="Kyle" placeholder="blur" /></div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg ring-8 ring-indigo-600">
                                            <Image src={selfie} alt="Kyle" layout="fill" placeholder="blur" />
                                        </div>
                                    </div>
                                </Tween>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Greeting;