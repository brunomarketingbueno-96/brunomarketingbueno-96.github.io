import { useState } from "react";

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorKey, setErrorKey] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email && !formData.whatsapp) {
      setErrorKey("contact.form.messages.validationError");
      setStatus("error");
      return;
    }

    setErrorKey("");
    setStatus("loading");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", whatsapp: "", message: "" });
        setTimeout(() => setStatus("idle"), 9000);
      } else {
        setStatus("error");
        setErrorKey("contact.form.messages.genericError");
      }
    } catch (error) {
      setStatus("error");
      console.error(error);
      setErrorKey("contact.form.messages.genericError");
    }
  };

  return {
    formData,
    status,
    errorKey,
    handleChange,
    handleSubmit
  };
}
