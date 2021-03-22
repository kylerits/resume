import {Link, animateScroll as scroll} from 'react-scroll';
import Tooltip from './Tooltip';

const NavItem = (props) => {
    return (
        <li className="block">
            <Tooltip content={props.title} direction="left">
                <Link 
                    to={props.id} 
                    className="relative flex items-center py-2 text-right cursor-pointer spy-link"
                    activeClass="is-current"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={400}
                    >
                        <span className="inline-block spy-line"></span>
                </Link>
            </Tooltip>
        </li>
    );
}

export default NavItem;