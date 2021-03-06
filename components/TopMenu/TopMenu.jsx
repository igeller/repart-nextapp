import React from "react";
import PropTypes from "prop-types";
import {Navbar, Nav, Accordion} from "react-bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './TopMenu.module.scss'
import menuInfo from "../../constants/menu_info";
import MenuItem from "../TopMenuItem/TopMenuItem";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const TopMenu = (props) => {
    return(
        <>
            <Navbar variant={"dark"} expand={"3000px"} bg={"black"} className={'d-flex justify-content-around p-0 mt-4 mx-4'}>
                <Link href={props.backLink} className={`align-self-left`}>
                    <FontAwesomeIcon icon={faChevronLeft} className={`mx-0`}/>
                </Link>
                <img className={'loweLogo w-25 mx-auto my-auto d-block'}/>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={`${styles.menustyle} ${styles.toggle} p-0 mx-0 border-0`}
                />
                <Navbar.Collapse id="basic-navbar-nav" className={`text-right`}>
                    <Nav id={`${styles.hamburgerOpenMenu}`} className={`mx-auto ${styles.menustyle} w-100 mt-2 pb-2`}  style={{zIndex: 999}}>
                        <Accordion bg={"black"} className={'d-flex flex-column mx-0'}>
                            <MenuItem
                                eventKey={"0"}
                                details={menuInfo[0]}
                                itemBackground={"#DA5527"}/>
                            <MenuItem
                                eventKey={"1"}
                                details={menuInfo[1]}
                                itemBackground={"#F37424"}/>
                            <MenuItem
                                eventKey={"2"}
                                details={menuInfo[2]}
                                itemBackground={"#0C5230"}/>
                            <MenuItem
                                eventKey={"3"}
                                details={menuInfo[3]}
                                itemBackground={"#A3D7F4"}/>
                            <MenuItem
                                eventKey={"4"}
                                details={menuInfo[4]}
                                itemBackground={"#C0CB2F"}/>
                            <MenuItem
                                eventKey={"5"}
                                details={menuInfo[4]}
                                itemBackground={"#FEE49C"}/>
                        </Accordion>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>

    )
}

TopMenu.propTypes = {
    backLink: PropTypes.string.isRequired
}

export default TopMenu;
