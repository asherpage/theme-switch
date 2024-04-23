import {useContext} from 'react';
import {StyleContext} from '../App'

const Header = () => {
    let {theme} = useContext(StyleContext);

    return (
        <div className={theme==='light' ? 'header' : 'header darkHeader'}>Video Games</div>
    )
}

export default Header;