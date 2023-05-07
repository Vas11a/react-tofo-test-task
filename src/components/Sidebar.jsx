import React from 'react';
import Plus from './SidebarButtons/Plus';
import Remove from './SidebarButtons/Remove';
import Rewrite from './SidebarButtons/Rewrite';
import SearchBox from './SearchBox';

export default function Sidebar() {
    return (
        <header className="header">
            <div className="button-block">
              <Plus/>
              <Remove/>
              <Rewrite/>  
            </div>
            <SearchBox/>
        </header>
    )
}
