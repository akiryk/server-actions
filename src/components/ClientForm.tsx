"use client";
import { getUserData } from "@/app/server-utils";

const ClientForm = () => {
  return (
    <form action={getUserData}>
      <input type="text" placeholder="Name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ClientForm;
