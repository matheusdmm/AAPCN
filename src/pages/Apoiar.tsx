import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import links from '../components/Links';

const Apoiar = () => {
  return (
    <>
      <Navbar links={links} />

      <section id="como-apoiar" className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#084a60] mb-8">
            Como Apoiar
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Sua contribuição é essencial para o sucesso dos nossos projetos.
            Confira abaixo algumas maneiras de nos apoiar e faça parte da nossa
            jornada!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-[#ae1c27] mb-4">
                Doação Financeira
              </h3>
              <p className="text-gray-700 mb-6">
                Contribua com um valor financeiro que será utilizado para o
                desenvolvimento e manutenção dos nossos projetos.
              </p>
              <button className="px-6 py-3 text-white bg-[#ae1c27] rounded-lg hover:bg-[#8a151f] font-semibold">
                Doar Agora
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-[#ae1c27] mb-4">
                Voluntariado
              </h3>
              <p className="text-gray-700 mb-6">
                Doe seu tempo e habilidades para colaborar em nossos projetos.
                Toda ajuda é bem-vinda e faz a diferença!
              </p>
              <button className="px-6 py-3 text-white bg-[#ae1c27] rounded-lg hover:bg-[#8a151f] font-semibold">
                Seja Voluntário
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-[#ae1c27] mb-4">
                Parcerias
              </h3>
              <p className="text-gray-700 mb-6">
                Entre em contato para desenvolvermos parcerias que possam
                impulsionar ainda mais nossas iniciativas.
              </p>
              <button className="px-6 py-3 text-white bg-[#ae1c27] rounded-lg hover:bg-[#8a151f] font-semibold">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer links={links} />
    </>
  );
};

export default Apoiar;
