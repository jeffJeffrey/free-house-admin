// import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const getAuthToken = () => {
    const token = localStorage.getItem('token');

    if (token) {
        const decodedToken = jwtDecode(token);

        // Vérifiez si le token a expiré
        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('token');
            return null;
        }

        return `Bearer ${token.substring(1, token.lastIndexOf('"'))}`;
    }

    return null;
};

//verifie if suer is autheticate

const fetchWithAuth = async (url, options = {}) => {
    const authToken = getAuthToken();
  
    if (authToken) {
      options.headers = options.headers || {}; // Ensure headers exist
      options.headers.Authorization = authToken;
    }
    // Make the request
    try {
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      // Handle errors appropriately, e.g., token refresh or error messages
      console.error('Error fetching data:', error);
      throw error; // Re-throw for potential caller handling
    }
  };
  
  export default fetchWithAuth;