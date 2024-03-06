import { Button, Container } from '@mui/material'
import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../Images/Logo.png"
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleOpenChange = React.useCallback((event, isOpen) => {
        setOpen(isOpen);
    }, []);

    return (
        <>
            <Container className='navbar-main-container' maxWidth="lg">
                <div className='navbar-main-container-items'>
                    <div className='navbar-logo'>
                        <img className='navbar-logo-image' src={logo} alt='error-while-loading-logo' />
                    </div>

                    {/* It will be displayed only on large screens */}
                    <div className='navbar-menu-options'>
                        <div>Crypto Taxes</div>
                        <div>Free Tools</div>
                        <div>Resource Center</div>
                        <Button variant="contained">Get Started</Button>
                    </div>

                    {/* It will be displayed only on small screens */}
                    <div className='navbar-menu-options-for-small-screen'>

                        <Dropdown open={open} onOpenChange={handleOpenChange}>
                            <MenuButton>
                                <MenuIcon />
                            </MenuButton>
                            <Menu>
                                <MenuItem>Crypto Taxes</MenuItem>
                                <MenuItem>Free Tools</MenuItem>
                                <MenuItem>Resource Center</MenuItem>
                                <MenuItem><Button variant="contained">Get Started</Button></MenuItem>
                            </Menu>
                        </Dropdown>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Navbar