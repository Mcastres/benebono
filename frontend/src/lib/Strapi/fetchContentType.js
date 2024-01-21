import fetch from "node-fetch";
import spreadStrapiData from "./spreadStrapiData";

/**
 * Fetches data for a specified Strapi content type.
 *
 * @param {string} contentType - The type of content to fetch from Strapi.
 * @param {string} params - Query parameters to append to the API request.
 * @param {boolean} spreadData - Determines whether to spread the data using spreadStrapiData function.
 * @return {Promise<object>} The fetched data, spread or as-is based on spreadData flag.
 */

export default async function fetchContentType(
  contentType,
  params = "",
  spreadData = true
) {
  try {
    // Construct the full URL for the API request
    const url = new URL(`api/${contentType}`, process.env.API_URL);

    // Perform the fetch request with the provided query parameters
    const response = await fetch(`${url.href}?${params}`);
    const jsonData = await response.json();

    // Return the JSON data, optionally spread using spreadStrapiData
    return spreadData ? spreadStrapiData(jsonData) : jsonData;
  } catch (error) {
    // Log any errors that occur during the fetch process
    console.error("FetchContentTypeError", error);
  }
}
