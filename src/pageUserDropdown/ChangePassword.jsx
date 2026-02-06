import { useState } from "react";
import { changePasswordApi } from "../api/change_password";

export default function ChangePassword() {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    })

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const  handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const { currentPassword, newPassword, confirmPassword } = form;

        if (!currentPassword || !newPassword || !confirmPassword) {
            return setError("Vui lòng nhập đầy đủ thông tin");
        }

        if (newPassword.length < 8) {
            return setError("Mật khẩu phải có ít nhất 8 ký tự");
        }

        if (newPassword === currentPassword) {
            return setError("Mật khẩu mới không được trùng mật khẩu cũ");
        }

        if (newPassword !== confirmPassword) {
            return setError("Xác nhận mật khẩu không khớp");
        }

        try {
            setLoading(true);
            const res = await changePasswordApi(
                currentPassword,
                newPassword
            );
            setSuccess(res.data.message)
            setForm({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            })
        } catch (err) {
            setError(
                err.response?.data?.detail ||
                "Đổi mật khẩu thất bại"
            );
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="flex flex-col items-center py-5 border-2">
            <h1 className="text-2xl font-semibold mb-6">
                Đổi mật khẩu
            </h1>

            <form 
                onSubmit={handleSubmit}
                className="flex flex-col bg-white shadow rounded-xl p-6"
            >
                <Input 
                    label="Mật khẩu hiện tại"
                    name="currentPassword"
                    type="password"
                    value={form.currentPassword}
                    onChange={handleChange} 
                />

                <Input 
                    label="Mật khẩu mới"
                    name="newPassword"
                    type="password"
                    value={form.newPassword}
                    onChange={handleChange} 
                />

                <Input 
                    label="Xác nhận mật khẩu mới"
                    name="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={handleChange} 
                />

                {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )}

                {success && (
                    <p className="text-green-600 text-sm">{success}</p>
                )}

                <button
                    type="submit"
                    className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Cập nhật mật khẩu
                </button>
            </form>
        </div>
    )
}

function Input({ label, ...props }) {
    return (
        <div>
            <label className="block mb-1 text-sm font-medium">
                {label}
            </label>

            <input 
                {...props}
                className="w-full rounded-full border border-blue-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}