export async function getZohoProducts() {
  const apiKey = "your_api_key";
  const storeId = "your_store_id";
  const apiUrl = `https://commerce.zoho.com/api/v1/store/${storeId}/products`;

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const data = await response.json();
  return data;
}
