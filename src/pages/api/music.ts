import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { keywords } = req.query;

    // fetch data from itunes api
    const url = `https://itunes.apple.com/search?entity=musicArtist,song,album&term=${encodeURIComponent(
      keywords
    )}`;

    let searchResults = await axios.get(url);
    console.debug("search results", searchResults.data?.results[2]);

    // transform payload for client
    searchResults = searchResults.data?.results?.map((resultItem) => ({
      id: resultItem.trackId,
      type:
        resultItem.collectionType || resultItem.kind || resultItem.wrapperType,
      title:
        resultItem.trackName ||
        resultItem.collectionName ||
        resultItem.artistName,
      artist: resultItem.artistName,
      artwork: resultItem.artworkUrl100 || "/avatar_placeholder.png",
    }));

    return res.status(200).json(searchResults);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
}
