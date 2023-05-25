import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
// back tic can be used to write your own java script code
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = ()=>{
    const offset = window.scrollY;
    if(offset > 200){
      setScrolled(true);
    } else{
      setScrolled(false);
    }
      
  };
  useEffect(()=> {
    window.addEventListener("scroll", handleScroll)
      
  }, []);
    
  return (
    <>
      <header className={`main-header ${scrolled ? "stickey-header" : ""}`}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="centre">GKDEVSTORE.</div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  </>
  );
};

export default Header;

// use state is used to set the value of the data manually
//useEffect is used for the component to render when it call first time,
// dependencies array in state , state update when the useEffect call it