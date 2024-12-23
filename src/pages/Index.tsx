import Header from '../components/Header';

const headerImgs = [
  'https://images.unsplash.com/photo-1506463108611-88834e9f6169?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://placeholder.com/1920x1080',
];

const Index = () => {
  return (
    <>
      <Header imgSources={headerImgs} />

      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#ae1c27] mb-8">
            Quem Somos Nós?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                <span className="text-[#ae1c27] font-semibold">
                  Integer nec odio.
                </span>{' '}
                Praesent libero. Sed cursus ante dapibus diam. Sed nisi.{' '}
                <span className="text-[#ae1c27] font-semibold">
                  Nulla quis sem at nibh elementum imperdiet.
                </span>{' '}
                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
                semper porta.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700">
                Mauris massa. Vestibulum lacinia arcu eget nulla.{' '}
                <span className="text-[#ae1c27] font-semibold">
                  className aptent taciti sociosqu ad litora torquent.
                </span>
                Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.{' '}
                <span className="text-[#ae1c27] font-semibold">
                  Curabitur tortor. Pellentesque nibh.
                </span>{' '}
                Aenean quam. In scelerisque sem at dolor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
