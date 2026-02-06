import { useLocation, useNavigate } from "react-router-dom";
import { Children, useState } from "react";
import LogoPath from "../../assets/logoxtp.png"
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
        { 
            path: '/AboutUs', 
            label: 'GIỚI THIỆU',
            children: [
                { path: '/AboutUs/StaffOverview', label: 'Đội ngũ nhân sự'},
                { path: '/AboutUs/ItemOverview', label: 'Cơ sỏ vật chất' },
            ]
        },
        { 
            path: '/Service/HomeCare', 
            label: 'DỊCH VỤ CHĂM SÓC',
            children: [
                { path: '/Service/HomeCare', label: 'Chăm sóc tại nhà' },
                { path: '/Service/HospitalCare', label: 'Chăm sóc tại viện' },
                { path: '/Service/OldPersonCare', label: 'Chăm sóc người cao tuổi' },
            ]
        },
        { path: '/Training', label: 'ĐÀO TẠO' },
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
            top-0
            left-0
            w-full
            h-[90px]
            flex
            items-center
            justify-between
            px-5
            bg-[rgb(1,79,29)]
            z-50
            border-b-[3px]
            border-yellow-500
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
            h-[80px]
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
            <div className="relative w-full">

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
                                <li 
                                    key={link.path} 
                                    className="relative h-full flex items-center group"
                                >
                                    {/* Menu */}
                                    <button 
                                        onClick={() => handleSelect(link.path)}
                                        className={getLinkClass(link.path)}
                                    >
                                        {link.label}
                                    </button>

                                    {/* Menu con */}
                                    {link.children && (
                                        <ul
                                            className="
                                                absolute
                                                top-full
                                                left-0
                                                mt-2
                                                bg-[rgb(1,79,29)]
                                                min-w-[220px]
                                                group-hover:opacity-100
                                                group-hover:visible
                                                invisible
                                                opacity-0
                                                shadow-lg
                                                rounded-md
                                                transition-all
                                                duration-200
                                                z-50
                                            "
                                        >
                                            {link.children.map((child) => (
                                                <button
                                                    onClick={() => handleSelect(child.path)}
                                                    className="
                                                        block
                                                        w-full
                                                        text-left
                                                        px-4
                                                        py-3
                                                        text-sm
                                                        text-white
                                                        hover:text-yellow-500
                                                        transition
                                                        border-b-2
                                                    "
                                                >
                                                    {child.label}
                                                </button>
                                            ))}
                                        </ul>
                                    )}
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