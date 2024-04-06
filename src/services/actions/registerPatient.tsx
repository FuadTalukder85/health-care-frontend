"use server";

export const registerPatient = async (formData: FormData) => {
  const res = await fetch(`${process.env.BACKEND_URL}/user/create-patient`, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });
  const pretientInfo = await res.json();
  return pretientInfo;
};
