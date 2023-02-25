
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const loginApi = async (email, password) => {
    try {
        const response = await fetch(`${BASE_URL}/api/authentication`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        return err;
    }
}

export const getUserApi = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/api/user/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        return err;
    }
}