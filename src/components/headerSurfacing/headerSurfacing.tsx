import React, { useEffect, useState } from "react"
import { UserData } from "../../types/userData"
import { useNavigate } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { localStore } from "../../stores/localStore"
import Close from "@mui/icons-material/Close"
import Info from "@mui/icons-material/Info"
import Logout from "@mui/icons-material/Logout"
import Person from "@mui/icons-material/Person"

const menuItems = [
  {
    icon: <Person fontSize="small" />,
    text: "Кабинет сотрудника",
    badge: null,
  },
  {
    icon: <Info fontSize="small" />,
    text: "Справка",
    badge: null,
  },
]

const footerLinks = [{ text: "Правила и рекомендации" }, { text: "Политика конфиденциальности" }]

const HeaderSurfacing = observer(({ onClose }: { onClose: () => void }) => {
  const [userData, setUserData] = useState<UserData | null>(null)

  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStore.userData
    setUserData(userData)
  }, [localStore.userData])

  const handleLogout = () => {
    onClose()
    localStorage.clear()
    localStore.setUserData({
      login: "",
      user_id: "",
      desc: "",
      email: "",
      phone: "",
      adr: "",
      org: "",
      org_id: "",
      permission_department: false,
    })
    navigate("/auth")
  }

  return (
    <div
      className="absolute right-4 top-4 w-[340px] rounded-md border bg-white shadow z-50 mt-12"
      style={{
        borderColor: "var(--color-border-light)",
        backgroundColor: "var(--color-white2)",
        boxShadow: "0px 4px 20px var(--color-shadow)",
      }}
    >
      <div className="p-8 pt-8 pb-4">
        <div className="flex items-center justify-between mb-4 relative">
          <div className="text-2xl font-medium leading-snug">
            {userData?.desc?.split(" ")[0]} <br /> {userData?.desc?.split(" ").slice(1).join(" ")}
          </div>
          <button
            className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700"
            aria-label="close"
          >
            {/* <Close fontSize="small" /> */}
          </button>
        </div>

        <div
          className="h-px my-4"
          style={{ backgroundColor: "var(--color-border-light)" }}
        />

        <div className="flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <div
              key={index}
              tabIndex={0}
              role="button"
              className="flex items-center h-10 px-4 rounded-2xl cursor-pointer transition-colors hover:bg-black/5 focus:bg-black/5 outline-none"
              onClick={onClose} // Закрыть окно при клике
            >
              <div className="min-w-[40px] flex justify-center">{item.icon}</div>
              <div className="flex-1 text-base">{item.text}</div>
              {item.badge && (
                <div
                  className="text-white h-[25px] rounded-full flex items-center justify-center px-2 text-sm font-medium"
                  style={{ backgroundColor: "var(--color-error)" }}
                >
                  {item.badge}
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="h-px my-4"
          style={{ backgroundColor: "var(--color-border-light)" }}
        />

        <div
          tabIndex={0}
          role="button"
          className="flex items-center h-10 px-4 rounded-2xl cursor-pointer transition-colors hover:bg-black/5 focus:bg-black/5 outline-none"
          onClick={handleLogout}
        >
          <div className="min-w-[40px] flex justify-center">
            <Logout fontSize="small" />
          </div>
          <button
            className="flex-1 text-base background-color: var(--color-white2);"
            // onClick={handleLogout}
          >
            Выйти
          </button>
        </div>

        <div
          className="h-px my-4"
          style={{ backgroundColor: "var(--color-border-light)" }}
        />

        <div className="px-2">
          <div
            className="text-sm font-medium mb-2"
            style={{ color: "var(--color-blue2)" }}
          >
            Пользователь ГКУ МО «МОЦ ИКТ»
          </div>
          {footerLinks.map((link, index) => (
            <button
              key={index}
              type="button"
              className="text-sm underline underline-offset-2 hover:underline block mb-1"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {link.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
})

export default HeaderSurfacing
