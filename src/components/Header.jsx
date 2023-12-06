import { CiShoppingCart } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoCalendar } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoSearchCircle } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
function Header() {
  return (
    <>
      <header>
        <nav id="topNav">
          <div id="logoContainer">
            <a href="./">
              <img src="public\assets\intellivinci-logo.png"></img>
            </a>
          </div>
          <div id="searchBar">
            <input></input>
            <a id="IoSearchCircle" href="">
              <IoSearchCircle></IoSearchCircle>
            </a>
          </div>
          <div id="iconsContainer">
            <a class="largeIcons" href="./">
              <CiUser />
            </a>
            <a class="largeIcons" href="./">
              <CiHeart />
            </a>

            <a class="largeIcons" href="./">
              <CiShoppingCart></CiShoppingCart>
            </a>
          </div>
        </nav>

        <nav id="bottomNav">
          <ul>
            <li>
              <a id="FaFire" href="#">
                <FaFire /> <span>Shop Deals</span>
              </a>
            </li>
            <li>
              <a id="BiSolidCategoryAlt" href="#">
                <BiSolidCategoryAlt /> <span>Categories</span>
              </a>
            </li>
            <li>
              <a id="IoCalendar" href="#">
                <IoCalendar /> <span>Seasonal Offers</span>
              </a>
            </li>
            <li>
              <a id="FaBook" href="#">
                <FaBook /> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <BiSolidMessageSquareDetail /> <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
