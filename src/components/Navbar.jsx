import {StyleContext} from '../App'
import ThemeContext from './ThemeContext';
import {useContext} from 'react';


const Nav = () => {
  let {theme} = useContext(StyleContext);

  return (
    <>
      <div className={theme==='light' ? 'nav' : 'nav darkNav'}>
          <h1 className={theme==='light' ? '' : 'darkTitle'}>Video Games Epic</h1>
          <ThemeContext/>
        </div>
    </>
  )
}

export default Nav;