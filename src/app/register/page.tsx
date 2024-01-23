import { ILOP } from "@/assets";
import { RegisterForm } from "@/components";
import Image from "next/image";
import React from "react";

const RegisterPage = () => {
  return (
    <section className="antiliased">
      <div className="auth-page">
        <div className="h-screen flex justify-center items-center">
          <div className="hidden md:block lg:w-1/3  h-full auth-background rounded-tr-lg rounded-br-lg">
            <Image src={ILOP} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
