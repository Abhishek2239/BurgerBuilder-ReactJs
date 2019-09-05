import React from 'react';
import Aux from '../../hoc/Aux';
import LayoutStyles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <Aux>
        {/* <div >
            Toolbar,
            SideDrawer,
            Backdrop
        </div> */}
        <Toolbar/>
        <SideDrawer/>
        <main className={LayoutStyles.Content}>
            {props.children}
        </main>
        
    </Aux>
)

export default layout