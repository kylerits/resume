import { JSX } from "react";
import JobTile from "./JobTile";

const experience = [
	{
		title: "UI Engineer",
		company: "Apple",
		companyUrl: "https://apple.com/",
		timeStart: "October 2023",
		timeEnd: "Present",
		location: "Austin, TX (Remote)",
		description: "Joining the Apple IS&T team to work on internal coaching software used by Apple Care and other teams across the company. I contribute to the development of UI/UX solutions that enhance the user experience and remain accessible to all users. I am excited to be a part of a team that values innovation and creativity, and I look forward to contributing my skills and expertise to help drive the success of Apple IS&T.",
	},
	{
		title: "Senior Frontend Developer",
		company: "Ruoff Mortgage",
		companyUrl: "https://ruoff.com/",
		timeStart: "Jan 2022",
		timeEnd: "October 2023",
		location: "Fort Wayne, IN",
		description:
			"Leading projects like bespoke UI kit to match current Ruoff brand and accessibility standards and a loan comparison tool available to hundreds of loan officers, I strive to leave a positive impact on my team and Ruoff as a whole.",
	},
	{
		title: "Frontend Developer",
		company: "BIG [Brand Innovation Group]",
		companyUrl: "https://gotobig.com/",
		timeStart: "Aug 2017",
		timeEnd: "Dec 2021",
		location: "Fort Wayne, IN",
		description:
			"Working in collaboration with a team of designers and developers to bring to life beautiful digital solutions for clients across multiple industries.",
	},
	{
		title: "Freelance Developer",
		company: "Self Employed",
		companyUrl: "https://kylerodgers.me/",
		timeStart: "Nov 2019",
		timeEnd: "Present",
		location: "Fort Wayne, IN",
		description:
			"Taking on a variety of projects from full design and development of a company's website to supporting local agencies with their development needs.",
	},
	{
		title: "Web Designer/Developer",
		company: "Lewis SEO",
		companyUrl: "https://lewisseo.com/",
		timeStart: "Jun 2013",
		timeEnd: "Aug 2017",
		location: "Fort Wayne, IN",
		description:
			"Designing and building websites for a wide variety of clients with strict goals of SEO.",
	},
];

const ExperienceLoop = (): JSX.Element[] =>
	Object.keys(experience).map((key) => (
		<JobTile key={key} details={experience[key]} index={key} />
	));

const Experience = () => {
	return (
		<div className="relative py-10 overflow-hidden lg:py-16">
			<div className="container">
				<h2 className="relative text-5xl font-bold text-indigo-700 lg:text-8xl lg:pl-16">
					Experience
				</h2>
				<div className="relative flex flex-wrap items-start">
					<div className="timeline"></div>
					{ExperienceLoop()}
				</div>
			</div>
		</div>
	);
};

export default Experience;
