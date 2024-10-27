import Card from '../components/Card';

const test = {
  img: 'https://images.unsplash.com/photo-1707096358101-cce6ccae97ab?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Projeto',
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ducimus aut deleniti velit deserunt cupiditate iste explicabo unde sint veritatis.',
};

const Projetos: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#ae1c27] mb-12">
            Projetos
          </h2>

          <hr className="my-12 h-0.5 border-t-0 bg-[#ae1c27]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card img={test.img} title={test.title} text={test.text} />
            <Card img={test.img} title={test.title} text={test.text} />
            <Card img={test.img} title={test.title} text={test.text} />
            <Card img={test.img} title={test.title} text={test.text} />
            <Card img={test.img} title={test.title} text={test.text} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projetos;
