import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { AppBar, Avatar, Badge, Button, Container } from "@mui/material";
import logo from "../../assets/images/logo.svg";
// import userAuth from "../../assets/images/userAuth.svg";
// import HeaderSurfacing from "../../components/headerSurfacing/headerSurfacing";
import styles from "./style.module.scss";


const Header = () => {
  const navItems = [
    { label: "Документация", id: "documentation" },
    { label: "Помощь", id: "help" },
  ];

  return (
    <AppBar position="static" color="default" elevation={0} className={styles.appBar}>
      <Container maxWidth="lg">
        <div className={styles.toolbar}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.logoTextContainer}>
              <span className={styles.caption}>МОЦ ИКТ</span>
              <span className={styles.title}>ТЕХПОДЕРЖКА</span>
            </div>
          </div>

          <div className={styles.navContainer}>
            {navItems.map((item) => (
              <button key={item.id} className={styles.navButton}>
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

            <div className={styles.avatarBadge}>
              <Badge variant="dot" color="error" overlap="circular" badgeContent=" ">
                <Avatar className={styles.avatar}>ЕВ</Avatar>
              </Badge>
            </div>
            {/* <div className={styles.authBlock}>
              <img src={userAuth} alt="Logo"className="iconuserAuth" />
              <div className="textAuth">Войти</div>
            </div> */}

            {/* <HeaderSurfacing/> */}
          </div>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
