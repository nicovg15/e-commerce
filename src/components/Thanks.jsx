import React from 'react'
import '../css/Thanks.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Link } from 'react-router-dom'

function Thanks() {
    return (
        <div className="thanks-box">
            <CheckCircleOutlineIcon className="thanks-icon" style={{fontSize: 204}}/>
            <h1>Thank you!</h1>
            <p>Your submission is received and we will contact you soon</p>
            <div className="thanks-link">
                <Link to="/">Back to home</Link>
                <ArrowRightAltIcon className="thanks-arrow-icon" style={{fontSize: 15}}/>
            </div>
        </div>
    )
}

export default Thanks
