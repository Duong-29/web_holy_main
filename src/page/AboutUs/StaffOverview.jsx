import imgStaff from "../../assets/nurse/doctor2.png"
import CountUp from "react-countup"
import { motion } from "framer-motion"

export default function StaffOverview() {
    const overviewData = [
        {
            number: 4,
            duration: 1,
            position: "Giáo sư, Phó giáo sư",
        },
        {
            number: 25,
            duration: 2,
            position: "Tiến sĩ, bác sỹ chuyên khoa II",
        },
        {
            number: 77,
            duration: 3,
            position: "Thạc sĩ, bác sĩ chuyên khoa I",
        },
        {
            number: 471,
            duration: 4,
            position: "Bác sĩ và điều dưỡng viên trình độ Đại học",
        },
    ]

    const styles = {
        numberStaff: `text-4xl font-bold font-mono`,
        position: `text-xl font-bold font-sans`,
    }
    
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white w-[90%] mx-auto p-[50px] gap-12">
            <img 
                src={imgStaff}
                alt="Staff" 
                className="
                    h-auto w-[90%] 
                    md:h-[480px] md:w-[550px]
                    flex-shrink-0
                "
            />

            <div className="flex flex-col items-start justify-center">
                <h3 className="text-2xl md:text-3xl text-[rgb(1,79,29)] font-bold pb-5">
                    Nhân sự chất lượng
                </h3>
                <p className="text-base pb-10">
                    Nằm trong khuôn viên Tổ hợp Y tế Phương Đông, Phương Đông Asahi thừa hưởng đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng viên dày dặn kinh nghiệm, được đào tạo bài bản và chuyên sâu tại Việt Nam cùng các quốc gia có nền y học phát triển trên thế giới.  
                </p>

                <div className="w-fit">
                    {overviewData.map((item,index) => (
                        <div key={index}>
                            <div className="grid grid-cols-[80px_1fr] items-center gap-4">
                                <h3 className={styles.numberStaff}>
                                    <CountUp end={item.number} duration={item.duration}/>
                                </h3>
                                <p className={styles.position}>
                                    {item.position}
                                </p>
                            </div>

                            {index !== overviewData.length -1 && (
                                <div className="w-full border-b-2 border-black mt-5"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )    
}