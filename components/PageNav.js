import NavItem from '../components/NavItem';

const PageNav = () => {
    const navList = [
        {
            id: 'greeting',
            title: 'Greeting',
        },
        {
            id: 'intro',
            title: 'Introduction',
        },
        {
            id: 'projects',
            title: 'Projects',
        },
        {
            id: 'experience',
            title: 'Experience',
        },
        {
            id: 'tech',
            title: 'Technology',
        },
        {
            id: 'contact',
            title: 'Contact',
        },
    ]
    return ( 
        <>
            <ul className="fixed top-0 right-0 flex-col items-end hidden p-5 lg:flex">
                {Object.keys(navList).map(key => <NavItem key={key} id={navList[key].id} title={navList[key].title} />)}
            </ul>
        </> 
    );
}

export default PageNav;