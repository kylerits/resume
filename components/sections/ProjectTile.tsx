import { Reveal, Tween } from "react-gsap";
import Image from "next/image";

import bigMeta from "../../public/images/projects/big-meta.jpeg";
import tlspMeta from "../../public/images/projects/tlsp-meta.jpg";
import amlMeta from "../../public/images/projects/aml-meta.jpg";
import lookupMeta from "../../public/images/projects/lookup-meta.jpg";
import niceSprites from "../../public/images/projects/nice-sprites.png";
import villagePub from "../../public/images/projects/village-pub.png";

const ProjectTile = (props) => {
	const { title, company, url, image, desc } = props.details;

	const getImage = (imageName) => {
		let imageObj;
		switch (imageName) {
			case "bigMeta":
				imageObj = bigMeta;
				break;
			case "tlspMeta":
				imageObj = tlspMeta;
				break;
			case "amlMeta":
				imageObj = amlMeta;
				break;
			case "lookupMeta":
				imageObj = lookupMeta;
				break;
			case "niceSprites":
				imageObj = niceSprites;
				break;
			case "villagePub":
				imageObj = villagePub;
				break;
			default:
				imageObj = bigMeta;
				break;
		}
		return imageObj;
	};
	return (
		<>
			<Reveal>
				<Tween
					from={{ opacity: 0, scale: 0.8 }}
					duration={0.3}
					delay={0.1 * props.index}
					ease="back.out(1.2)"
				>
					<div className="relative w-full max-w-sm pb-4 pr-4 lg:w-auto tile-wrap lg:pr-8 lg:pb-8">
						<div className="relative">
							{image.length > 0 ? (
								<>
									<div className="absolute inset-0 rounded-lg shadow-image">
										<Image
											src={getImage(image)}
											className="object-cover w-full h-full"
											alt={title}
											placeholder="blur"
											fill
											sizes="100vw"
										/>
									</div>
								</>
							) : null}
							<a
								href={url}
								className="relative block overflow-hidden text-gray-100 duration-300 transform translate-y-0 job-tile rounded-xl bg-opacity-60 bg-blur project-tile hover:-translate-y-2"
								target="_blank"
								rel="noreferrer"
							>
								{image.length > 0 ? (
									<>
										<div className="absolute inset-0">
											<Image
												src={getImage(image)}
												className="object-cover w-full h-full"
												alt={title}
												placeholder="blur"
												fill
												sizes="100vw"
											/>
										</div>
										<div className="absolute inset-0 bg-gradient-overlay"></div>
									</>
								) : null}
								<div className="relative flex items-end py-8 px-5 lg:w-80 lg:h-72">
									<div className="relative block w-full">
										<div className="px-4 py-3 rounded-lg bg-gray-500/30 backdrop-blur-sm">
											<h3 className="text-2xl font-bold leading-none">
												{title}
											</h3>
											<p className="font-serif text-sm text-gray-300">
												<span>{company}</span>
											</p>
											{desc.length > 0 && (
												<div>
													<hr className="w-12 mt-2 border-gray-400 opacity-50" />
													<p className="font-serif tracking-wider mt-1 text-gray-300">
														{desc}
													</p>
												</div>
											)}
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>
				</Tween>
			</Reveal>
		</>
	);
};

export default ProjectTile;
