import axios from "axios";
import { getUser } from ".";
import Cookies from "js-cookie";
import { CreateCampaignForm } from "@/app/dashboard/create/page";

export const getCampaignByUser = async () => {
  try {
    const user = await getUser("id");
    console.log(user);
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

export const createCampaign = async (data: CreateCampaignForm) => {
  try {
    const apiUrl = process.env.API_URL;
    const token = Cookies.get("token");
    const response = await axios.post(`${apiUrl}/campaigns`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const newCampaign = response.data;
    return newCampaign;
  } catch (error) {
    console.log(error);
  }
};
