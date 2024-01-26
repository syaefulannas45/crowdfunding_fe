"use server";
import { cookies } from "next/headers";

export const getUser = async (key: string) => {
  try {
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    const apiUrl = process.env.API_URL;
    const response = await fetch(`${apiUrl}/users/fetch`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = await response.json();
    if (key !== undefined) {
      return user.data[key];
    }
    return user.data;
  } catch (error) {
    console.log(error);
  }
};
