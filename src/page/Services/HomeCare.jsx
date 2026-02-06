import imageIcon1 from "../../assets/Service/HomeCare/icon1.png"
import imageIcon2 from "../../assets/Service/HomeCare/iconNurse.png"
import imageIcon3 from "../../assets/Service/HomeCare/icon3.png"
import imageIcon4 from "../../assets/Service/HomeCare/iconNote.png"

import { Timeline, Card } from "antd"

export default function HomeCare() {
    const activities = [
        {id: 1, icon: imageIcon1, content: "Chăm sóc, thay băng hay hỗ trợ điều trị cho các vết thương, vết hở sau phẫu thuật, hậu phẫu của bệnh nhân."},
        {id: 2, icon: imageIcon2, content: "Người nhà cũng sẽ được các nhân viên chăm sóc hướng dẫn cách chăm sóc bệnh nhân ngay tại nhà, theo đúng cách thức và phương pháp để áp dụng khi cần thiết."},
        {id: 3, icon: imageIcon3, content: "Việc tiêm thuốc và truyền nước cũng sẽ được thực hiện bởi các kỹ thuật viên, nhân viên chăm sóc hay điều dưỡng trong suốt quá trình sử dụng dịch vụ của bệnh nhân."},
        {id: 4, icon: imageIcon4, content: "Cuối cùng là giám sát tình trạng bệnh nhân thường xuyên, nhất là sau khi phẫu thuật, chấn thương và trong trường hợp sức khỏe không ổn định, biến chứng hay đột nhiên phản ứng với thuốc."},
    ]

    const steps = [
        "Kiểm tra những thức ăn, nước uống mà gia đình chuẩn bị cho bệnh nhân để xem chúng có phù hợp hay không, có kiêng theo quy định của bác sĩ hay không để tránh ảnh hưởng đến vết thương hay sức khỏe.",
        "Đo đạc và kiểm tra thường xuyên huyết áp, nhiệt độ và nhịp tim, hơi thở của bệnh nhân để nhận biết những chuyển biến sau quá trình phẫu thuật hoặc chấn thương.",
        "Kiểm tra và đọc kỹ các toa thuốc và đơn thuốc của bệnh nhân, các loại thuốc khác mà bệnh nhân sử dụng bên ngoài cùng phương pháp điều trị trước đó. Bởi có nhiều loại thuốc sẽ phản ứng với nhau hoặc không phù hợp trong quá trình điều trị, dưỡng thương. ",
        "Thêm vào đó, trong dịch vụ chăm sóc bệnh nhân tại nhà Hà Nội nhân viên cũng sẽ theo dõi những gì bất thường xảy ra bên ngoài như đau, sưng hay phù nề của bệnh nhân.",
        "Việc hướng dẫn cách chăm sóc bệnh nhân cho người nhà hay gia đình cũng sẽ được đội ngũ điều dưỡng chia sẻ và giải đáp một cách cụ thể. Bởi khi bạn áp dụng các phương pháp chăm sóc đúng đắn, khoa học thì hiệu quả khỏi bệnh sẽ lên đến 99%.",
        "Cuối cùng với những trường hợp đặc biệt, nhân viên sẽ tập các phương pháp vật lý trị liệu cho những trường hợp bị mất khả năng đi lại, nói chuyện hay di chứng sau phẫu thuật, tai nạn, chấn thương,…",
    ]
    
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col w-[90%] md:w-[70%] mx-auto">
                <h3 className="text-center font-bold text-2xl p-5">
                    Dịch vụ chăm sóc bệnh nhân tại nhà của HealthCare
                </h3>
                <p className="text-lg">
                    Dịch vụ chăm sóc bệnh nhân tại nhà không còn quá xa lạ với chúng ta bởi đây là loại hình dịch vụ cần thiết đối với xã hội hiện đại, đặc biệt là đối với những gia đình bận rộn, neo người và không có khả năng chăm sóc.
                    Mỗi khi gia đình có người nhà phải nằm viện, sau quá trình điều trị trong bệnh viện, bệnh nhân sẽ được xuất viện và trở về gia đình. Tùy theo các mặt bệnh và mức độ hồi phục của người bệnh, các gia đình thường tìm kiếm và lựa chọn dịch vụ chăm sóc người bệnh tại nhà.
                </p>
                <p className="text-lg">
                    Dịch vụ chăm sóc bệnh nhân tại nhà của AnCare:
                </p>
                <ul className="px-5 text-lg text-green-600">
                    <li>- Hỗ trợ chăm sóc bệnh nhân 24/24, theo yêu cầu và tình trạng của người bệnh.</li>
                    <li>- Vật lý trị liệu, phục hồi chức năng.</li>
                    <li>- Dịch vụ chăm sóc vết thương.</li>
                    <li>- Dịch vụ chăm sóc giảm nhẹ, tiêm, truyền, lấy mẫu xét nghiệm</li>
                </ul>
                <p className="text-lg pt-5">
                    Cụ thể, tùy theo từng mặt bệnh, từng tình trạng thực tế của bệnh nhân, nhân viên chăm sóc của AnCare sẽ thực hiện các hoạt động:
                </p>
                <ul>
                    {activities.map((activity) => (
                        <li key={activity.id}>
                            <div className="flex items-center gap-5 px-5 py-3">
                                <img 
                                    src={activity.icon} 
                                    alt="icon" 
                                    className="w-[30px] h-[30px]"
                                />
                                <p className="text-lg">
                                    {activity.content}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Timeline mode="alternate" className="w-full md:w-[70%] mx-auto">
                {steps.map((text, index) => (
                    <Timeline.Item
                        key={index}
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
                                        text-base md:text-xl 
                                        leading-none 
                                        shadow-md
                                    "
                                >
                                    {index + 1}
                                </div>
                            </div>
                        }
                    >
                        <div className="flex items-center min-h-[40px]">
                            <Card
                                bordered={false}
                                className={`
                                    w-full
                                    md:max-w-[420px]
                                    rounded-2xl 
                                    shadow-md 
                                    px-1
                                    text-sm md:text-lg 
                                    bg-blue-400 
                                    text-white
                                    ${index % 2 === 0 ? "ml-6 md:ml-8" : "mr-6 md:mr-8"}
                                `}
                                bodyStyle={{ textAlign: "left"}}
                            >
                                {text}
                            </Card>
                        </div>
                    </Timeline.Item>
                ))}
            </Timeline>
            
            <div className="text-center w-[90%] md:w-[70%] mx-auto text-lg">
                Có thể thấy những điều mà dịch vụ chăm sóc bệnh nhân tại nhà mang lại cho bệnh nhân và người nhà khá hữu ích, tận tâm và chu đáo. Vì thế mà các gia đình bận rộn vì công việc hay không có khả năng chăm sóc người bệnh hoàn toàn có thể liên hệ để được hỗ trợ. An tâm ra ngoài đi làm, học tập mà không lo lắng người bệnh ở nhà, ngược lại chất lượng và sức khỏe bệnh nhân còn được cải thiện hơn so với trước.
            </div>

            <div className="w-[90%] md:w-[70%] mx-auto">
                <h3 className="text-xl text-center font-bold p-5">
                    Lợi ích khi bạn lựa chọn dịch vụ chăm sóc bệnh nhân tại nhà của AnCare
                </h3>
                <p className="text-lg text-center mb-5">
                    Ngoài lợi ích về mặt sức khỏe, thể chất hay sự hồi phục của cơ thể thì dịch vụ còn mang lại nhiều lợi ích khác cho người bệnh và người nhà mà bạn chưa từng nghĩ đến. Điển hình là các lợi ích to lớn, ý nghĩa như sau:
                </p>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-[50%] bg-yellow-200 p-4 md:p-5 rounded-xl">
                        <h3 className="text-lg font-bold pb-2">
                            1. Sự nhanh chóng và tiện ích của dịch vụ giúp chúng ta tiết kiệm thời gian, công sức
                        </h3>
                        <p className="text-lg">
                            Thực tế cho thấy khi chúng ta mắc bệnh, dù là bất kỳ căn bệnh nào cũng phải mất một khoảng thời gian dài để điều trị và chữa khỏi. Đặc biệt hơn là di chứng sau quá trình mắc bệnh cũng nặng nề và ảnh hưởng không kém. Việc lựa chọn dịch vụ chăm sóc bệnh nhân tại nhà sẽ giúp ích chúng ta rất nhiều trong việc điều trị hiệu quả, chăm sóc tận tình cũng như để ý, theo dõi nếu bệnh nhân bị biến chứng hay phản ứng. Ngoài ra thời gian đi tái khám, chờ đợi tại các cơ sở, trung tâm y tế cũng khá lâu. Các thủ tục rườm rà, liên tục sẽ khiến người nhà đi theo mất thời gian mà người bệnh chờ đời cũng mệt mỏi. Hơn nữa  nhờ có dịch vụ mà chi phí đi lại cũng được giảm thiểu đáng kể, vừa tiết kiệm thời gian lẫn chi phí, quá hời rồi phải không nào!
                        </p>
                    </div>

                    <div className="w-full md:w-[50%] bg-yellow-200 p-4 md:p-5 rounded-xl">
                        <h3 className="text-lg font-bold pb-2">
                            2. Bắt kịp tình trạng bệnh của bệnh nhân, chăm sóc sức khỏe chu đáo
                        </h3>
                        <p className="text-lg">
                            Đây là lợi ích hàng đầu và to lớn mà đa số nhiều người thường ưu tiên để lựa chọn dịch vụ chăm sóc bệnh nhân tại nhà. Như đã chia sẻ thì tất cả các bạn điều dưỡng viên, nhân viên y tế đều có trình độ chuyên môn cao, kỹ thuật giỏi nên việc xử lý tình huống rất tốt. Cho dù không có người nhà bên cạnh thì tình trạng sức khỏe, diễn biến bệnh tình cũng sẽ được nhân viên, điều dưỡng viên theo dõi và chăm sóc kịp thời. Hạn chế các tình huống xấu xảy ra không như ý muốn hoặc nguy hiểm với bệnh nhân.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}