import imageIcon1 from "../../assets/Service/HomeCare/icon1.png"
import imageIcon2 from "../../assets/Service/HomeCare/iconNurse.png"
import imageIcon3 from "../../assets/Service/HomeCare/icon3.png"
import imageIcon4 from "../../assets/Service/HomeCare/iconNote.png"

import { Timeline, Card } from "antd"

export default function OldPersonCare() {
    const steps = [
        {id: 1, color: "bg-red-400", title: "Về mặt tinh thần" ,content:"Nhân viên sẽ trò chuyện thường xuyên với các cụ, tâm sự, chia sẻ và động viên để ông bà luôn có tinh thần lạc quan, không cô đơn và buồn chán khi không có con cháu ở bên. Sức khỏe sẽ được cải thiện rất nhiều khi ông bà được tâm sự và sẻ chia, việc nói chuyện với họ sẽ giúp ích rất nhiều trong vấn đề tinh thần và thể chất. Một hoạt động thú vị khác được nhân viên thực hiện trong việc chăm sóc người cao tuổi tại nhà ở Hà Nội chính là dẫn các cụ đi dạo, hít thở không khí trong lành và ngắm đường phố tấp nập. Cho các cụ ra ngoài để tránh việc ở nhà bí bách, khó chịu và ngột ngạt cũng là một giải pháp hay."},
        {id: 2, color: "bg-blue-400", title: "Về mặt thể chất" ,content:"Thường xuyên đưa ra các hướng dẫn tập luyện thể dục, thể thao hay các bài tập dưỡng sinh cho người cao tuổi. Tập vật lý trị liệu, phục hồi chức năng cho những vùng thường xuyên bị đau nhức xương khớp. Xoa bóp kết hợp để tăng thêm tính hữu hiệu, hiệu quả và giảm đau nhức, nhức mỏi vào những ngày trái gió trở trời. Tất cả đều phục vụ và đảm bảo cho các bà, các ông có một sức khỏe dẻo dai và tinh thần minh mẫn."},
        {id: 3, color: "bg-green-400", title: "Về mặt dinh dưỡng" ,content:"Các hoạt động của dịch vụ chăm sóc người cao tuổi tại nhà ở Hà Nội khá đa dạng. Bao gồm việc chế biến thức ăn, đảm bảo đầy đủ các chất dinh dưỡng và năng lượng, thức ăn cũng phải phù hợp với thể trạng, bệnh tình mà các cụ mắc phải. Mua thực phẩm theo chỉ định của bác sĩ, phù hợp với người cao tuổi cũng như cho các cụ ăn đúng giờ, đúng bữa. Hoạt động giữ vệ sinh, đóng bỉm, thay quần áo cũng sẽ được thực hiện chu đáo, nếu có vết thương, nhân viê sẽ thay băng và rửa vết thương thường xuyên."},
        {id: 4, color: "bg-yellow-400", title: "Chăm sóc toàn diện" ,content:"Có thể thấy các hoạt động trong dịch vụ chăm sóc người cao tuổi tại nhà ở Hà Nội khá đa dạng và nhiều. Nhìn chung người cao tuổi sẽ được chăm sóc một cách chu đáo nhất, đảm bảo nhất để sức khỏe, tinh thần và thể chất được phát triển một cách tốt nhất. Người nhà sẽ không phải lo lắng hay bận tâm khi lựa chọn và sử dụng dịch vụ này của An Care."},
        
    ]
    
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col w-[90%] md:w-[70%] mx-auto">
                <h3 className="text-center font-bold text-2xl p-5">
                    Dịch vụ chăm sóc bệnh nhân tại nhà của HealthCare
                </h3>
                <p className="text-lg">
                    <strong>Chăm sóc người cao tuổi tại nhà ở Hà Nội</strong>  là dịch vụ phổ biến và cần thiết trong thời gian gần đây bởi chất lượng và hiệu quả mang lại cho người cao tuổi lẫn người nhà.
                </p>
                <p className="text-lg">
                    <strong>Chăm sóc người cao tuổi tại nhà ở Hà Nội</strong> là một trong những dịch vụ có mặt tại An Care, được đông đảo gia đình lựa chọn và sử dụng để chăm sóc ba mẹ, ông bà những khi bản thân mình bận rộn với công việc. Bất kỳ ai cũng muốn tự tay mình chăm sóc cho bố mẹ, ông bà nội ngoại hai bên một cách chu đáo và tận tâm nhất. Thế nhưng vì guồng quay công việc quá bận rộn mà chúng ta không thể chăm sóc ông bà, những người cao tuổi thân thiết và yêu thương chúng ta. Không phải vì điều đó mà chúng ta bỏ bê và để ông bà cô đơn, ở nhà một mình không ai chăm sóc. Việc sử dụng các dịch vụ chăm sóc người cao tuổi luôn được ưu tiên lựa chọn nhằm đảm bảo chất lượng cuộc sống, sự an toàn và sức khỏe của ông bà, cha mẹ khi ở nhà một mình.
                </p>
    
                <p className="text-lg pt-5">
                    Dịch vụ chăm sóc người cao tuổi sẽ giúp ích cho bạn rất nhiều trong việc chăm sóc người nhà của mình một cách tốt nhất. Dịch vụ sẽ cung cấp nhân viên đến tận nhà để chăm sóc người cao tuổi, lớn tuổi để các cụ có thể được thoải mái cả về thể chất lẫn tinh thần. Thêm vào đó, dịch vụ cũng hỗ trợ trò chuyện, tham gia các bài tập thể dục, vật lý trị liệu cho người cao tuổi để sức khỏe được thêm phần cải thiện. Tùy vào độ tuổi của các cụ, các ông, các bà mà phương pháp chăm sóc sẽ khác nhau. Thế nhưng điểm chung của dịch vụ chính là mang đến những hoạt động tốt nhất để tinh thần và sức khỏe của các cụ được tốt nhất, tỉnh táo, thoải mái và minh mẫn. <strong>Dịch vụ chăm sóc người cao tuổi tại nhà ở Hà Nội</strong> hứa hẹn sẽ mang đến nhiều hoạt động thú vị, bổ ích cho các cụ có cuộc sống ý nghĩa và vui vẻ nhất có thể.
                </p>
                <p className="text-xl font-bold p-5">
                    Những hoạt động mà dịch vụ chăm sóc người cao tuổi tại nhà ở Hà Nội mang đến cho khách hàng
                </p>
            </div>

            <Timeline mode="alternate" className="w-full md:w-[90%] mx-auto">
                {steps.map((step) => (
                    <Timeline.Item
                        key={step.id}
                        className="timeline-item"
                        dot={
                            <div className="flex items-center justify-center">
                                <div className="
                                        w-8 h-8
                                        md:w-10 md:h-10 
                                        rounded-full 
                                        bg-[rgb(1,79,29)] 
                                        text-white 
                                        flex items-center justify-center 
                                        font-bold 
                                        text-sm md:text-xl 
                                        leading-none 
                                        shadow-md
                                    "
                                >
                                    {step.id}
                                </div>
                            </div>
                        }
                    >
                        <div className="flex flex-col items-center min-h-[40px]">
                            <Card
                                bordered={false}
                                className={`
                                    w-full 
                                    max-w-full
                                    md:max-w-[500px] 
                                    shadow-md 
                                    text-sm md:text-lg 
                                    text-white
                                    ${step.color}
                                    ${step.id % 2 === 0 ? "ml-5 md:ml-8" : "mr-5 md:mr-8"}
                                `}
                                bodyStyle={{ textAlign: "left"}}
                            >
                                {step.title}
                            </Card>
                            <Card
                                bordered={false}
                                className={`
                                    w-full 
                                    max-w-full
                                    md:max-w-[500px] 
                                    text-sm md:text-lg 
                                    bg-white 
                                    text-black 
                                    shadow-md 
                                    border-2
                                    ${step.id % 2 === 0 ? "ml-5 md:ml-8" : "mr-5 md:mr-8"}
                                `}
                                bodyStyle={{ textAlign: "left"}}
                            >
                                {step.content}
                            </Card>
                        </div>
                    </Timeline.Item>
                ))}
            </Timeline>

            <div className="w-[90%] mx-auto">
                <h3 className="text-xl text-center font-bold p-5">
                    Liệu có nên lựa chọn An Care để sử dụng dịch vụ chăm sóc người cao tuổi tại nhà ở Hà Nội?
                </h3>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-[90%] md:w-[50%] mx-auto bg-yellow-200 p-5 rounded-xl">
                        <h3 className="text-lg font-bold pb-2">
                            Là công ty đi đầu trong lĩnh vực chăm sóc người bệnh, người cao tuổi một cách toàn diện
                        </h3>
                        <p className="text-lg">
                            Dịch vụ điều dưỡng nói chung cũng như dịch vụ chăm sóc sức khỏe người cao tuổi tại nhà nói riêng đã dần trở nên phổ biến trong thời gian vừa qua. Các cơ sở cung cấp dịch vụ hình thành nhiều nơi, điều này cũng khiến không ít người băn khoăn về chất lượng. An Care tự tin là một trong những đơn vị đi đầu trong lĩnh vực cung cấp dịch vụ chăm sóc bệnh nhân, người cao tuổi, bà bầu lẫn em bé sơ sinh chuyên nghiệp, chất lượng, uy tín. Đặc biệt với dịch vụ chăm sóc người cao tuổi tại nhà ở Hà Nội, An Care luôn đào tạo và đưa đến đội ngũ nhân viên nhiệt tình, chăm sóc chu đáo và có kinh nghiệm.
                        </p>
                    </div>

                    <div className="w-[90%] md:w-[50%] mx-auto bg-yellow-200 p-5 rounded-xl">
                        <h3 className="text-lg font-bold pb-2">
                            An Care thay người thân chăm sóc bạn
                        </h3>
                        <p className="text-lg">
                            Người cao tuổi khó khăn trong việc di chuyển, ăn uống và thực hiện các hoạt động thường nhật. Vì thế mà con cháu, người nhà thường rất lo lắng khi để bố mẹ, ông bà ở nhà một mình mà không có ai bên cạnh. Hiểu được điều đó, dịch vụ chăm sóc người cao tuổi tại nhà ra đời nhằm giúp ích và hỗ trợ nhiều gia đình đang trong tình trạng này. An Care luôn thấu hiểu mọi nỗi lo của khách hàng, những gì khách hàng muốn, cần và được đáp ứng từ dịch vụ mà họ yêu cầu.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mt-5">
                    <div className="w-[90%] md:w-[50%] mx-auto bg-yellow-200 p-5 rounded-xl min-h-[360px]">
                        <h3 className="text-lg font-bold pb-2">
                            Được nhiều khách hàng lựa chọn tin tưởng
                        </h3>
                        <p className="text-lg">
                            An Care đã thành lập và phát triển trong suốt những năm vừa qua với sự ủng hộ và tin tưởng của khách hàng. Tên tuổi của An Care đã ngày càng vững chắc trong lòng khách hàng, vị thế ngày càng cao trên thị trường Y Tế hiện nay. Nhiều hợp đồng điều dưỡng với các bệnh viện quốc tế, trung ương lớn nhỏ trên địa bàn Thủ đô Hà Nội đều được An Care đảm đang và phụ trách.
                        </p>
                    </div>

                    <div className="w-[90%] md:w-[50%] mx-auto bg-yellow-200 p-5 rounded-xl min-h-[360px]">
                        <h3 className="text-lg font-bold pb-2">
                            Đội ngũ điều dưỡng viên chất lượng và chuyên môn cao
                        </h3>
                        <p className="text-lg">
                            Tất cả đều được đào tạo bài bản, chuyên nghiệp trong môi trường hiện đại. Đảm bảo sẽ không khiến khách hàng thất vọng về chất lượng phục vụ của đội ngũ nhân viên An Care. Trong đó dịch vụ chăm sóc người cao tuổi tại nhà ở Hà Nội có lực lượng nhân viên chủ chốt, kinh nghiệm và tay nghề cao. Vì thế mà quý vị khi lựa chọn không phải băn khoăn hay lo lắng quá nhiều.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[90%] md:w-[70%] mx-auto">
                <h3 className="text-2xl font-bold text-center mt-5">
                    Lợi ích khi sử dụng dịch vụ chăm sóc người cao tuổi tại nhà ở Hà Nội là gì?
                </h3>
                <div className="text-lg">
                    Lợi ích đầu tiên và hàng đầu mà có lẽ ai cũng muốn hướng đến chính là sự an tâm, an toàn và chăm sóc kỹ lưỡng khi dịch vụ hoạt động tại nhà của chúng ta. Khi sử dụng dịch vụ, ông bà, các cụ cũng được chăm sóc toàn diện, đúng cách, đúng kỹ thuật. Nhờ đó mà sức khỏe được cải thiện, tinh thần phấn chấn, và lạc quan hơn trong cuộc sống. Con cháu cũng được an tâm và thoải mái đi làm, đi học mà không lo lắng ông bà ở nhà như thế nào. Dịch vụ chăm sóc người cao tuổi tại nhà ở Hà Nội mang lại lợi ích về mặt tinh thần cực kỳ to lớn đến cho người cao tuổi lẫn con cháu của họ.
                </div>
                <div className="text-lg">
                    Ngoài lợi ích trên ra thì khi sử dụng dịch vụ bạn cũng có thể biết thêm nhiều phương pháp, cách chăm sóc người cao tuổi hay, bổ ích để tự tay mình chăm sóc ông bà, cha mẹ những khi cần thiết. Các phương pháp này sẽ được đội ngũ nhân viên hướng dẫn và chia sẻ nhiệt tình trong suốt quá trình làm việc của mình. Có thể thấy bạn vừa học được cách chăm sóc người cao tuổi vừa an tâm đi học, đi làm mà ông bà vẫn khỏe mạnh và sống vui.
                </div>
            </div>
        </div>
    )
}