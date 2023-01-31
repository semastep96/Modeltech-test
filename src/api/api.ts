const API_URL = '/api/';
const ENDPOINTS = {
  DYNAMIC: 'dynamic/',
};

export const API = {
  async fetchFieldData(name: string) {
    const response = await fetch(`${API_URL}${ENDPOINTS.DYNAMIC}${name}a`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw Error('Can not get field data');
    }
    return (await response.json()) as DayDynamic[];
  },
};
