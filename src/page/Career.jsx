
export default function Career() {
    const careers = [
        {id: 1, name: "Y tá", exp: "> 1", workaddress: "Cầu giấy, Hà Nội"},
        {id: 2, name: "Bác sĩ chuyên khoa", exp: "> 2", workaddress: "Cầu giấy, Hà Nội"},
        {id: 3, name: "Hộ lý", exp: "> 1", workaddress: "Cầu giấy, Hà Nội"},
        {id: 4, name: "Nhân viên quản lý dữ liệu", exp: "> 2", workaddress: "Cầu giấy, Hà Nội"},
        {id: 5, name: "Bảo vệ", exp: "Không yêu cầu", workaddress: "Cầu giấy, Hà Nội"},
        {id: 6, name: "Lễ tân", exp: "Không yêu cầu", workaddress: "Cầu giấy, Hà Nội"},
    ]

    const styles = {
        mainContainer: `flex flex-col items-center w-full overflow-x-hidden`,
        
        container1: `flex flex-col w-[90%] h-[150px] items-center justify-center bg-blue-500 rounded-lg gap-5`,
        title: ` text-white text-center font-bold text-5xl`,
        content: `text-white text-center text-xl`,

        container2: `flex flex-col w-full gap-6 p-5 items-center`,
        itemCard: `flex flex-col w-[80%] h-[150px] items-center justify-center bg-green-200 rounded-2xl`,
        careerName: `text-xl`,

        container6: `flex flex-col md:flex-row items-center w-full justify-center bg-gray-100 px-4 py-10`,
        inputCard: `flex flex-col w-[95%] md:w-[600px] items-center justify-center bg-blue-500 p-6 mx-auto rounded-lg`,
        input: `w-full p-3 mb-4 rounded-lg border-none outline-none text-black focus:ring-2 focus:ring-blue-300`,
        submitButton: `w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-lg transition duration-300 uppercase`,
        titleWhite: `text-3xl font-bold mb-2 text-white text-center`,
        contentWhite: `text-base text-blue-100 mb-6 text-center`,
        title: `text-4xl font-bold mb-4 text-center`,
        content: `text-base text-black leading-relaxed text-center`,
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container1}>
                <h2 className={styles.title}>Tuyển dụng</h2>
                <p className={styles.content}>"Đón chờ những tin tức tuyển dụng mới từ HEALTHCARE"</p>
            </div>

            <div className={styles.container2}>
                {careers.map((career) => (
                        <li key={career.id} className={styles.itemCard}>
                            <span className={styles.careerName}>
                               Vị trí: {career.name}
                            </span>
                            <span>
                                Yêu cầu: {career.exp} kinh nghiệm
                            </span>
                            <span>
                                Nơi làm việc: {career.workaddress}
                            </span>
                            <span className="text-red-600">
                                Thời hạn tuyển dụng: 
                            </span>
                        </li>
                    ))}
            </div>

             <div className={styles.container6}>
                <div className="w-[500px] p-5">
                    <h2 className={styles.title}>Đội ngũ tuyển dụng sẵn sàng hỗ trợ bạn</h2>
                    <p className={styles.content}>Sau khi nhận thông tin ứng tuyển, đội ngũ chuyên môn sẽ liên hệ với bạn sớm nhất
                        . Vui lòng điền chính xác thông tin để nhận được liên hệ sớm nhất.
                    </p>
                </div>

                <div className={styles.inputCard}>
                    <h2 className={styles.titleWhite}>Đăng kí ứng tuyển</h2>
                    <p className={styles.contentWhite}>Vui lòng để lại một số thông tin</p>
                    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="text"
                            placeholder="Họ và tên"
                            className={styles.input}
                            required 
                        />
                        <input 
                            type="text"
                            placeholder="Số điện thoại"
                            className={styles.input}
                            required 
                        />
                        <input 
                            type="text"
                            placeholder="Email"
                            className={styles.input}
                            required 
                        />
                        <h2 className={styles.contentWhite}>Tải CV của bạn lên</h2>
                        <input 
                            type="file"
                            accept=".pdf,.doc,.docs,.png,.jpg"
                            className={styles.input}
                            required 
                        />
                        <input 
                            type="text"
                            placeholder="Nội dung"
                            className={`${styles.input} h-32 `}
                            required 
                        />
                    </form>
                    <button type="submit" className={styles.submitButton}>
                        Đặt lịch ngay
                    </button>
                </div>
            </div>
        </div>
    )
}