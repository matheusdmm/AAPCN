import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import links from '../components/Links';
import React, { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
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
    // Aqui você pode implementar a lógica para enviar os dados do formulário
    console.log('Dados do formulário enviados:', formData);
    setFormData({ nome: '', email: '', mensagem: '' }); // Limpar formulário após envio
  };

  return (
    <>
      <Navbar links={links} />

      <section id="contato" className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#084a60] mb-8">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Se você tiver alguma dúvida ou sugestão, entre em contato conosco
            preenchendo o formulário abaixo:
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="nome">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ae1c27]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ae1c27]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="mensagem">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ae1c27]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-[#ae1c27] rounded-lg hover:bg-[#8a151f] font-semibold"
            >
              Enviar Mensagem
            </button>
          </form>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[#ae1c27] mb-4">
              Informações de Contato
            </h3>
            <p className="text-gray-700">E-mail: contato@aapcn.org</p>
            <p className="text-gray-700">Telefone: (11) 1234-5678</p>
          </div>
        </div>
      </section>

      <Footer links={links} />
    </>
  );
};

export default Contato;
