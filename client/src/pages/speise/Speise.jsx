import "./Speise.css"
import { NavLink } from "react-router-dom"



import AllMenus from "../../component/speise/allMenus/AllMenus"
import Getränke from "../../component/speise/getränke/Getränke"
import Hauptspeisen from "../../component/speise/hauptspeisen/Hauptspeisen"
import Nachspeisen from "../../component/speise/nachspeisen/Nachspeisen"
import Vorspeisen from "../../component/speise/vorspeisen/Vorspeisen"

import { useState } from "react"



export default function Speise () {
    const [showMenus, setShowMenus] = useState(true)
    const [showMainDish, setShowMainDish] = useState(false)
    const [showDessert, setShowDessert] = useState(false)
    const [showAppetizer, setShowAppetizer] = useState(false)
    const [showDrinks, setShowDrinks] = useState(false)

    const handleAllMenu = () => {
        setShowMenus(true)
        setShowMainDish(false)
        setShowDessert(false)
        setShowAppetizer(false)
        setShowDrinks(false)
    }

    const handleDrinks = () => {
        setShowMenus(false)
        setShowMainDish(false)
        setShowDessert(false)
        setShowAppetizer(false)
        setShowDrinks(true)
    }

    const handleAppetizer = () => {
        setShowMenus(false)
        setShowMainDish(false)
        setShowDessert(false)
        setShowAppetizer(true)
        setShowDrinks(false)
    }

    const handleMainDish = () => {
        setShowMenus(false)
        setShowMainDish(true)
        setShowDessert(false)
        setShowAppetizer(false)
        setShowDrinks(false)
    }

    const handleDessert = () => {
        setShowMenus(false)
        setShowMainDish(false)
        setShowDessert(true)
        setShowAppetizer(false)
        setShowDrinks(false)
    }



    return (
        <main id="Speise" className='text-light  w-100 d-flex flex-column justify-content-between align-items-center'>
            <section id="menuNavigation" className="w-75 d-flex justify-content-around align-items-center mt-3 border border-3 border-warning  flex-wrap">
                <NavLink className="fs-6 decorationNone" onClick={handleAllMenu}>Alles</NavLink>
                <NavLink className="fs-6 decorationNone" onClick={handleAppetizer}>Vorspeise</NavLink>
                <NavLink className="fs-6 decorationNone" onClick={handleMainDish}>Hauptspeise</NavLink>
                <NavLink className="fs-6 decorationNone" onClick={handleDessert}>Nachspeise</NavLink>
                <NavLink className="fs-6 decorationNone" onClick={handleDrinks}>Getränke</NavLink>
            </section>
            <section id="place" className="w-100">
                {showMenus && <AllMenus />}
                {showDrinks && <Getränke />}
                {showMainDish && <Hauptspeisen />}
                {showDessert && <Nachspeisen />}
                {showAppetizer && <Vorspeisen />}



            </section>
        </main>
    )
}
