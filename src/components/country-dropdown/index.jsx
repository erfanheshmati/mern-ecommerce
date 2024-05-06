import { Button } from "@mui/material"
import { FaAngleDown } from "react-icons/fa6"

export default function CountryDropdown() {
    return (
        <Button className="country-dropdown">
            <div className="info d-flex flex-column">
                <span className="label">Your Location</span>
                <span className="name">Iran</span>
            </div>
            <span className="ml-auto"><FaAngleDown /></span>
        </Button>
    )
}
