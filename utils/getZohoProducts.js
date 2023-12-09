export async function getZohoProducts() {
  const apiKey = "1000.df72e72d9ece4b4b857a39fc3b52bdcd.6b22794ab6ef69a014edba4a157fe576";
  const storeId = "60025641214";
  const apiUrl = `https://commerce.zoho.com/api/v1/store/${storeId}/products`;

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  const data = await response.json();
  return data;
}
