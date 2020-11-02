import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/">About me</NavigationItem>
        </ul>
    );
}

export default navigationItems;