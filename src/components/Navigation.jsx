import { IoIosMenu } from "react-icons/io"
import { FaAngleDown } from "react-icons/fa6"
import { TbMeat } from "react-icons/tb"
import { MdOutlineBakeryDining } from "react-icons/md"
import { RiDrinks2Line } from "react-icons/ri"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navigation() {

  const [isOpenSidebarNav, setIsOpenSidebarNav] = useState(true)



  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 nav-part1">
            <div className="cat-wrapper mt-1">
              <Button className="all-cat-tab align-items-center" onClick={() => setIsOpenSidebarNav(!isOpenSidebarNav)}>
                <span className="icon1 mr-2"><IoIosMenu /></span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2"><FaAngleDown /></span>
              </Button>
              <div className={`sidebar-nav ${isOpenSidebarNav ? "open" : ""}`}>
                <ul>
                  <li>
                    <Link to="/"><Button>Fruits & Vegetables</Button></Link>
                  </li>
                  <li>
                    <Link to="/"><Button>Meats & Seafood</Button></Link>
                  </li>
                  <li>
                    <Link to="/"><Button>Breakfast & Dairy</Button></Link>
                  </li>
                  <li>
                    <Link to="/"><Button>Beverages</Button></Link>
                  </li>
                  <li>
                    <Link to="/"><Button>Breads & Bakery</Button></Link>
                  </li>
                  <li>
                    <Link to="/"><Button>Frozen Foods</Button></Link>
                  </li>
                  <li>
                    <Link to="/"><Button>Biscuits & Snacks</Button></Link>
                  </li>
                  <li>
                    <Link to="/"><Button>Grocery & Staples</Button></Link>
                  </li>
                </ul>
                <hr />
                <div className="">
                  <ul>
                    <li>
                      <Link to="/"><Button>Value of the Day</Button></Link>
                    </li>
                    <li>
                      <Link to="/"><Button>Top 100 Offers</Button></Link>
                    </li>
                    <li>
                      <Link to="/"><Button>New Arrivals</Button></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 nav-part2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/"><Button>Home</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Shop<FaAngleDown className="ml-2 arrow-icon" /></Button></Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Shop Lists</Button></Link>
                  <Link to="/"><Button>Shop Lists</Button></Link>
                  <Link to="/"><Button>Shop Lists</Button></Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button><TbMeat />Meats & SeaFood</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button><MdOutlineBakeryDining />Bakery</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button><RiDrinks2Line />Beverages</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Blog</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Contact</Button></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
