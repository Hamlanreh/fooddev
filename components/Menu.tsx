'use client';
import styles from "@styles/Menu.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useCartContext } from "@context/CartProvider";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Menu({ name, description, price, image}: any) 
{
  const [menuItems, setMenuItems] = useState([]);  
  
  useEffect(() => {
    // Get all the menus
    fetch("/api/menu", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((data) => setMenuItems([...data.menus]))
    .catch((err) => console.error(`Menu items data error!`));
  }, []);
  

  return (
    <ul className={styles.menuList}>
      {menuItems.length > 0 && menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id} {...menuItem} />
      ))}
    </ul>
  )
}


function MenuItem(item: any) 
{
  const { addToCart } = useCartContext();  

  const handleAddToCart = (newItem) => {
    addToCart(newItem);
  }
   
  return (
    <div className={styles.menu}>
      <div className={styles.menuPrice}>
        <p>${item.price}</p>
      </div>
      <Image className={styles.menuImg} src={item.image} alt="food" width="200" height="200" />
      <div className={styles.menuDetail}>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <button onClick={() => handleAddToCart(item)}>Add to cart <AddShoppingCartIcon className={styles.menuIcon} /></button>
      </div>
    </div>
  )
}
