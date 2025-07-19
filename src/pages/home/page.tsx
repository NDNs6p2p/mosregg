import React from "react";
import styles from "./style.module.scss";
import Catalog from "../../components/catalog/catalog";

const HomePage = () => {
  return (
    <div>
      <h1>Добро пожаловать на главную страницу</h1>
      <Catalog></Catalog>
    </div>
  );
};

export default HomePage;
