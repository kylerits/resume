import Image from 'next/image';
import { Reveal, Tween } from 'react-gsap';
// import { Parallax, Background } from 'react-parallax';
import Tooltip from './Tooltip';

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
                                        <div className="absolute inset-0 rounded-lg shadow-image"><Image src="/images/winter.png" layout="fill" alt="Winter" /></div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg ring-8 ring-indigo-600">
                                            <Image src="/images/winter.png" alt="Winter" layout="fill" />
                                        </div>
                                    </div>
                                </Tween>
                                <Tween
                                    from={{ opacity: 0, scale: 0.8, }}
                                    duration={0.3}
                                    delay={0.15}
                                    ease="back.out(1.2)"
                                >
                                    <div className="absolute top-0 hidden w-48 h-48 lg:block left-1/2" style={{ transform: 'translate(50px, -150px)' }}>
                                        <div className="absolute inset-0 rounded-lg shadow-image"><Image src="/images/kayak.png" layout="fill" alt="Kayak" /></div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg ring-8 ring-indigo-600">
                                            <Image src="/images/kayak.png" alt="Kayak" layout="fill" />
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
                                        <div className="absolute inset-0 rounded-lg shadow-image"><Image src="/images/newt.png" layout="fill" alt="Newt" /></div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg ring-8 ring-indigo-600">
                                            <Image src="/images/newt.png" alt="Newt" layout="fill" />
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
                                        <Tooltip content={"“General Kinobe!”"} direction='right'><h1 className="pb-2"><span className="text-5xl font-bold lg:text-7xl">Hello there.</span></h1></Tooltip>
                                        <div className="prose">
                                            <p className="lead">My name is Kyle Rodgers. I spend most of my life in front of a computer screen. Some of that time is spent on building things.</p>
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
                                        <div className="absolute inset-0 rounded-lg shadow-image"><Image src="/images/kyle-selfie.png" layout="fill" alt="Kyle" /></div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg ring-8 ring-indigo-600">
                                            <Image src="/images/kyle-selfie.png" alt="Kyle" layout="fill" />
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