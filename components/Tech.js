import { useRef } from "react";
import TechTile from "./TechTile"

const TechTitle = () => {
    const animRef = useRef();
    return (
        <h2 className="relative text-5xl font-bold text-indigo-700 lg:text-8xl lg:pl-16" ref={animRef}>Technology</h2>
    );
}

const Tech = () => {
    
    return (
        <div className="relative py-10 overflow-hidden lg:py-16">
            <div className="container">
                <TechTitle />

                {/* Code */}
                <div className="mb-6 tech-wrap lg:mb-10">
                    <TechTile />
                </div>

            </div>
        </div>
    );
}

export default Tech;