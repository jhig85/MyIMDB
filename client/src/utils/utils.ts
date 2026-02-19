export const get = async (url: string, params?: any) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
  }
};
