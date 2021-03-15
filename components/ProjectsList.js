import ProjectTile from "./ProjectTile";

const ProjectsList = (props) => {
    const ProjectsLoop = () => Object.keys(props.list).map(key => <ProjectTile key={key} details={props.list[key]} />)
    return (
        <div className="flex flex-wrap">
            <ProjectsLoop />
        </div>
    );
}

export default ProjectsList;