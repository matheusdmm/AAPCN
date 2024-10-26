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

  const contactData = {
    email: 'contato@aapcn.org',
    telefone: '(51) 1111-1111',
    horarios: 'Dados necessários',
    endereco: 'Rua alguma coisa',
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 flex">
        <div className="w-1/3 pr-8">
          <h3 className="text-2xl font-semibold text-[#ae1c27] mb-4">
            Informações de Contato
          </h3>
          <p className="text-gray-700">{contactData.email}</p>
          <p className="text-gray-700">{contactData.telefone}</p>
          <p className="text-gray-700">{contactData.endereco}</p>
          <p className="text-gray-700">{contactData.horarios}</p>
        </div>

        <div className="w-2/3">
          <h2 className="text-4xl font-bold text-[#ae1c27] mb-8">
            Entre em contato conosco!
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Se você tiver alguma dúvida, sugestão ou gostaria de saber mais,
            entre em contato conosco preenchendo o formulário abaixo:
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8"
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
        </div>
      </div>
    </section>
  );
};

export default Contato;
