"use server";

export async function getUserData() {
  console.log("getUserData");
  return { name: "John Doe" };
}

export async function getUserSSN() {
  return { ssn: "123-45-6789" };
}
