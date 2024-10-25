import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import links from '../components/Links';

const Projetos: React.FC = () => {
  return (
    <>
      <Navbar links={links} />

      <section id="projetos" className="py-16 bg-white h-[80vh]">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#084a60] mb-12">
            Projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Projeto 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#ae1c27] mb-2">
                  Projeto 1
                </h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus nemo libero ducimus possimus repellat suscipit?
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Projeto 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#ae1c27] mb-2">
                  Projeto 2
                </h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                  ducimus aut deleniti velit deserunt cupiditate iste explicabo
                  unde sint veritatis.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Projeto 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#ae1c27] mb-2">
                  Projeto 3
                </h3>
                <p className="text-gray-700 mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores tempora quos at voluptate, vel adipisci dignissimos
                  voluptates?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer links={links} />
    </>
  );
};

export default Projetos;
