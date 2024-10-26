interface Icard {
  img: string;
  title: string;
  text: string;
}

const Card: React.FC<Icard> = ({ img, title, text }: Icard) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
      <img
        src={img}
        alt={`Imagem de ${title}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#ae1c27] mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{text}</p>
      </div>
    </div>
  );
};

export default Card;
