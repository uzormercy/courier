import React, { useState } from 'react';

import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
            <div className='main_header_area'>
                <div className='header_top'>
                    <div className='container'>
                        <div className=''>
                            <Nav className='me-auto'>
                                <NavItem>
                                    <NavLink href='/' className='text-white font-weight-light header_top_link'>123-456-7890</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/' className='text-white header_top_link'>support@mail.com</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='/' className='text-white header_top_link'>1105 Mc Donals, West London</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
                <Navbar expand="md" container="md" className="bg-white" color="" light>
                    <NavbarBrand href='/' className='ps-3 text-black logo-text'>Courier</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar className='justify-content-end align-items-end'>
                        <Nav className="" navbar>
                            <NavItem>
                                <NavLink href='/' className='text-black navbar-text'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/' className='text-black navbar-text'>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/' className='text-black navbar-text'>Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/track' className='text-black navbar-text'>Cargo Tracking</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/' className='text-black navbar-text'>Contact us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
}

export default NavigationBar;