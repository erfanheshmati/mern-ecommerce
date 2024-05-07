import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import CountryDropdown from "./CountryDropdown"
import { Button } from "@mui/material"
import { FiUser } from "react-icons/fi"
import { IoBagOutline } from "react-icons/io5"
import SearchBox from "./SearchBox"
import Navigation from "./Navigation"
import { useContext } from "react"
import { CountryContext } from "../context/CountryProvider"

export default function Header() {

    const context = useContext(CountryContext)

    return (
        <div className="header-wrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center ">
                        Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay
                    </p>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logo-wrapper col-sm-2 d-flex align-items-center">
                            <Link to={"/"}>
                                <img src={Logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="col-sm-10 d-flex align-items-center part2">

                            {context.countryList.length !== 0 && <CountryDropdown />}

                            <SearchBox />

                            {/* User Account & Shopping Cart */}
                            <div className="part3 d-flex align-items-center ml-auto">
                                <Button className="circle mr-3">
                                    <FiUser />
                                </Button>
                                <div className="ml-auto cart-tab d-flex align-items-center">
                                    <span className="price">$0.00</span>
                                    <div className="position-relative ml-2">
                                        <Button className="circle">
                                            <IoBagOutline />
                                        </Button>
                                        <span className="count d-flex align-items-center justify-content-center">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navigation />
        </div>
    )
}
