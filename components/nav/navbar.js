import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const { username } = props;
  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };
  const handleLogout = () => {
    e.preventDefault();
  };
  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width="128"
              height="34"
            />
          </div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <button className={styles.usernameBtn} onClick={handleShowDropdown}>
            <p className={styles.username}>{username}</p>
          </button>
          {/* expand more */}
          <Image
            src="/static/expand_more.svg"
            alt="Expand dropdown"
            width="24"
            height="24"
          />
          {showDropdown && (
            <div className={styles.navDropdown}>
              <Link
                href="/login"
                onClick={handleLogout}
                className={styles.linkName}
              >
                Sign out
              </Link>
              <div className={styles.lineWrapper}></div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
