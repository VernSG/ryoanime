export const fetchAnimeData = async (endpoint: string) => {
    const response = await fetch(`http://localhost:8000/api/v2/anime/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include credentials if needed
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const data = await response.json();
    return data;
  };
  