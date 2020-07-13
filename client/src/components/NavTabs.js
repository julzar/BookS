import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import classnames from 'classnames';
import SearchBooks from '../pages/SearchBooks'
import SavedBooks from '../pages/SavedBooks'

const NavTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs className="mb-4">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Search New Books
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            View Saved Books
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <SearchBooks />
        </TabPane>
        <TabPane tabId="2">
          <SavedBooks />
        </TabPane>
      </TabContent>
    </div>
  );
}

export default NavTabs;