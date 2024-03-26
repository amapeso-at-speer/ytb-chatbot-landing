"use client";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/ui/navbar";
import Card from "@/components/ui/card";
import "./page.css";
import FormInput from "@/components/ui/input";
import { LitUpBorderButton } from "@/components/ui/lit-up-border-button";
import { AiOutlineLoading } from "react-icons/ai";
import { FieldValues, useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

export default function AccessForm() {
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    criteriaMode: "all"
  });

  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const validateName = (name: string) => {
    if (name.trim().length === 0) {
      return "Please enter your full name";
    }

    return true;
  }

  const validateEmail = (email: string) => {
    if (email.trim().length === 0) {
      return "Please enter your email";
    }

    return true;
  }

  const validatePhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) {
      return true;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return "Please enter a valid phone number";
    }

    return true;
  }

  const submitForm = (formData: FieldValues) => {
    const data = {
      ...formData,
      "time_received": new Date().toString(),
    };

    setLoading(true);
    setIsSuccess(null);
    fetch('https://api.apispreadsheets.com/data/OMVBB16BU4dpJClT/', {
      method: "POST",
      body: JSON.stringify({ "data" : data }),
    }).then((res => {
      setLoading(false);
      if (res.status === 201) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    }));
  }

  return (
    <>
    <div className="w-full flex flex-1 flex-col">
      <NavBar/>
      <section className="flex flex-1 items-center justify-center">
        <div className="px-5 w-full max-w-screen-md">
          <Card className="p-8 pb-10">
            <h1 className="mt-3 font-bold text-2xl">Request beta access</h1>
            <p className="text-lg text-white/70">Sign up now to request beta access and be among the first to experience our cutting-edge AI chatbot for YouTube video insights.</p>
            <form className="flex flex-col mt-10" id="request-access-form" onSubmit={handleSubmit(submitForm)}>
              <FormInput
                control={control}
                errors={errors}
                className="mb-5"
                name="full_name"
                labelText="Full Name"
                placeholder="ex. John Doe"
                rules={{
                  required: true,
                  validate: validateName,
                }}
              />
              <FormInput
                control={control}
                errors={errors}
                className="mb-5"
                name="email"
                labelText="Email"
                type="email"
                placeholder="ex. johndoe@example.com"
                rules={{
                  required: true,
                  validate: validateEmail,
                }}
              />
              <FormInput
                control={control}
                errors={errors}
                className="mb-10 w-1/2"
                name="phone"
                labelText="Phone"
                type="tel"
                rules={{
                  validate: validatePhoneNumber,
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    className={"bg-light-blue/20 rounded-sm outline outline-1 outline-light-blue placeholder:text-light-blue/70 " +
                      (errors?.phone ? "outline-red-500" : "")
                    }
                    placeholder="ex. (123) 456-7890"
                    value={value}
                    onChange={onChange}
                    defaultCountry="US"
                  />
                )}
              />
              {!isSuccess && <LitUpBorderButton
                className="self-center mb-3 mt-3"
                isFormButton={true}
                disabled={loading}
              >
                <div className="py-2 px-5 flex items-center relative">
                  <p className={"text-lg " + (loading ? "opacity-0" : "" )}>Request Access</p>
                  {loading && <div className="left-1/2 absolute loading-icon-wrapper">
                    <AiOutlineLoading className="animate-loading loading-icon"/>
                  </div>}
                </div>
              </LitUpBorderButton>}
              {
                isSuccess != null &&
                (
                  <p className="self-center">
                    { 
                      isSuccess ?
                        <span className="text-lg block my-3">Thank you! We have received your request.</span> :
                        "Something went wrong. Please try your request again!"
                    }
                  </p>
                )
              }
            </form>
          </Card>
        </div>
      </section>
    </div>
    </>
  );
}
