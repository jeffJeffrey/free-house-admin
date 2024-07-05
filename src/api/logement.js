import { API_URL } from ".";
import fetchWithAuth from "./http";

export async function allLogements() {
    try {
        const response = await fetchWithAuth(`${API_URL}/logements`);
        const data = await response.json();
        if (!response.ok) return Promise.reject(response)
        return data;

    } catch (error) {
        return Promise.reject(error);
    }
}
export async function createlogement(data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/logements`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const logement = await response.json();
        if (!response.ok) return Promise.reject(response)
        return logement;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function login(data) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await response.json();
        if (!response.ok) return Promise.reject(response)
        return json;
    } catch (error) {
        return Promise.reject(error);
    }
}
export async function updatelogement(id, data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/logements/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const logement = await response.json();
        if (!response.ok) return Promise.reject(response)
        return logement;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function retrievelogement(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/logements/${id}`)

        const logement = await response.json();
        if (!response.ok) return Promise.reject(response)
        return logement;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function destroylogement(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/logements/${id}`, {
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