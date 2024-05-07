import { Button } from "@mui/material"
import { FaAngleDown } from "react-icons/fa6"
import Dialog from '@mui/material/Dialog'
import { IoSearch } from "react-icons/io5"
import { MdClose } from "react-icons/md"
import { useContext, useEffect, useState } from "react"
import Slide from '@mui/material/Slide'
import React from "react"
import { CountryContext } from "../context/CountryProvider"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
});


export default function CountryDropdown() {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [selectedTab, setSelectedTab] = useState(null)
    const [countryList, setCountryList] = useState([])

    const context = useContext(CountryContext)

    const selectCountry = (index, country) => {
        setSelectedTab(index)
        setIsOpenModal(false)
        context.setSelectedCountry(country)
    }

    useEffect(() => {
        setCountryList(context.countryList)
    }, [])

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase()
        if (keyword !== "") {
            const list = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword)
            })
            setCountryList(list)
        }
        else {
            setCountryList(context.countryList)
        }
    }

    return (
        <>
            <Button className="country-dropdown" onClick={() => setIsOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">
                        {
                            context.selectedCountry !== "" ?
                                context.selectedCountry.length > 15 ? context.selectedCountry?.substr(0, 15) + "..." : context.selectedCountry :
                                "Select a Location"
                        }
                    </span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className="location-modal" TransitionComponent={Transition}>
                <h4>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close" onClick={() => setIsOpenModal(false)}><MdClose /></Button>
                <div className="header-search w-100 px-0">
                    <input type="text" placeholder="Search your area..." onChange={filterList} />
                    <Button><IoSearch /></Button>
                </div>
                <ul className="country-list">
                    {countryList?.length !== 0 && countryList?.map((item, index) => {
                        return (
                            <li key={index}>
                                <Button onClick={() => selectCountry(index, item.country)} className={`${selectedTab === index ? "active" : ""}`}>
                                    {item.country}
                                </Button>
                            </li>
                        )
                    })}
                </ul>
            </Dialog>
        </>
    )
}
