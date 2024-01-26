import { getUser } from ".";

export const getCampaignByUser = async () => {
  try {
    const user = await getUser("id");
    const apiUrl = process.env.API_URL;
    const getCampaigns = await fetch(`${apiUrl}/campaigns?user_id=${user}`, {
      cache: "no-cache",
    });
    if (!getCampaigns.ok) {
      throw new Error("Failed to fetch campaign");
    }
    return await getCampaigns.json();
  } catch (error) {
    console.log(error);
  }
};
