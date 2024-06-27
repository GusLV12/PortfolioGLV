import {client} from '../Auth/auth.jsx'

export const fetchData = async (contentType) => {
  try {
    const response = await client.getEntries({
      content_type: contentType,
      select: 'fields'
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching data from Contentful: ", error);
    throw error;
  }
};