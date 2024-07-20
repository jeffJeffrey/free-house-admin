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
export async function createLogement(data) {
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


export async function updateLogement(id, data) {
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

export async function retrieveLogement(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/logements/${id}`)

        const logement = await response.json();
        if (!response.ok) return Promise.reject(response)
        return logement;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function allMedias() {
    try {
        const response = await fetchWithAuth(`${API_URL}/logementMedias`);

        const medias = await response.json();
        if (!response.ok) return Promise.reject(response);
        return medias;
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function retrieveMedias(logementId) {
    try {
        const response = await fetchWithAuth(`${API_URL}/logementMedias/logement/${logementId}`);

        const medias = await response.json();
        if (!response.ok) return Promise.reject(response);
        return medias;
    } catch (error) {
        return Promise.reject(error);
    }
}



export async function destroyLogement(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/logements/${id}`)
        return response.statusText

    } catch (error) {
        return Promise.reject(error);
    }
}

export async function validateLogement(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/logements/validate/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const logement = await response.json();
        if (!response.ok) return Promise.reject(response);
        return logement;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour rejeter un logement avec un motif
export async function rejectLogement(id, motif) {
    try {
        const response = await fetchWithAuth(`${API_URL}/logements/reject/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ motif })
        });

        const logement = await response.json();
        if (!response.ok) return Promise.reject(response);
        return logement;
    } catch (error) {
        return Promise.reject(error);
    }
}