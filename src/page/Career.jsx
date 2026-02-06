import axios from "axios"
import { useEffect, useState } from "react"
import { CloseOutlined, LoadingOutlined } from "@ant-design/icons"
import { API_BASE } from "../config"
import { Select } from "antd"
import { getProvinces, getCommunes } from "../api/province"

function FreelanceForm({ onClose, formData, handleChange, handleChangeValueHasName, handleSubmit }) {
    const [provinces, setProvinces] = useState([])
    const [communes, setCommunes] = useState([])

    useEffect(() => {
        const fetchProvinces = async () => {
            const p = await getProvinces()
            setProvinces(p)
        }
        fetchProvinces()
    }, [])

    const getCommuneList = async (name) => {
        var code = ""
        provinces.forEach(p => {
            if (p.name === name) {
                code = p.province_code
            }
        });
        const c = await getCommunes(code)
        setCommunes(c)
    }

    return (
        <div className="relative bg-blue-500 p-6 rounded-lg w-full max-w-[600px]">
            <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 text-white hover:text-gray-200"
            >
                <CloseOutlined className="text-xl" />
            </button>
            
            <h2 className="text-2xl text-white font-bold text-center mb-4">
                Đăng ký Hộ lý Tự Do
            </h2>

            <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange} 
                    className="w-full p-3 rounded" 
                    placeholder="Họ và tên"
                    required 
                />
                <input 
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange} 
                    className="w-full p-3 rounded"
                    required 
                />
                <input 
                    name="citizen_id"
                    value={formData.citizen_id}
                    onChange={handleChange}
                    className="w-full p-3 rounded"
                    placeholder="Số căn cước công dân"
                    required 
                />
                <input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded"
                    placeholder="Số điện thoại"
                    required 
                />
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded"
                    placeholder="Email" 
                />

                <Select className="w-full"
                    name="province"
                    showSearch
                    placeholder={"Tỉnh / TP"}
                    onChange={(value) => {handleChangeValueHasName("province", value);getCommuneList(value);handleChangeValueHasName("commune", null);}}
                >
                    {provinces.map((p) => {
                        return (<Select.Option value={p.name}>{p.name}</Select.Option>)
                    })}
                </Select>
                <Select className="w-full"
                    name="commune"
                    showSearch
                    placeholder={"Phường / Xã"}
                    onChange={(value) => {handleChangeValueHasName("commune", value)}}
                >
                    {communes.map((c) => {
                        return (<Select.Option value={c.ward_name}>{c.ward_name}</Select.Option>)
                    })}
                </Select>

                <button
                    type="submit" 
                    className="w-full bg-yellow-400 py-3 rounded font-bold"
                >
                    ĐĂNG KÝ
                </button>
            </form>
        </div>
    )
}

function NIADForm({ onClose, formData, handleChange, handleChangeValueHasName, handleSubmit }) {
    const [provinces, setProvinces] = useState([])
    const [communes, setCommunes] = useState([])

    useEffect(() => {
        const fetchProvinces = async () => {
            const p = await getProvinces()
            setProvinces(p)
        }
        fetchProvinces()
    }, [])

    const getCommuneList = async (name) => {
        var code = ""
        provinces.forEach(p => {
            if (p.name === name) {
                code = p.province_code
            }
        });
        const c = await getCommunes(code)
        setCommunes(c)
    }

    return (
        <div className="relative bg-green-500 p-6 rounded-lg w-full max-w-[600px]">
            <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 text-white hover:text-gray-200"
            >
                <CloseOutlined className="text-xl" />
            </button>
            
            <h2 className="text-2xl text-white font-bold text-center mb-4">
                Đăng ký Hộ lý NIAD
            </h2>

            <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange} 
                    className="w-full p-3 rounded" 
                    placeholder="Họ và tên"
                    required 
                />
                <input 
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange} 
                    className="w-full p-3 rounded"
                    required 
                />
                <input 
                    name="citizen_id"
                    value={formData.citizen_id}
                    onChange={handleChange}
                    className="w-full p-3 rounded"
                    placeholder="Số căn cước công dân"
                    required 
                />
                <input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded"
                    placeholder="Số điện thoại"
                    required 
                />
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded"
                    placeholder="Email" 
                />
                <Select className="w-full"
                    name="province"
                    showSearch
                    placeholder={"Tỉnh / TP"}
                    onChange={(value) => {handleChangeValueHasName("province", value);getCommuneList(value);handleChangeValueHasName("commune", "");}}
                >
                    {provinces.map((p) => {
                        return (<Select.Option value={p.name}>{p.name}</Select.Option>)
                    })}
                </Select>
                <Select className="w-full"
                    name="commune"
                    showSearch
                    placeholder={"Phường / Xã"}
                    onChange={(value) => {handleChangeValueHasName("commune", value)}}
                >
                    {communes.map((c) => {
                        return (<Select.Option value={c.ward_name}>{c.ward_name}</Select.Option>)
                    })}
                </Select>
                <input 
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-3 rounded"
                    placeholder="Kinh nghiệm" 
                />

                <button
                    type="submit" 
                    className="w-full bg-yellow-400 py-3 rounded font-bold"
                >
                    ĐĂNG KÝ HỘ LÝ NIAD
                </button>
            </form>
        </div>
    )
}

export default function Career() {
    const [applyType, setApllyType] = useState(null)
    // Call API lấy setting tuyển dụng tự do và carehelper = "online"
    const [onlineRemaining, setOnlineRemaining] = useState(null)
    const [offlineRemaining, setOfflineRemaining] = useState(null)

    const resetForm = () => {
        setFormData({
            citizen_id: "",
            fullname: "",
            phone: "",
            dob: "",
            email: "",
            commune: "",
            province: "",
            experience: "",
        })
    }

    useEffect(() => {
        const fetchRecruitmentData = async () => {
            try {
                // setting tuyển dụng
                const settingRes = await axios.get(
                    `${API_BASE}/user/recruitment`,
                    { withCredentials:true }
                )
                if (settingRes.data.message !== "Đang tuyển dụng") {
                    setIsRecruiting(false)
                    return
                }
                setIsRecruiting(true)
                const totalOnline = settingRes.data.number_online

                // Carehelper = "online"
                const res_online = await axios.get(
                    `${API_BASE}/user/number_online`,
                    {},
                    { withCredentials: true }
                )
                setOnlineRemaining(res_online.data.number)

                // Carehelper = "offline"
                const res_offline = await axios.get(
                    `${API_BASE}/user/number_offline`,
                    {},
                    { withCredentials: true }
                )
                setOfflineRemaining(res_offline.data.number)
            } catch (error) {
                console.error("Lỗi lấy dữ liệu tuyển dụng", error)
                setIsRecruiting(false)
            }
        }
        fetchRecruitmentData()
    }, [])
    // Call API GET
    const [isRecruiting, setIsRecruiting] = useState(null)

    // Call API POST 
    const [formData, setFormData] = useState({
        citizen_id: "",
        fullname: "",
        phone: "",
        dob: "",
        email: "",
        commune: "",
        province: "",
        experience: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleChangeValueHasName = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmitNIAD = async (e) => {
        e.preventDefault()

        if (!formData.citizen_id || !formData.fullname || !formData.phone) {
            alert("Vui lòng nhập đầy đủ thông tin")
            return
        }

        try {
            await axios.post(
                `${API_BASE}/cv/create`,
                {
                    citizen_id: formData.citizen_id,
                    fullname: formData.fullname,
                    phone: formData.phone,
                    dob: formData.dob,
                    email: formData.email,
                    commune: formData.commune,
                    province: formData.province,
                    experience: formData.experience
                },
                { 
                    withCredentials: true
                }
            )
            alert("Nộp hồ sơ thành công")

            setFormData({
                citizen_id: "",
                fullname: "",
                phone: "",
                dob: "",
                email: "",
                commune: "",
                province: "",
                experience: "",
            })
        } catch (error) {
            console.error("Loi op cv", error)
            alert("Nộp hồ sơ thất bại, vui lòng kiểm tra lại thông tin !")
        }
    }

    const handleSubmitFreelance = async (e) => {
        e.preventDefault()

        if (!formData.fullname || !formData.phone || !formData.email) {
            alert("Vui lòng nhập đầy đủ thông tin")
            return
        }
        try {
            await axios.post(
                `${API_BASE}/care_helper/registerFreelance`,
                {
                    citizen_id: formData.citizen_id,
                    fullname: formData.fullname,
                    phone: formData.phone,
                    dob: formData.dob,
                    email: formData.email,
                    commune: formData.commune,
                    province: formData.province
                },
            )
            alert("Đã gửi tài khoản & mật khẩu qua email")
            resetForm()
            setApllyType(null)
        } catch (error) {
            console.error(error)
            alert("Đăng ký hộ lý tự do thất bại, thông tin có thể đã bị trùng!")
        }
    }

    const styles = {
        mainContainer: `flex flex-col items-center w-full overflow-x-hidden`,
        
        container1: `flex flex-col w-[90%] h-[150px] items-center justify-center bg-blue-500 rounded-lg gap-5`,
        title: ` text-white text-center font-bold text-5xl`,
        content: `text-white text-center text-xl`,

        container2: `flex flex-col md:flex-row w-full gap-6 p-5 items-center`,
        itemCard: `flex flex-col w-[80%] h-[450px] bg-blue-400 rounded-2xl`,
        careerName: `text-xl pt-3 text-center`,

        container6: `flex flex-col md:flex-row items-center w-full justify-center bg-gray-100 px-4 py-10`,
        inputCard: `flex flex-col w-[95%] md:w-[600px] items-center justify-center bg-blue-500 p-6 mx-auto rounded-lg`,
        input: `w-full p-3 mb-4 rounded-lg border-none outline-none text-black focus:ring-2 focus:ring-blue-300`,
        submitButton: `w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-lg transition duration-300 uppercase`,
        titleWhite: `text-3xl font-bold mb-2 text-white text-center`,
        contentWhite: `text-base text-blue-100 mb-3 text-center`,
        title: `text-4xl font-bold mb-4 text-center`,
        content: `text-base text-black leading-relaxed text-center`,
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container1}>
                <h2 className={styles.title}>Tuyển dụng</h2>
                <p className={styles.content}>"Đón chờ những tin tức tuyển dụng mới từ HEALTHCARE"</p>
            </div>

            {isRecruiting === null && (
                <p className="text-white text-center">
                    Đang kiểm tra trạng thái tuyển dụng...
                </p>
            )}

            {isRecruiting === false && (
                <div className="bg-red-50 border-l-4 border-r-4 border-red-500 p-4 rounded-md text-center w-[90%] mt-5">
                    <p className="text-red-600 font-semibold text-lg">
                        Tạm thời ngừng tuyển dụng
                    </p>
                    <p className="text-red-500 text-sm mt-1">
                        Vui lòng quay lại sau.
                    </p>
                </div>
            )}

            {isRecruiting === true && (
                <>
                    <div className={styles.container2}>
                            <li className={styles.itemCard}>
                                <span className={styles.careerName}>
                                    Hộ lý NIAD
                                </span>
                                <span className="px-2">
                                    Quyền lợi:
                                    <ul className="list-disc px-5">
                                        <li>Được đào tạo bởi những người có kinh nghiệm và học liệu chuẩn hóa</li>
                                        <li>Được ưu tiên khi có khách hàng đặt</li>
                                        <li>Được đóng bảo hiểm đầy đủ</li>
                                    </ul>
                                </span>
                                <span className="text-white px-2">
                                    Số lượng: {" "}
                                    {offlineRemaining === null ? (
                                        <LoadingOutlined />
                                    ): offlineRemaining > 0 ? (
                                        <span className="font-bold">{offlineRemaining}</span>
                                    ): (
                                        <span className="text-red-300 font-semibold">Đã đủ</span>
                                    )}
                                </span>
                                <button
                                    onClick={() => setApllyType("niad")}
                                    className="mt-auto mx-2 mb-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg"
                                >
                                    Ứng tuyển
                                </button>
                            </li>

                            <li className={styles.itemCard}>
                                <span className={styles.careerName}>
                                    Hộ lý tự do
                                </span>
                                <span className="px-2">
                                    Quyền lợi:
                                    <ul className="list-disc px-5">
                                        <li>Tự do lựa chọn khách hàng</li>
                                    </ul>
                                </span>
                                <span className="text-white px-2">
                                    Số lượng: {" "}
                                    {onlineRemaining === null ? (
                                        <LoadingOutlined />
                                    ): onlineRemaining > 0 ? (
                                        <span className="font-bold">{onlineRemaining}</span>
                                    ): (
                                        <span className="text-red-300 font-semibold">Đã đủ</span>
                                    )}
                                </span>
                                <button
                                    onClick={() => setApllyType("freelance")}
                                    className="mt-auto mx-2 mb-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg"
                                >
                                    Ứng tuyển
                                </button>
                                
                            </li>
                    </div>

                    {applyType && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                            {applyType === "freelance" && (
                                <FreelanceForm 
                                    onClose={() => setApllyType(null)} 
                                    formData={formData}
                                    handleChange={handleChange}
                                    handleChangeValueHasName={handleChangeValueHasName}
                                    handleSubmit={handleSubmitFreelance}
                                />
                            )}
                            {applyType === "niad" && (
                                <NIADForm 
                                    onClose={() => setApllyType(null)} 
                                    formData={formData}
                                    handleChange={handleChange}
                                    handleChangeValueHasName={handleChangeValueHasName}
                                    handleSubmit={handleSubmitNIAD}
                                />
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}