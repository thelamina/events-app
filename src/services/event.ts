export const getAllEvents = async () => {
  try {
    const url =
      "https://rest.bandsintown.com/artists/john%20legend/events?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error((error as { message: string }).message);
  }
};
