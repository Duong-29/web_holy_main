import React from "react";
import { useNavigate } from "react-router-dom";
import LogoPath from "../../assets/logoxtp.jpg"
import backgroundMenu from "../../assets/backgroundMenu.png"
import { useState, useEffect } from "react";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

const MobileNavbar = ({ navLink, isOpen, onClose, currentPath }) => {
    const navigate = useNavigate()
    const [openSubMenu, setOpenSubMenu] = useState(null)

    useEffect(() => {
        const index = navLink.findIndex(
            (link) => 
                link.children &&
                link.children.some(child =>
                    currentPath.startsWith(child.path)
                )
        )
        if (index !== -1) setOpenSubMenu(index)
    }, [currentPath, navLink])
    
    const styles = {
        menu: `
            fixed
            top-0
            left-0
            h-full
            w-[65%]
            shadow-xl
            z-[70]
            transform
            transition-transform
            duration-300
            md:hidden
            bg-cover
            bg-center
        `,
        menuHeader: `
            p-5 
            flex 
            justify-center
            items-center 
            h-[100px]
            border-b
            border-yellow-500
        `,
        logo: `
            h-[60px]
            w-auto
            cursor-pointer
        `,
        // Style cho tiêu đề menu
        menuTitle: `
            text-xl 
            font-bold
        `,
        // Style cho icon đóng
        closeIcon: `
            text-xl 
            cursor-pointer
        `,
        // Container chứa danh sách link
        linkList: `
            flex 
            flex-col 
            mt-2
        `,
        // Style cơ bản cho mỗi link item
        linkBase: `
            flex items-center justify-between
            w-full 
            py-4 
            px-6 
            text-left 
            text-sm

            border-b
            border-1
            border-yellow-500

            text-white
            font-oswald
            font-bold
            transition 
            duration-300
        `,
        // Style khi link đang active (trang hiện tại)
        linkActive: `
            bg-blue-100 
            text-yellow-700
        `,
        // Style khi link không active và hover
        linkInactive: `
            text-gray-800 
            hover:text-yellow-500
        `,
        subMenu: `bg-black/40`,
        subLink: `
            block w-full text-left
            py-3 pl-10 pr-6
            text-sm text-white
            border-b border-yellow-500/50
        `,
    };

    const toggleSubMenu = (index) => {
        setOpenSubMenu(openSubMenu === index ? null : index)
    }

    const getMobileLinkClass = (path) => {
        const isActive = currentPath === path
        return `${styles.linkBase} ${isActive ? styles.linkActive : styles.linkInactive}`;
    };

    if (!isOpen) return null;

    return (
       <>
            {/* backdrop */}
            <div
                className="fixed inset-0 bg-black/70 z-[60] md:hidden"
                onClick={onClose}
            />

            {/* Menu */}
            <div
                className={`${styles.menu} translate-x-0`}
                style={{
                    backgroundImage: `url(${backgroundMenu})`
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.menuHeader}>
                    <img 
                        src={LogoPath} 
                        alt="Logo"
                        className={styles.logo}
                        onClick={() => {
                            navigate("/")
                            onClose()
                        }} 
                    />
                </div>

                <ul className={styles.linkList}>
                    {navLink.map((link, index) => {
                        const hasChildren = link.children?.length >0
                        const isOpenSub = openSubMenu === index
                        const isActive = currentPath === link.path

                        return (
                            <li key={index}>
                                <div
                                    className={`${styles.linkBase} ${
                                        isActive
                                            ? styles.linkActive
                                            : styles.linkInactive
                                    }`}
                                >
                                    <button
                                        className="text-left pr-4 flex-grow"
                                        onClick={() => {
                                            navigate(link.path);
                                            onClose()
                                        }}
                                    >
                                        {link.label}
                                    </button>

                                    {hasChildren && (
                                        <button
                                            className="shrink-0 ml-auto p-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleSubMenu(index)
                                            }}
                                        >
                                            <span
                                                className={`
                                                    inline-flex
                                                    transition-transform
                                                    duration-500
                                                    ${isOpenSub ? "rotate-180" : "rotate-0"}
                                                `}
                                            >
                                                <DownOutlined />
                                            </span>
                                        </button>
                                    )}
                                </div>

                                {hasChildren && isOpenSub && (
                                    <ul className={styles.subMenu}>
                                        {link.children.map((child) => (
                                            <li key={child.path}>
                                                <button
                                                    className={styles.subLink}
                                                    onClick={() => {
                                                        navigate(child.path);
                                                        onClose();
                                                        setOpenSubMenu(null)
                                                    }}
                                                >   
                                                    {child.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
       </>
    );
};
export default MobileNavbar