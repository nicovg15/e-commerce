import React, { useState, useEffect } from 'react'
import '../css/Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from './context/StateProvider'
import { auth } from './firebase/firebase'
import {firestore} from 'firebase'

function Navbar() {
    const [number,setNumber] = useState()
    const [{basket, user}, dispatch] = useStateValue()
    const [search, setSearch] = useState()
    const history = useHistory()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        history.push('/error')
    }

    const handleAuth = () => {
        if(user){
            auth.signOut()
        }
    }

    return (
        <div className="navbar">
            <div className="navbar-box">
                <a href="/#navbar">
                    <img src='http://acsonsonido.com/wp-content/uploads/2020/08/LOGO-ACSON-BLANCO.png' alt="logo" />
                </a>
                <form onSubmit={handleOnSubmit} className="navbar-form">
                    <input type="text" onChange={e => setSearch(e.target.value)} value={search}/>
                    <button type="submit">
                        <SearchIcon className="navbar-search-icon"/>
                    </button>
                </form>
                <div className="navbar-links">
                    <a href="#audio">AUDIO</a>
                    <a href="#accesories">ACCESORIES</a>
                    <Link to={!user && "/login"}><span onClick={handleAuth}>{!user ? 'LOG IN' : 'LOG OUT'}</span></Link>
                    <a href="#inquiries">INQUIRIES</a>
                </div>
                <Link to='checkout' className="navbar-basket">
                    <ShoppingCartIcon className="navbar-shopping-icon"/>
                    <span>{basket?.length}</span>
                </Link>
            </div>
            <div className="navbar-links-below">
                <a href="#audio">AUDIO</a>
                <a href="#accesories">ACCESORIES</a>
                <Link to={!user && "/login"}><span onClick={handleAuth}>{!user ? 'LOG IN' : 'LOG OUT'}</span></Link>
                <a href="#consults">CONSULTS</a>
            </div>
        </div>
    )
}

export default Navbar
