// utils/graphql.js
import axios from 'axios';

const GRAPHQL_ENDPOINT = 'https://c1b23f-2.myshopify.com/admin/api/2023-10/graphql.json';

export const fetchGraphQLData = async (query) => {
  try {
    const response = await axios.post(
      GRAPHQL_ENDPOINT,
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': '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'
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching GraphQL data:', error);
    throw error;
  }
};
