import imgOverview from "../../assets/aboutus/itemOverview/itemoverview.png"
import imgCover from "../../assets/aboutus/itemOverview/cover.gif"

import imgRoom1 from "../../assets/aboutus/itemOverview/room1.gif"
import imgRoom2 from "../../assets/aboutus/itemOverview/room2.gif"
import imgRoom3 from "../../assets/aboutus/itemOverview/room3.gif"

import imgItem1 from "../../assets/aboutus/itemOverview/item1.png"
import imgItem2_1 from "../../assets/aboutus/itemOverview/item2.png"
import imgItem2_2 from "../../assets/aboutus/itemOverview/item2.1.png"
import imgItem3_1 from "../../assets/aboutus/itemOverview/item3.png"
import imgItem3_2 from "../../assets/aboutus/itemOverview/item3.1.png"
import imgItem4 from "../../assets/aboutus/itemOverview/item4.png"

import { Swiper, SwiperSlide } from "swiper/react" 
import { Navigation, Pagination } from "swiper/modules"
import { useRef } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { LeftOutlined, RightOutlined } from "@ant-design/icons"

export default function ItemOverview() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    const functionalArea = [
        {
            id: 1,
            img: imgRoom1,
            title: "Khu tiếp đón & tư vấn",
            desc: "Tập trung chuỗi tiện ích đa dạng và phong phú bao gồm khu Onsen với 8 phòng tắm khoáng nóng trong nhà và ngoài trời diện tích lên tới 800m2, chuỗi 10 phòng xông hơi Jjim Jil Bang kết hợp spa & massage cao cấp, nhà hàng Gasuto, hội trường lớn Hikari và phòng giải trí Asahi Club hiện đại.",
        },
        {
            id: 2,
            img: imgRoom2,
            title: "Khu chăm sóc - điều dưỡng",
            desc: "Giữa lòng thành phố ồn ào, náo nhiệt, sân thượng Trường Xuân như một ốc đảo xanh mát, thanh bình. Nơi đây là sự kết hợp hài hòa giữa không gian trong lành của vườn Nhật trên cao, khu cafe sân vườn cùng không gian khép kín, riêng tư bên trong với phòng tâm linh Thường Chiếu, phòng yoga Bạch Hạc.",
        },
        {
            id: 3,
            img: imgRoom3,
            title: "Khu sinh hoạt chung",
            desc: "Các căn hộ cao cấp được thiết kế theo phong cách độc đáo, diện tích lên tới 65m2, mang đến cho cư dân nhiều đặc quyền như: Chế độ chăm sóc 24/7 với quản gia riêng, cá nhân hóa lịch sinh hoạt và chế độ dinh dưỡng, dịch vụ y tế đặc biệt cùng hệ tiện ích nghỉ dưỡng chất lượng cao.",
        },
    ] 

    return (
        <div className="flex flex-col mx-auto bg-gray-100">
            <div className="relative w-full">
                <img 
                    src={imgCover} 
                    alt="" 
                    className="w-full h-auto object-cover"
                />
                <h1 className="
                        absolute 
                        bottom-3 left-3 
                        sm:bottom-6 sm:left-6 
                        text-white/100 font-bold 
                        text-2xl
                        sm:text-3xl 
                        md:text-4xl
                        lg:text-5xl
                        px-2 py-1
                        sm:px-4 sm:py-2 
                        rounded
                    "
                >
                    CƠ SỞ VẬT CHẤT
                </h1>
            </div>

            {/* Mở đầu */}
            <div className="flex flex-col mx-auto p-5 w-[90%]">
                <p className="text-lg text-black ">
                    Với tâm niệm mang đến một môi trường phục hồi lý tưởng, chúng tôi đã chú trọng đầu tư vào hệ thống cơ sở vật chất hiện đại, được thiết kế đồng bộ và tối ưu hóa cho công tác điều trị. Không gian tại đây luôn đảm bảo tiêu chuẩn vệ sinh khắt khe, sự thông thoáng và tính an toàn tuyệt đối. Mọi trang thiết bị và khu vực chức năng đều được xây dựng dựa trên các tiêu chuẩn y tế quốc tế, cam kết đáp ứng trọn vẹn nhu cầu chăm sóc sức khỏe chuyên sâu, mang lại sự an tâm tối đa cho người bệnh và những điều kiện sống tốt nhất cho người cao tuổi.
                </p>
                <img 
                    src={imgOverview}
                    alt="overview"
                    className="w-[90%] md:w-[50%] h-auto mx-auto" 
                />
            </div>

            {/* Tổng quan */}
            <div className="w-[90%] mx-auto">
                <h2 className="text-[rgb(1,79,29)] text-2xl font-bold">
                    Tổng quan cơ sở
                </h2>
                <p className="text-lg ">
                    Cơ sở của chúng tôi tự hào sở hữu lối kiến trúc hiện đại, được thiết kế dựa trên các nguyên tắc khoa học nhằm tối ưu hóa công năng sử dụng. Không gian tại đây không chỉ dừng lại ở sự thoáng đãng, xanh mát mà còn được tính toán kỹ lưỡng để mang lại cảm giác thư thái, gần gũi như chính ngôi nhà của mình. Mọi khu vực từ phòng nghỉ dưỡng đến hành lang đều được bố trí hợp lý, tạo điều kiện thuận lợi nhất cho quá trình di chuyển, chăm sóc và phục hồi sức khỏe của người bệnh. Đặc biệt, chúng tôi thiết lập một quy trình vệ sinh và kiểm soát nhiễm khuẩn nghiêm ngặt, thực hiện định kỳ mỗi ngày nhằm kiến tạo một môi trường sống an toàn tuyệt đối, giúp quý khách hàng và gia đình hoàn toàn an tâm khi gửi gắm niềm tin.
                </p>
            </div>

            {/* Khu vực chức năng */}
            <div className="w-[90%] mx-auto">
                <h2 className="text-[rgb(1,79,29)] text-2xl font-bold">
                    Khu vực chức năng
                </h2>
                <div>
                    {functionalArea.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center py-5"
                        >
                            <div className="">
                                <h3 className="text-xl text-[rgb(1,79,29)] font-bold text-center">
                                    {item.title}
                                </h3>
                                <p className="text-lg">
                                    {item.desc}
                                </p>
                            </div>
                            <img 
                                src={item.img} 
                                alt="imgRoom"
                                className="w-[80%] h-auto md:w-[50%] md:h-auto" 
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Trang thiết bị */}
            <div className="w-[90%] mx-auto">
                <h2 className="text-[rgb(1,79,29)] text-2xl font-bold mb-5">
                    Trang thiết bị
                </h2>
                <p className="text-lg pb-2">
                    Bệnh viện chúng tôi được đầu tư cơ sở vật chất khang trang, hiện đại, đáp ứng đầy đủ các tiêu chuẩn trong khám và điều trị y tế. Không gian được thiết kế khoa học, sạch sẽ và thân thiện, tạo sự thoải mái cho người bệnh trong suốt quá trình thăm khám và chăm sóc sức khỏe.
                    Hệ thống trang thiết bị và khu điều trị luôn được kiểm tra, bảo trì định kỳ, góp phần nâng cao chất lượng điều trị và đảm bảo an toàn cho người bệnh. Với định hướng lấy người bệnh làm trung tâm, bệnh viện không ngừng hoàn thiện môi trường y tế chuyên nghiệp, tận tâm và đáng tin cậy.
                </p>
                <div className="relative w-[70%] mx-auto">
                    {/* Prev Button */}
                    <button
                        ref={prevRef} 
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300 shadow-md rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        <LeftOutlined />
                    </button>
                    {/* Next Button */}
                    <button
                        ref={nextRef} 
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300 shadow-md rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        <RightOutlined />
                    </button>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        className="px-14"
                    >
                        {/* item 1 */}
                        <SwiperSlide>
                            <li className="bg-gray-100 border-2 border-[rgb(1,79,29)] rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-center min-h-[320px]">
                                <p className="md:w-1/3 text-lg font-semibold mb-4 md:mb-0">
                                    Giường y tế chuyên dụng cho người bệnh
                                </p>
                                <img 
                                    src={imgItem1} 
                                    alt="item1" 
                                    className="w-[250px] md:w-[250px] h-auto rounded-lg object-cover"
                                />
                            </li>
                        </SwiperSlide>
                        
                        {/* item 2 */}
                        <SwiperSlide>
                            <li className="bg-gray-100 border-2 border-[rgb(1,79,29)] rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-center min-h-[320px]">
                                <p className="md:w-1/3 text-lg font-semibold text-gray-800 mb-4 md:mb-0">
                                    Xe lăn, cáng di chuyển an toàn
                                </p>
                                <div className="flex gap-4">
                                    <img 
                                        src={imgItem2_1} 
                                        alt="" 
                                        className="w-[250px] md:w-[250px] h-auto rounded-lg object-cover"
                                    />
                                    <img 
                                        src={imgItem2_2} 
                                        alt="" 
                                        className="w-[250px] md:w-[250px] h-auto rounded-lg object-cover"
                                    />
                                </div>
                            </li>
                        </SwiperSlide>
                        
                        {/* item 3 */}
                        <SwiperSlide>
                            <li className="bg-gray-100 border-2 border-[rgb(1,79,29)] rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-center min-h-[320px]">
                                <p className="md:w-1/3 text-lg font-semibold text-gray-800 mb-4 md:mb-0">
                                    Thiết bị đo huyết áp, nhịp tim, SpO₂
                                </p>
                                <div className="flex gap-4">
                                    <img 
                                        src={imgItem3_1} 
                                        alt="" 
                                        className="w-[250px] md:w-[250px] h-auto rounded-lg object-cover"
                                    />
                                    <img 
                                        src={imgItem3_2} 
                                        alt="" 
                                        className="w-[250px] md:w-[250px] h-auto rounded-lg object-cover"
                                    />
                                </div>
                            </li>
                        </SwiperSlide>
                        
                        {/* item 4 */}
                        <SwiperSlide>
                            <li className="bg-gray-100 border-2 border-[rgb(1,79,29)] rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-center min-h-[320px]">
                                <p className="md:w-1/3 text-lg font-semibold text-gray-800 mb-4 md:mb-0">
                                    Dụng cụ hỗ trợ phục hồi chức năng
                                </p>
                                <img 
                                    src={imgItem1} 
                                    alt="" 
                                    className="w-[250px] md:w-[250px] h-auto rounded-lg object-cover"
                                />
                            </li>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}