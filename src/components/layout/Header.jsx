import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoPath from "../../assets/logoxtp.jpg"
import { MenuOutlined } from "@ant-design/icons";
import MobileNavbar from "./MobileNavbar";
import { useAuth } from "../../context/AuthContext";
import UserDropdown from "../../pageUserDropdown/UserDropdown";
import NotificationBell from "./NotificationBell";

export default function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const leftLinks = [
        { path: '/', label: 'TRANG CHỦ' },
        { path: '/AboutUs', label: 'GIỚI THIỆU' },
        { path: '/Service', label: 'DỊCH VỤ CHĂM SÓC'},
        { path: '/nurse_list', label: 'ĐÀO TẠO' },
    ]
    
    const rightLinks = [
        { path: '/Partner', label: 'BỆNH VIỆN LIÊN KẾT' },
        { path: '/Career', label: 'TUYỂN DỤNG' },
        { path: '/News', label: 'TIN TỨC' },
        { path: '/ContactUs', label: 'LIÊN HỆ' },
    ];

    // Quay về trang chủ
    const handleBackHomePage = () => {
        window.location.href = "/"
    }
    

    // -> Web của hộ lý
    const [localLoading, setLocalLoading] = useState(false)
    const handleSelect = (path, text) => {
        setLocalLoading(true)
        const delay = [1000, 2000]
        setTimeout(() => {
            navigate(path)
            setLocalLoading(false)
        }, delay[Math.floor(Math.random() * delay.length)])
    }
    // test refresh token
    const handleRefreshToken = async () => {
        try {

            const res = await fetch(
                "https://web-ho-ly.onrender.com/user/refresh_access",
                {
                    method: "GET",
                    credentials: "include"
                }
            )

            const data = await res.json()

            if (!res.ok) {
                console.error(data)
                alert("Refresh token thất bại");
                return;
            } 
            localStorage.setItem("access_token", data.access_token);
            alert("Refresh token thành công 🎉");
            console.log("New access token:", data.access_token);
        } catch (err) {
                console.error(err)
                alert("Loi refresh")
            }
    }

    const getLinkClass = (path) => {
        const isActive = currentPath ===path;
        return `
            relative
            h-full
            flex
            items-center
            font-oswald
            transition
            duration-300
            px-2
            whitespace-nowrap
            ${
                isActive
                    ? `border-yellow-500 text-yellow-500`
                    : `border-transparent hover:border-yellow-500 hover:text-yellow-500`
            }
        `;
    }

    const styles = {
        header: `
            fixed
            w-full
            flex
            md:flex-row                    
            items-center
            justify-between
            px-5
            h-[90px]
            bg-[rgb(1,79,29)]
            shadow-md  
            top-0
            z-50
            pb-2
            select-none
            relative
            `,
        logoContainer: `
            flex
            md:flex-none
            justify-center
            md:justify-start
            cursor-pointer
        `,
        titleHeader:`
            text-green-500          // Chữ xanh
            font-extrabold          // Chữ đậm
            text-[25px]             // cỡ chữ 
            cursor-pointer
            max-w-[200px]
        `,
        authButton: `
            min-w-50 
            py-3 px-5 
            text-red-500 
            font-bold
            transition duration-300
            underline
            pb-1
        `,
        logoImage: `
            h-[90px]
            w-auto
        `,
        menuIcon: `
            text-2xl
            cursor-pointer
            md:hidden
        `,
        desktopNavbar: `
            hidden
            md:block
        `,

    }

    return (
        <>
            <div className={styles.header}>
                
                {/* Logo Menu Mobile*/}
                <div className="md:hidden flex items-center w-full relative h-[60px]">
                    <MenuOutlined
                        className={`${styles.menuIcon} z-20`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />

                    <div
                        className="absolute left-1/2 -translate-x-1/2 cursor-pointer z-10 pointer-events-auto"
                        onClick={handleBackHomePage}
                    >
                        <img 
                            src={LogoPath} 
                            alt="Logo"
                            className="h-[50px] w-auto max-w-[120px]" 
                        />
                    </div>

                    <div className="ml-auto flex items-center gap-3 z-20">
                        {!user ? (
                            <button
                                onClick={() => navigate("/AuthPage", {
                                    state: { from: currentPath }
                                })}
                                className="text-red-500 font-semibold text-sm"
                            >
                                Đăng nhập
                            </button>
                        ) : (
                            <>
                                <NotificationBell />
                                <UserDropdown />
                            </>
                        )}
                    </div>
                </div>

                {/* Navbar */}
                <nav className="
                    hidden md:flex
                    absolute left-1/2 -translate-x-1/2
                    w-[90%] max-w-[1400px]
                    h-full
                    items-center
                    justify-center
                    text-white
                    font-medium"
                >
                    <ul className="flex h-full items-center gap-6">
                        {leftLinks.map((link) => (
                            <li key={link.path} className="h-full flex items-center">
                                <button 
                                    onClick={() => handleSelect(link.path)}
                                    className={getLinkClass(link.path)}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}

                        {/* logo */}
                        <li
                            className="mx-8 flex items-center cursor-pointer flex-shrink-0"
                            onClick={handleBackHomePage}
                        >
                            <img
                                src={LogoPath}
                                alt="HL Career Logo"
                                className={styles.logoImage}
                            />
                        </li>

                        {rightLinks.map((link) => (
                            <li key={link.path} className="h-full flex items-center">
                                <button 
                                    onClick={() => handleSelect(link.path)}
                                    className={getLinkClass(link.path)}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                {/* Auth */}
                <div className="hidden md:flex absolute right-5 items-center gap-6">
                    {/* test */}
                    {/* 
                    {user && (
                        <button
                            onClick={handleRefreshToken}
                            className="px-3 py-1 text-sm border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition"
                        >
                            Refresh Token
                        </button>
                    )}
                    */}

                    {!user ? (
                        <button
                            onClick={() => 
                                navigate("/AuthPage", {
                                    state: { from: currentPath }
                                })
                            }
                            className={styles.authButton}
                        >
                            Đăng nhập
                        </button>
                    ) : (
                        <>
                            <NotificationBell />
                            <UserDropdown />
                        </>
                    )}
                </div>
            </div>
            
            <MobileNavbar
                navLink={[...leftLinks, ...rightLinks]}
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                currentPath={currentPath}
            />
        </>
    )
}