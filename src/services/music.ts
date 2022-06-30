import { get } from "src/services/utils";

async function searchMusic(keywords: string, page = 0) {
  try {
    const searchResults = await get(
      `/api/music?keywords=${encodeURIComponent(keywords)}&page=${page}`
    );
    console.debug({ page, searchResults });
    return searchResults;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { searchMusic };
