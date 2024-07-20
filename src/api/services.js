import { API_URL } from ".";
import fetchWithAuth from "./http";

export async function allServices() {
    try {
        const response = await fetchWithAuth(`${API_URL}/services`);
        const data = await response.json();
        if (!response.ok) return Promise.reject(response)
        return data;

    } catch (error) {
        return Promise.reject(error);
    }
}
export async function createService(data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/services`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const service = await response.json();
        if (!response.ok) return Promise.reject(response)
        return service;
    } catch (error) {
        return Promise.reject(error);
    }
}


export async function updateService(id, data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/services/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const service = await response.json();
        if (!response.ok) return Promise.reject(response)
        return service;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function retrieveService(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/services/${id}`)

        const service = await response.json();
        if (!response.ok) return Promise.reject(response)
        return service;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function destroyService(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/services/${id}`, {
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

export async function retrieveServiceMedias(serviceId) {
    try {
        const response = await fetchWithAuth(`${API_URL}/serviceMedias/service/${serviceId}`);

        const medias = await response.json();
        if (!response.ok) return Promise.reject(response);
        return medias;
    } catch (error) {
        return Promise.reject(error);
    }
}
