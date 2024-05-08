import styles from "./index.module.css";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleMenu = () => {
    setShowNavbar((prevState) => !prevState);
  };

  return (
    <>
      <header className={`p-3 lg:p-4 ${styles.header} `} >
        <div className="container mx-auto px-4 py-2 lg:py-6 lg:px-8">
          <nav className={styles.navbar}>
            <div className="lg:hidden">
              <button className="block w-10" onClick={handleMenu} type="button">
                <img
                  className="w-10"
                  src={
                    showNavbar
                      ? "/images/icons/close_white.svg"
                      : "/images/icons/menu.svg"
                  }
                  alt=""
                />
              </button>
            </div>
            <div className="lg:hidden text-right">
              <Link href="/" className="inline-block">
                <img src="/images/logo.svg" alt="" />
              </Link>
            </div>
            <Link href="/" className="mr-8 hidden lg:inline-block">
              <img className="max-w-[170px]" src="/images/logo.svg" alt="" />
            </Link>
            <div
              className={`${styles["navbar-collapse"]} ${
                showNavbar ? styles.show : ""
              }`}
            >
              {showNavbar && (
                <div
                  className={`cursor-pointer ml-6 mb-4 lg:none ${styles.position}`}
                  onClick={handleMenu}
                >
                  <img src="/images/icons/icons8-close.svg" alt="" />
                </div>
              )}
              <ul
                className={`${styles["navbar-nav"]} md:ml-auto lg:flex items-center`} 
              >
                <li>
                  <Link href="/" className={styles["nav-link"]}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className={styles["nav-link"]}>
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles["nav-link"]}>
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles["nav-link"]}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles["nav-link"]}>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles["nav-link"]}>
                    Login/Signup
                  </Link>
                </li>
                <li>
                  <button
                    className={`w-[150px] h-[63px] rounded-full font-semibold text-black text-lg flex items-center justify-center ${styles.btn}`}
                  >
                    Book a demo
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
