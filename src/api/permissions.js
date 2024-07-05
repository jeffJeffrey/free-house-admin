import { API_URL } from ".";
import fetchWithAuth from "./http";

export async function allPermissions() {
    try {
        const response = await fetchWithAuth(`${API_URL}/permissions`);
        const data = await response.json();
        if (!response.ok) return Promise.reject(response)
        return data;

    } catch (error) {
        return Promise.reject(error);
    }
}
export async function createPermission(data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/permissions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const Permission = await response.json();
        if (!response.ok) return Promise.reject(response)
        return Permission;
    } catch (error) {
        return Promise.reject(error);
    }
}


export async function updatePermission(id, data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/permissions/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const permission = await response.json();
        if (!response.ok) return Promise.reject(response)
        return permission;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function retrievePermission(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/permissions/${id}`)

        const permission = await response.json();
        if (!response.ok) return Promise.reject(response)
        return permission;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function destroyPermission(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/permissions/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return response.statusText

    } catch (error) {
        return Promise.reject(error);
    }
}