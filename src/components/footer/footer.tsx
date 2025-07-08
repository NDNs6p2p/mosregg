import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  const servicesLinks = ["Каталог услуг", "Документация", "Баз знаний"];
  const portalLinks = [
    "Как создать обращение",
    "Поддержка систем",
    "Обратная связь",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logoBlock}>
              <img
                alt="Frame"
                src="https://c.animaapp.com/mcipvpp8RLE7it/img/frame-133.svg"
                width={56}
                height={56}
              />
            </div>

            <p className={styles.description}>
              Портал «Служба поддержки пользователей ГКУ "МОЦ ИКТ"»
            </p>

            <div>
              <p className={styles.description}>Телефон поддержки</p>
              <a
                href="tel:+74986022662"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.phone}
              >
                +7 (498) 602-26-62
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Услуги и справка</h4>
            <div className={styles.linkList}>
              {servicesLinks.map((link, index) => (
                <div className={styles.linkItem} key={index}>
                  <span>{link}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Работа с порталом</h4>
            <div className={styles.linkList}>
              {portalLinks.map((link, index) => (
                <div className={styles.linkItem} key={index}>
                  <span>{link}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <p className={styles.copy}>
          © 2025 Министерство государственного управления, информационных
          технологий и связи Московской области
        </p>
      </div>
    </footer>
  );
};

export default Footer;
