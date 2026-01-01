"use client";
import { useState } from "react";
import InputBox from "./InputBox";
import YellowButton from "../accentButton/yellowAccentButton";

export default function ContactForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div className="flex flex-col gap-3">
      <InputBox label="First Name" value={firstName} setValue={setFirstName} />
      <InputBox label="Last Name" value={lastName} setValue={setLastName} />
      <InputBox label="Email" value={email} setValue={setEmail} />
      <YellowButton className="w-1/2">Sign Up</YellowButton>
    </div>
  );
}
