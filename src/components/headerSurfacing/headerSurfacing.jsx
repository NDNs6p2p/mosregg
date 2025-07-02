import Close from "@mui/icons-material/Close";
import Info from "@mui/icons-material/Info";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Logout from "@mui/icons-material/Logout";
import Notifications from "@mui/icons-material/Notifications";
import Person from "@mui/icons-material/Person";
import WbSunny from "@mui/icons-material/WbSunny";
import React from "react";
import styles from "./style.module.scss";
import IconButton from "@mui/material/IconButton";

const menuItems = [
  {
    icon: <Person />,
    text: "Кабинет сотрудника",
    badge: null,
  },
  {
    icon: <Notifications />,
    text: "Уведомления",
    badge: "99+",
  },
  {
    icon: <Info />,
    text: "Справка",
    badge: null,
  },
];

const footerLinks = [
  { text: "Правила и рекомендации" },
  { text: "Политика конфиденциальности" },
];

const HeaderSurfacing = () => {
  return (
    <div className={styles.paper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.userName}>
            Епихарий <br /> Вадим Валерьевич
          </div>
          <div className={styles.closeBtn}>
            <IconButton size="small" aria-label="close">
              <Close />
            </IconButton>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.menuList}>
          {menuItems.map((item, index) => (
            <div className={styles.menuItem} key={index} tabIndex={0} role="button">
              <div className={styles.menuIcon}>{item.icon}</div>
              <div className={styles.menuText}>{item.text}</div>
              {item.badge && (
                <div className={styles.menuBadge}>{item.badge}</div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.divider} />
        <div className={styles.menuItem} tabIndex={0} role="button">
          <div className={styles.menuIcon}><WbSunny /></div>
          <div className={styles.menuText}>Внешний вид</div>
          <div className={styles.menuArrow}><KeyboardArrowDown /></div>
        </div>
        <div className={styles.divider} />
        <div className={styles.menuItem} tabIndex={0} role="button">
          <div className={styles.menuIcon}><Logout /></div>
          <div className={styles.menuText}>Выйти</div>
        </div>
        <div className={styles.divider} />
        <div className={styles.footer}>
          <div className={styles.footerTitle}>Пользователь ГКУ МО «МОЦ ИКТ»</div>
          {footerLinks.map((link, index) => (
            <button className={styles.footerLink} key={index} type="button">
              {link.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSurfacing;