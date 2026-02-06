export async function getProvinces() {
    const res = await fetch("https://34tinhthanh.com/api/provinces", {
        method: "GET"
    })
    if (!res.ok) {
        throw new Error("Không lấy được danh sách tỉnh")
    }
    return await res.json();
}

export async function getCommunes(code) {
    const res = await fetch(`https://34tinhthanh.com/api/wards?province_code=${code}`, {
        method: "GET"
    })
    if (!res.ok) {
        throw new Error("Không lấy được danh sách xã")
    }
    return await res.json();
}