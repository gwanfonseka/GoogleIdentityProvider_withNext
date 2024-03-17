'use client';

import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import logo from "@/assets/logo.png";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import NavLink from "@/components/NavLink/NavLink";
import { isLoggedIn, signOutUser } from "@/lib/firebase";
import { useEffect, useState } from "react";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        isLoggedIn().then(user => {
            if (user) {
                console.log('User is signed in : ', user);
                setLoggedIn(true);
            } else {
                console.log('No user is signed in');
            }
        });
    }, []);

    const onSignOut = () => {
        signOutUser().then(() => {
            setLoggedIn(false);
        });
    };

    return (
        <>
            <HeaderBackground />
            <div className={styles.headerWrapper}>
                <Link href='/' className={styles.logoLink}>
                    <Image className={styles} src={logo.src} alt="NextLevel Food" priority width={100} height={100} />
                    <h1 className={styles.logoName}>NextLevel Food</h1>
                </Link>
                <div className={styles.navBar}>
                    <NavLink href='/meals'>Browse Meals</NavLink>
                    <NavLink href='/community'>Foodies Community</NavLink>
                    <NavLink href='/login'>Login</NavLink>
                    {loggedIn && <NavLink href='/' onClick={(e) => {
                        e.preventDefault();
                        onSignOut();
                    }}>Log out</NavLink>}
                </div>
            </div>
        </>
    );
};

export default Header;