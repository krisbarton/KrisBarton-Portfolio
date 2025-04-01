import { useState } from 'react';
import Menu from '../../assets/menu.svg';
import MenuItems from './menuItems';

export default function MobileNavigation() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='relative mr-6'>
            <button className='cursor-pointer' onClick={toggleMobileMenu}>
                <img src={Menu} alt="Mobile menu hamburger icon" width="25" height="25" />
            </button>
            <nav className='absolute -right-4 z-10 flex flex-col bg-stormdust-950 [&_a]:my-2 p-2 rounded'>
                { showMenu ? <MenuItems /> : null }
            </nav>
        </div>
    )
}