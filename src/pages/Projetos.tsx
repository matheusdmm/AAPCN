const projectImages = {
  project1:
    'https://images.unsplash.com/photo-1707096358101-cce6ccae97ab?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  project2:
    'https://images.unsplash.com/photo-1728232881321-0793049dc5ae?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const Projetos: React.FC = () => {
  return (
    <>
      <section id="projetos" className="py-16 bg-white h-screen">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#ae1c27] mb-12">
            Projetos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img
                src={projectImages.project1}
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
                src={projectImages.project2}
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
                src={projectImages.project1}
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
    </>
  );
};

export default Projetos;
