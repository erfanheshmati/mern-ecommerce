import { Button } from "@mui/material"
import { IoSearch } from "react-icons/io5"

export default function SearchBox() {
    return (
        <div className="header-search mx-3">
            <input type="text" placeholder="Search for products..." />
            <Button><IoSearch /></Button>
        </div>
    )
}
