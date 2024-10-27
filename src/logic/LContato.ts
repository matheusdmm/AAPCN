import { useState } from 'react';

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário enviados:', formData);
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
