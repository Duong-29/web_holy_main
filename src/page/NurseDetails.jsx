import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import DoctorPath1 from "../assets/nurse/doctor.png"
import VideoTest from "../assets/services/videotest.mp4"


export default function NurseDetails() {
    const { id } = useParams();
    const [activeSkill, setActiveSkill] = useState(null)
    const videoRef = useRef(null)
    useEffect(() => {
        if (activeSkill && videoRef.current) {
            videoRef.current.load(); // Tải lại video mới
            videoRef.current.play().catch(error => {
                console.log("Trình duyệt chặn tự động phát có âm thanh:", error);
            });
        }
    }, [activeSkill]);

    const nurses = [
        {
            id: 1,
            name: "Nguyễn Văn Hưng",
            age: 30,
            experience: 6,
            services: ["Tắm rửa", "Cho ăn", "Đi lại", "Xoa bóp"],
            image: DoctorPath1,
            skills: [
                {
                    id: 1,
                    name: "Tắm rửa",
                    video: VideoTest,
                },
                {
                    id: 2,
                    name: "Cho ăn",
                    video: "/videos/skill-physio.mp4",
                },
            ],
            reviews: [
                { id: 1, star: 5, comment: "Hộ lý rất tận tâm" },
                { id: 2, star: 4, comment: "Làm việc chuyên nghiệp" },
            ],
        },
        {
            id: 2,
            name: "Trần Thị Hương",
            age: 35,
            experience: 10,
            services: ["Tắm rửa", "Đo huyết áp"],
            image: "/nurse-2.jpg",
            skills: [
                {
                    id: 1,
                    name: "Đo huyết áp",
                    video: "/videos/physio.mp4",
                },
                {
                    id: 2,
                    name: "Tắm rửa",
                    video: "/videos/daily.mp4",
                },
            ],
            reviews: [
                { id: 1, star: 5, comment: "Rất nhẹ nhàng, kiên nhẫn" },
                { id: 2, star: 5, comment: "Gia đình tôi rất hài lòng" },
            ],
        },
        {
            id: 3,
            name: "Lê Văn Thắng",
            age:40,
            experience: 7,
            services: ["Cho ăn", "Vệ sinh cá nhân", "Thay bỉm"],
            image: "/nurse-3.jpg",
            skills: [
                {
                    id: 1,
                    name: "Thay bỉm",
                    video: "/videos/mental.mp4",
                },
                {
                    id: 2,
                    name: "Vệ sinh cá nhân",
                    video: "/videos/medicine.mp4",
                },
            ],
            reviews: [
                { id: 1, star: 4, comment: "Thái độ tốt, đúng giờ" },
                { id: 2, star: 4, comment: "Cần thêm kinh nghiệm thực tế" },
            ],
        },
    ]

    const styles = {
        pageWrapper: `flex flex-col gap-4`,
        nurseCard: `flex items-center gap-4 bg-white rounded-lg shadow border-2 p-4 cursor-pointer`,
        nurseImage: `w-[200px] h-[200px] object-cover rounded-md`,
        nurseInfo: `flex flex-col gap-1`,
        nurseName: `text-lg font-semibold`,
        nurseAge: `text-sm text-gray-600`,
        nurseExperience: `text-sm text-gray-600`,
        sectionTitle: `text-lg font-semibold text-gray-700 mb-3 pl-5`,
        serviceList: `flex flex-wrap gap-2`,
        serviceItem: `px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full`,
        skillList: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-fit pl-5 `,
        skillItem: `w-fit px-4 py-3 bg-white rounded-full cursor-pointer hover:bg-blue-200 transition`,
        
        modalOverlay:`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] transition-opacity`,
        videoContainer:`relative w-[90%] md:w-1/2 bg-black rounded-2xl overflow-hidden shadow-2xl`,
        video:`w-full aspect-video shadow-lg`,
        closeButton: `absolute top-4 right-4 text-white text-3xl z-10 hover:text-red-500 transition cursor-pointer`,
    }

    const nurse = nurses.find((n) => n.id === Number(id));
    if (!nurse) {
        return <p>Không tìm thấy hộ lý</p>
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.nurseCard}>
                <img 
                    src={nurse.image} 
                    alt={nurse.name}
                    className={styles.nurseImage}
                />

                <div className={styles.nurseInfo}>
                    <h2 className={styles.nurseName}>{nurse.name}</h2>
                    <p className={styles.nurseAge}>Tuổi: {nurse.age}</p>
                    <p className={styles.nurseExperience}>Kinh nghiệm: {nurse.experience} năm</p>
                </div>
            </div>

            <section>
                <h3 className={styles.sectionTitle}>Dịch vụ cung cấp</h3>
                <p className="text-gray-500 mb-4 italic text-sm pl-5">Nhấn vào từng kỹ năng để xem video minh họa</p>
                <div className={styles.skillList}>
                    {nurse.skills?.map((skill) => (
                        <div
                            key={skill.id}
                            className={styles.skillItem}
                            onClick={() => setActiveSkill(skill)}
                        >
                            {skill.name}
                        </div>
                    ))}
                </div>
            </section>

            {activeSkill && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setActiveSkill(null)}
                >
                    <div
                        className={styles.videoContainer}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={styles.closeButton}
                            onClick={() => setActiveSkill(null)}
                        >
                        </button>

                        <div className="p-2 bg-gray-800 text-white text-center font-bold">
                            Kỹ năng: {activeSkill.name}
                        </div>
                        <video 
                            src={activeSkill.video}
                            controls
                            autoPlay
                            className="w-full h-auto"
                        >
                        </video>
                    </div>
                </div>
            )}  
        </div>
    )
}