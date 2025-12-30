import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import LogoPath from "../../assets/logo.png"
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
    const navLinks = [
        { path: '/', label: 'TRANG CHỦ' },
        { path: '/AboutUs', label: 'GIỚI THIỆU' },
        { path: '/News', label: 'TIN TỨC' },
        { path: '/nurse_list', label: 'HỘ LÝ' },
        { path: '/Partner', label: 'ĐỐI TÁC' },
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
            text-base
            transition duration-300
            border-b-4
            pb-1
            mx-2
            ${
                isActive
                    ? `border-blue-500 text-blue-500`
                    : `border-transparent hover:border-blue-500 hover:text-blue-500`
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
            bg-white
            shadow-md  
            top-0
            z-50
            pb-2
            select-none
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
                
                {/* Logo */}
                <div className="md:hidden">
                    <MenuOutlined
                        className={styles.menuIcon}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>

                <div 
                    className={styles.logoContainer}
                    onClick={handleBackHomePage}    
                >
                    <img 
                        src={LogoPath} 
                        alt="HL Career- Dịch vụ hỗ trợ chăm sóc người già"
                        className={styles.logoImage} 
                    />
                </div>

                {/* Navbar */}
                <nav className={`${styles.desktopNavbar}bg-white p-4 text-black font-bold`}>
                    <ul className="flex item-center space-x-[80px]">
                        {navLinks.map((link) => (
                            <li key={link.path}>
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
                
                {/* Hộ lý */}
                <div className="flex items-center gap-6">
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
                navLink={navLinks}
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                currentPath={currentPath}
            />
        </>
    )
}