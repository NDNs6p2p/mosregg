import React, { useState, useEffect } from "react"
import GridViewIcon from "@mui/icons-material/GridView"
import { AppBar, Avatar, Badge, Button, Container } from "@mui/material"
import logo from "../../assets/images/logo.svg"
import userAuth from "../../assets/images/userAuth.svg"
import { useNavigate } from "react-router-dom"
import HeaderSurfacing from "../../components/headerSurfacing/headerSurfacing"
import styles from "./style.module.scss"
import { localStore } from "../../stores/localStore"
import { observer } from "mobx-react-lite"
import { UserData } from "../../types/userData"

const navItems = [
  { label: "Документация", id: "documentation" },
  { label: "Помощь", id: "help" },
]

const Header = observer(() => {
  const [isAuthVisible, setIsAuthVisible] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)

  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // console.log("localStore.userData111111111", localStore.userData)
    const isAvialeble = !!localStore.userData.login
    // console.log("isAvialeble", isAvialeble)
    const userData = localStore.userData
    setUserData(userData)
    setIsAuthVisible(isAvialeble)
  }, [localStore.userData])

  const authButton = () => {
    navigate("/auth")
  }

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev)
  }

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={styles.appBar}
    >
      <Container maxWidth="lg">
        <div className={styles.toolbar}>
          <div
            className={styles.logoContainer}
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="Logo"
              className={styles.logo}
            />
            <div className={styles.logoTextContainer}>
              <span className={styles.caption}>МОЦ ИКТ</span>
              <span className={styles.title}>ТЕХПОДЕРЖКА</span>
            </div>
          </div>

          <div className={styles.navContainer}>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={styles.navButton}
              >
                {item.label}
              </button>
            ))}

            <Button
              variant="contained"
              startIcon={<GridViewIcon />}
              className={styles.catalogButton}
            >
              Каталог услуг
            </Button>

            {isAuthVisible && (
              <div
                className={styles.avatarBadge}
                onClick={toggleDropdown}
              >
                <Badge
                  variant="dot"
                  color="error"
                  overlap="circular"
                  badgeContent=" "
                >
                  <Avatar className={styles.avatar}>{userData?.login.slice(0, 2)}</Avatar>
                </Badge>
              </div>
            )}
            {!isAuthVisible && (
              <button
                className={styles.authBlock}
                onClick={authButton}
              >
                <img
                  src={userAuth}
                  alt="Logo"
                  className="iconuserAuth"
                />
                <div className="textAuth">Войти</div>
              </button>
            )}

            {showDropdown && <HeaderSurfacing onClose={toggleDropdown} />}
          </div>
        </div>
      </Container>
    </AppBar>
  )
})

export default Header
