import React from "react";
import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";

const MobileNavbar = ({ navLink, isOpen, onClose, currentPath }) => {
    const navigate = useNavigate()
    const styles = {
        overlay: `
            fixed
            top-0
            left-0
            h-full
            w-64
            bg-white
            shadow-xl
            z-50
            transform
            transition-transform
            duration-300
            md:hidden
        `,
        menuHeader: `
            p-5 
            border-b 
            flex 
            justify-between 
            items-center 
            h-[90px]
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
            block 
            w-full 
            py-4 
            px-6 
            text-left 
            text-lg 
            font-semibold 
            transition 
            duration-300
        `,
        // Style khi link đang active (trang hiện tại)
        linkActive: `
            bg-blue-100 
            text-blue-700
        `,
        // Style khi link không active và hover
        linkInactive: `
            text-gray-800 
            hover:bg-gray-100
        `,
    };

    const getMobileLinkClass = (path) => {
        const isActive = currentPath === path
        return `${styles.linkBase} ${isActive ? styles.linkActive : styles.linkInactive}`;
    };

    return (
        <div
            className={`${styles.overlay} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className={styles.menuHeader}>
                <h3 className={styles.menuTitle}>Menu</h3>
                <CloseOutlined className={styles.closeIcon} onClick={onClose} />
            </div>

            <ul className={styles.linkList}>
                {navLink.map((link) => (
                    <li key={link.path} onClick={onClose}>
                        <a 
                            onClick={() => navigate(`${link.path}`)}
                            className={getMobileLinkClass(link.path)}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default MobileNavbar