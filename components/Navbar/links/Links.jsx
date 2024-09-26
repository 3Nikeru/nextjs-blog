import React from 'react'
import Navlink from './navLink/Navlink';
import styles from './links.module.css';

const Links = () => {
    const links = [
    {
        title: "Homepage",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    },
];
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link)=>{
           return <Navlink link={link} key={link.title}/>

        })}
      </div>
    </div>
  )
}

export default Links
