import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import links from '../components/Links';

const Sobre = () => {
  return (
    <>
      <Navbar links={links} />
      <section id="sobre" className="py-16 bg-white h-[80vh]">
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

      <Footer links={links} />
    </>
  );
};

export default Sobre;
