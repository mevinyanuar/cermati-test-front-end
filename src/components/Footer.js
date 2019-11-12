import React from 'react'
import '../css/Footer.css'
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {

    return (
        <>
            <div className='footer'>
                <div className='footer-item'>
                    <FontAwesomeIcon icon={faCopyright}/> 2018 Mevin Yanuar. All rights reserved
                </div> 
            </div>
                   
        </>
    )
}
