import axios from 'axios';

const API_KEY = '35770309-78fa01c385455366c0f1ba6fe';

export const getImages = async ( searchQuery, page ) => {
    
    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: API_KEY,
            page: page,
            q: searchQuery,
            per_page: 12,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    });
return response.data;
}
