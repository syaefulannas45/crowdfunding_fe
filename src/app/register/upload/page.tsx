"use client";
import Cookies from "js-cookie";
import axios from "axios";
import { ICAvatarAdd, ILAvatar } from "@/assets";
import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Avatar {
  avatar: File | null;
}
const UploadProfilePage = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  const token = Cookies.get("token");
  const apiUrl = process.env.API_URL;

  const getUser = async () => {
    try {
      const fetchUser = await axios.post(`${apiUrl}/users/fetch`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const nameUser: string = fetchUser.data.data.name;
      setName(nameUser);
    } catch (error) {
      if (error) {
        window.location.href = "/register";
      }
    }
  };
  getUser();

  const [avatarUser, setAvatarUser] = useState<Avatar>({
    avatar: null,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarUser({ ...avatarUser, avatar: file });
    }
  }

  if (name === "") {
    return <div className="bg-blue-700 h-screen w-full"></div>;
  }

  function handleImageClick() {
    inputRef.current?.click();
  }

  async function handleSignUp() {
    try {
      const apiUrl = process.env.API_URL;

      const token = Cookies.get("token");
      const uploadAvatar = await axios.post(`${apiUrl}/avatars`, avatarUser, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const isUploaded = uploadAvatar.data.data.is_uploaded;
      if (isUploaded) {
        router.push("/register/success");
      } else {
        alert("Gagal mengupload foto");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (name !== "")
    return (
      <section className="antiliased">
        <div className="auth-page">
          <div className="container mx-auto h-screen flex justify-center items-center">
            <div className="w-full lg:w-1/3 px-10 lg:px-0">
              <div className="flex justify-center items-center mx-auto mb-4 w-40">
                <div className="relative" onClick={handleImageClick}>
                  <Image
                    src={
                      avatarUser.avatar
                        ? URL.createObjectURL(avatarUser.avatar)
                        : ILAvatar
                    }
                    alt=""
                    className="rounded-full border-white border-4 w-[150px] h-[150px] object-cover"
                    priority
                    width={500}
                    height={500}
                  />
                  <div className="absolute right-0 bottom-0 pb-2">
                    <ICAvatarAdd />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    ref={inputRef}
                  />
                </div>
              </div>
              <h2 className="font-normal mb-3 text-3xl text-white text-center">
                Hi, {name}
              </h2>
              <p className="text-white text-center font-light">
                Please upload your selfie
              </p>
              <div className="mb-4 mt-6">
                <div className="mb-3">
                  <button
                    onClick={handleSignUp}
                    className="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <button className="block w-full bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light px-6 py-4 text-lg rounded-full">
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default UploadProfilePage;
