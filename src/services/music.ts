import { get } from "src/services/utils";

async function searchMusic(keywords: string) {
  try {
    const searchResults = await get(
      `/api/music?keywords=${encodeURIComponent(keywords)}`
    );
    console.debug({ searchResults });
    return searchResults;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { searchMusic };
