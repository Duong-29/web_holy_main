import { Helmet } from "react-helmet-async"
import imgService1 from "../assets/services/dv1.jpg"
import imgService2 from "../assets/services/dv2.png"
import imgService3 from "../assets/services/dv3.png"
import imgService4 from "../assets/services/dv4.png"
import imgService5 from "../assets/services/dv5.png"
import imgService6 from "../assets/services/dv6.png"

import imgPartner1 from "../assets/partner/BVDHY.png"
import imgPartner2 from "../assets/partner/BVK.png"
import imgPartner3 from "../assets/partner/BV_xanhpon.png"
import imgPartner4 from "../assets/partner/BVvietduc.png"
import imgPartner5 from "../assets/partner/cao-dang-y-te-asean.png"
import imgPartner6 from "../assets/partner/cao-dang-y-te-ha-dong.png"
import imgPartner7 from "../assets/partner/logo1.png"

import imgServiceRoom1 from "../assets/services/service5.png"
import imgServiceRoom2 from "../assets/services/service5.png"
import imgServiceRoom3 from "../assets/services/service5.png"
import imgServiceRoom4 from "../assets/services/service5.png"
import imgServiceRoom5 from "../assets/services/service5.png"
import imgServiceRoom6 from "../assets/services/service5.png"

import imgComment1 from "../assets/nurse/doctor.png"
import imgComment2 from "../assets/nurse/doctor2.png"
import imgComment3 from "../assets/nurse/doctor3.png"

import { useRef } from "react"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

export default function HomePage() {

    const services = [
        {id: 1, name: "Chăm sóc bệnh nhân 24/24", img: imgService1},
        {id: 2, name: "Chăm sóc bệnh nhân tại nhà", img: imgService2},
        {id: 3, name: "Chăm sóc người cao tuổi", img: imgService3},
        {id: 4, name: "Chăm sóc bệnh nhân tại bệnh viện", img: imgService4},
        {id: 5, name: "Chăm sóc bệnh nhân ung thư", img: imgService5},
        {id: 6, name: "Chăm sóc bệnh nhân tại Hà Nội", img: imgService6},
    ]

    const roomService = [
        {id: 1, name: "Xét nghiệm ung thư", img: imgServiceRoom1},
        {id: 2, name: "Khám tổng quát", img: imgServiceRoom2},
        {id: 3, name: "Khám sức khỏe cho doanh nghiệp", img: imgServiceRoom3},
        {id: 4, name: "Khám sức khỏe cho người lao động", img: imgServiceRoom4},
        {id: 5, name: "Chăm sóc tại bệnh viện", img: imgServiceRoom5},
        {id: 6, name: "Thuê thiết bị bệnh viện", img: imgServiceRoom6},
    ]

    const partners = [
        {id: 1, name:"Bệnh viện Đại học Y", img: imgPartner1},
        {id: 2, name:"Bệnh viện K", img: imgPartner2},
        {id: 3, name:"Bệnh viện Xanh-pon", img: imgPartner3},
        {id: 4, name:"Bệnh viện Việt Đức", img: imgPartner4},
        {id: 5, name:"Cao đẳng y tế Asean", img: imgPartner5},
        {id: 6, name:"Cao đẳng y tế Hà Đông", img: imgPartner6},
        {id: 7, name:"Phòng khám đa khoa Tre Việt", img: imgPartner7},
    ]

    const comments = [
        {id: 1, author: "Ông Tuấn Anh - 55 tuổi", content: "Sau khi trải nghiệm dịch vụ, gia đình tôi cảm thấy rất hài lòng. Nơi đây đáp ứng mọi yêu cầu từ phía bệnh nhân",img: imgComment1},
        {id: 2, author: "Ông Tiến Quang - 40 tuổi", content: "Tôi muốn gửi lời cảm ơn sâu sắc tới đội ngũ chăm sóc bệnh nhân của AnCare. Sự am hiểu và tình cảm mà các nhân viên đã thể hiện, thực sự làm cho trải nghiệm của gia đình tôi trở nên đáng nhớ. Giúp gia đình chúng tôi qua thời điểm khó khăn tại Bệnh viện, dịch vụ chăm sóc bệnh nhân của AnCare rất tốt",img: imgComment2},
        {id: 3, author: "Anh Hải - 25 tuổi", content: "Khi các con tôi vắng mặt, sự chăm sóc tận tâm của các bạn điều dưỡng ở AnCare cho tôi cảm giác như được người thân trong gia đình ở bên, quan tâm đến từng bữa ăn giấc ngủ hàng ngày. Tôi hy vọng các bạn sẽ mang dịch vụ tuyệt vời này đến cho nhiều người hơn nữa, cảm ơn AnCare.",img: imgComment3},
    ]

    const styles = {
        mainContainer: `
            w-full
            flex-grow
            p-0
            bg-blue-100
        `,
        container1: `
            flex
            flex-col
            md:flex-row
            justify-center
            items-center
            py-16
            px-5
            md:px-10
            pt-[90px]
        `,
        titleColumn: `
            w-full
            md:w-2/5
            pr-0
            md:pr-8
            mb-8
            text-center
            md:text-left
            
        `,
        subTitle: `
            text-5xl
            font-light
            text-blue-700
            block
            leading-tight
        `,
        mainTitle: `
            text-5xl 
            md:text-7xl 
            font-extrabold 
            text-blue-600 
            block 
            mt-2
        `,
        contentColumn: `
            w-3/5 
            pl-0
            md:pl-8
            border-l-0 
            md:border-l-2 
            border-black
        `,
        mainText: `
            text-lg 
            text-gray-800 
            mb-4 
            leading-relaxed
        `,
        subText: `
            text-lg 
            text-gray-600 
            leading-relaxed
        `,

        container2: `
            grid
            grid-cols-1
            sm:grid-cols-3
            lg:grid-cols-3
            gap-6
            p-[50px]
        `,
        itemCard: `
            flex
            flex-col
            items-center
            bg-gray-100
            rounded-2xl
        `,
        imageBox: `
            w-full
            aspect-square
            overflow-hidden
            rounded-2xl
            border
            border-gray-100
        `,
        image: `
            w-full
            h-full
            object-cover
        `,
        serviceName: `
            p-3
            flex items-center justify-center
            text-center
            text-lg
            font-bold
            text-green-500
        `,
        container3: `
            relative
            w-full
            overflow-hidden
            p-[50px]
        `,
        container4: `
            flex flex-col
            mx-auto
            items-center
            w-full
            md:w-[90%]
            p-[50px]
            pt-5
            bg-white
            rounded-xl
        `,
        container5: `
            grid
            grid-cols-[repeat(auto-fit,minmax(140px,1fr))]
            gap-4
            place-items-center
            p-[50px]
        `,
        logoParner: `max-w-[130px] h-auto select-none`,
        partnerBox: `
            flex items-center justify-center
            w-[130px]
            aspect-square
            overflow-hidden
            rounded-2xl
            border
            border-blue-500
        `,
    }

    return (
        <>
            <Helmet>
                <title>Trang chủ</title>
            </Helmet>

            <div className={styles.mainContainer}>
                <div className={styles.container1}>
                    <div className={styles.titleColumn}>
                        <h2>
                            <span className={styles.subTitle}>
                                Giới thiệu về
                            </span>

                            <span className={styles.mainTitle}>
                                HealthCare
                            </span>
                        </h2>
                    </div>

                    <div className={styles.contentColumn}>
                        <p className={styles.mainText}>
                            Bất cứ người bệnh nào cũng xứng đáng có được sự chăm sóc tốt nhất cả về thể chất và tinh thần. Đó chính là nền tảng tạo nên những nhân viên chăm sóc bệnh nhân thay người nhà tuyệt vời tại AnCare
                            Nhân viên Chăm sóc tại AnCare đều xuất phát từ các trường đại học/cao đẳng được đào tạo chính quy, lành nghề, chuyên nghiệp, mang tới dịch vụ chăm sóc tốt hơn cả người thân của bạn.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-center text-2xl text-blue-700 font-bold">DỊCH VỤ CHĂM SÓC BỆNH NHÂN THAY NGƯỜI NHÀ</h3>
                    <div className="w-1/3 h-[2px] bg-black mt-5"></div>
                </div>

                <ul className={styles.container2}>
                    {services.map((service) => (
                        <li key={service.id} className={styles.itemCard}>
                            <div className={styles.imageBox}>
                                <img 
                                    src={service.img} 
                                    alt={service.name}
                                    className={styles.image} 
                                />
                            </div>
                            <span className={styles.serviceName}>
                                {service.name}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col items-center">
                    <h3 className="text-center text-2xl font-bold text-blue-700">
                        DỊCH VỤ PHÒNG KHÁM
                    </h3>
                    <div className="w-1/3 h-[2px] bg-black mt-5"></div>
                </div>

                <div className={styles.container3}>
                    <button className="room-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full">
                        <LeftOutlined />
                    </button>

                    <button className="room-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full">
                        <RightOutlined />
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={4}
                        spaceBetween={24}
                        loop={true}
                        speed={400}
                        navigation={{
                            nextEl: ".room-next",
                            prevEl: ".room-prev",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1},
                            640: { slidesPerView: 2},
                            1024: { slidesPerView: 4}
                        }}
                    >
                        {roomService.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div className="bg-white rounded-lg shadow">
                                    <img 
                                        src={card.img}
                                        alt={card.name}
                                        className="w-full h-auto" 
                                    />
                                    <div className="p-3 text-center font-medium">
                                        {card.name}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className={styles.container4}>
                    <h3 className="text-center text-2xl font-bold text-blue-700">
                        ĐÁNH GIÁ KHÁCH HÀNG
                    </h3>
                    <p className="text-center text-xl mb-6 text-gray-500">
                        Hãy cùng xem cảm nhận của khách hàng về dịch vụ của chúng tôi
                    </p>

                    <div className="relative w-[90%] bg-blue-400 mx-auto rounded-3xl p-6">
                        <div className="flex">
                            <button className="room-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full">
                                <LeftOutlined />
                            </button>

                            <button className="room-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full">
                                <RightOutlined />
                            </button>

                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={1}
                                spaceBetween={24}
                                loop={true}
                                speed={400}
                                navigation={{
                                    nextEl: ".room-next",
                                    prevEl: ".room-prev",
                        }}
                            >
                                {comments.map((cmt) => (
                                    <SwiperSlide key={cmt.id}>
                                        <div className="flex items-center gap-6 px-6">
                                            <img 
                                                src={cmt.img}
                                                alt={cmt.id} 
                                                className="w-[200px] h-[200px] rounded-full object-cover shrink-0"
                                            />
                                            <div className="flex flex-col">
                                                <div className="text-white text-xl leading-relaxed">
                                                    "{cmt.content}"
                                                </div>
                                                <div className="font-bold text-xl p-5">
                                                    {cmt.author}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-10">
                    <h3 className="text-center text-2xl font-bold text-blue-700">
                        ĐỐI TÁC CỦA CHÚNG TÔI
                    </h3>
                    <div className="w-1/3 h-[2px] bg-black mt-5"></div>
                </div>

                <ul className={styles.container5}>
                    {partners.map((partner) => (
                        <li key={partner.id} className={styles.partnerBox}>
                                <img 
                                    src={partner.img}
                                    alt={partner.name}
                                    className={styles.logoParner}
                                />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}