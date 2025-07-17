import React, { useEffect, useState } from "react"
import { UserData } from "../../types/userData"
import { useNavigate } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { localStore } from "../../stores/localStore"
import { IconCatalog } from "../../assets/images/IconCatalog.svg"

const CatalogArr = [
  {
    icon: IconCatalog,
    title: "Внутренние и инфраструктурные сервисы",
    text: "Поддержка ИТ-инфраструктуры внутри организации",
    id: "",
    childElements: [
      { title: "Аккаунты и пароли", id: "", text: "" },
      { title: "Репозитории и доступы", id: "", text: "" },
      { title: "Электронная почта", id: "", text: "" },
      { title: "Сервисы МФА, ССТУ, СУТП", id: "", text: "" },
    ],
  },
  {
    icon: IconCatalog,
    title: "Рабочие места и периферия",
    text: "Обслуживание АРМ, оргтехники, ИБП и установленного ПО",
    id: "",
    childElements: [
      { title: "Настройка ПК и ноутбуков", id: "", text: "" },
      { title: "Подключение периферии", id: "", text: "" },
      { title: "Установка ОС и ПО", id: "", text: "" },
      { title: "Обслуживание ИБП", id: "", text: "" },
    ],
  },
  {
    icon: IconCatalog,
    title: "Сетевые сервисы",
    text: "Доступ к облачным, файловым и сетевым ресурсам",
    id: "",
    childElements: [
      { title: "Доступ к cloud.mosreg.ru", id: "", text: "" },
      { title: "DHCP и DNS (zoho.mosreg.ru)", id: "", text: "" },
      { title: "Файловое хранилище", id: "", text: "" },
      { title: "Сетевые папки и диски", id: "", text: "" },
    ],
  },
  {
    icon: IconCatalog,
    title: "Системы виртуализации",
    text: "Поддержка виртуальных машин и резервных систем",
    id: "",
    childElements: [
      { title: "Виртуальные машины", id: "", text: "" },
      { title: "Резервное копирование (СРК)", id: "", text: "" },
      { title: "Система СУВР", id: "", text: "" },
      { title: "Мониторинг и восстановление", id: "", text: "" },
    ],
  },
  {
    icon: IconCatalog,
    title: "Сети",
    text: "Обслуживание и развитие сетевой инфраструктуры",
    id: "",
    childElements: [
      { title: "Защищённые виртуальные сети", id: "", text: "" },
      { title: "Локальные сети", id: "", text: "" },
      { title: "Кабельные системы", id: "", text: "" },
      { title: "Техническая поддержка сетей", id: "", text: "" },
    ],
  },
  {
    icon: IconCatalog,
    title: "Инфраструктура и телеком",
    text: "Физическая и сетевая инфраструктура",
    id: "",
    childElements: [
      { title: "ЕСПД", id: "", text: "" },
      { title: "Wi-Fi", id: "", text: "" },
      { title: "Безопасный регион", id: "", text: "" },
      { title: "Конфигурирование сетевых решений", id: "", text: "" },
    ],
  },
  {
    icon: IconCatalog,
    title: "Техническое обслуживание",
    text: "Гарантийная и техподдержка оборудования и сервисов",
    id: "",
    childElements: [
      { title: "Гарантийное обслуживание", id: "", text: "" },
      { title: "Поддержка ГБУ МО МОМИАЦ", id: "", text: "" },
      { title: "Поддержка цифровых сервисов", id: "", text: "" },
      { title: "Техподдержка ИС (прочее)", id: "", text: "" },
    ],
  },
  {
    icon: IconCatalog,
    title: "УД МТСО",
    text: "Материально-техническое и хозяйственное обеспечение",
    id: "",
    childElements: [
      { title: "ДМС и ИС, канцтовары и техника", id: "", text: "" },
      { title: "Печатная продукция", id: "", text: "" },
      { title: "Средства ИКТ, растения", id: "", text: "" },
      { title: "Транспорт, МТО", id: "", text: "" },
    ],
  },
]

const Catalog = () => {
  return <div className="absolute">Catalog</div>
}

export default Catalog
