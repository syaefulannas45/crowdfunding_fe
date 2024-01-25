"use client"
import { ICAvatarAdd, ILAvatar } from "@/assets";
import axios from "axios";
import { cookies } from "next/headers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useRef, useState } from "react";

interface Avatar {
  avatar: File | null;
}
const UploadAvatar = ({ name }: { name: string }) => {
  let avatarUser: Avatar = { avatar: null };
  let inputRef: any = { current: null };

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      avatarUser.avatar = file;
    }
  }

  function handleImageClick() {
    inputRef.current.click();
  }

  async function handleSignUp() {
    try {
      const apiUrl = process.env.API_URL;
      const cookie = cookies();
      const token = cookie.get("token")?.value;
      const uploadAvatar = await axios.post(`${apiUrl}/avatars`, avatarUser, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (uploadAvatar) {
        alert("success");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full lg:w-1/3 px-10 lg:px-0">
      <div className="flex justify-center items-center mx-auto mb-4 w-40">
        <button className="relative" onClick={handleImageClick}>
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
        </button>
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
  );
};

export default UploadAvatar;
