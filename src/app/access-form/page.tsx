"use client";
import React, { useState } from "react";
import NavBar from "@/components/ui/navbar";
import Card from "@/components/ui/card";
import "./page.css";
import Input from "@/components/ui/input";
import { LitUpBorderButton } from "@/components/ui/lit-up-border-button";
import { AiOutlineLoading } from "react-icons/ai";

export default function AccessForm() {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const submitForm = (formData: FormData) => {
    const entries = Array.from(formData.entries());
    const data = entries.reduce((prev, entry) => {
      return {
        ...prev,
        [entry[0]]: entry[1]
      };
    }, {});

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
          <Card className="pb-10">
            <h1 className="mt-3 font-bold text-2xl text-light-blue">Request beta access</h1>
            <p className="text-lg">Sign up now to request beta access and be among the first to experience our cutting-edge AI chatbot for YouTube video insights.</p>
            <form className="flex flex-col mt-10" id="request-access-form" action={submitForm}>
              <Input
                required
                className="mb-3"
                name="full_name"
                label="Full Name"
                placeholder="ex. John Doe"
              />
              <Input
                required
                className="mb-3"
                name="email"
                label="Email"
                type="email"
                placeholder="ex. johndoe@example.com"
              />
              <Input
                className="mb-10 w-1/2"
                name="phone"
                label="Phone"
                type="tel"
                placeholder="( ___ ) - ___ - ___"
              />
              <LitUpBorderButton
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
              </LitUpBorderButton>
              {
                isSuccess != null &&
                (
                  <p className="self-center">
                    { 
                      isSuccess ? "We received your request!" : "Something went wrong. Please try your request again!"
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
