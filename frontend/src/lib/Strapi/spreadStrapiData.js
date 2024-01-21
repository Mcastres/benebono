/**
 * spreadStrapiData - Flattens Strapi response data for easier access.
 *
 * This function takes a response object from a Strapi API call and simplifies its structure.
 * If the 'data' property of the input is an array, the function maps over each element,
 * extracting the 'id' and spreading the rest of the attributes at the top level of a new object.
 * If the 'data' property is not an array, it directly extracts the 'id' and spreads the attributes
 * at the top level of a new object.
 * This utility is useful for normalizing Strapi data, whether it's a single object or an array of objects.
 *
 * @param {Object} data The response object from a Strapi API call.
 * @returns {Object | Object[]} An object or array of objects containing 'id' and all attributes
 * from the Strapi response at the top level.
 */

export default function spreadStrapiData(data) {
  if (Array.isArray(data.data)) {
    return data.data.map(({ id, attributes }) => ({ id, ...attributes }))
  }
  return { id: data.data?.id, ...data.data?.attributes }
}
