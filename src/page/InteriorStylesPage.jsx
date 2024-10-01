import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ingredient from "../components/Ingredient";

const GenerationPage = () => {

   const ingredientsData = [
     { name: "Воспитательные", imageSrc: "/images/Fairy/vospitatelnye.jpg" },
     { name: "Народные", imageSrc: "/images/Fairy/pouchitelnye.jpg" },
     { name: "Познавательные", imageSrc: "/images/Fairy/poznavatelnye.jpg" },
     { name: "Семейные", imageSrc: "/images/Fairy/semeinye.jpg" },
     { name: "Про дружбу", imageSrc: "/images/Fairy/prodrujbu.png" },
     { name: "Про принцесс", imageSrc: "/images/Fairy/proprinces.jpg" },
     { name: "Старые добрые", imageSrc: "/images/Fairy/staryedobrye.jpg" },
     { name: "Про животных", imageSrc: "/images/Fairy/projivotnyh.jpg" },
     { name: "Сказка на ночь", imageSrc: "/images/Fairy/toslip.jpg" },
     { name: "Приключения", imageSrc: "/images/Fairy/adventures.jpg" },
     { name: "Сказкотерапия", imageSrc: "/images/Fairy/skazkoterapiya.jpg" },
     { name: "О природе", imageSrc: "/images/Fairy/oprirode.jpg" },
     { name: "Волшебные", imageSrc: "/images/Fairy/magic.webp" },
     { name: "Про героев", imageSrc: "/images/Fairy/magic.webp" },
     { name: "Короткие", imageSrc: "/images/Fairy/magic.webp" },
     { name: "Про любовь", imageSrc: "/images/Fairy/magic.webp" },
     { name: "Смешные", imageSrc: "/images/Fairy/magic.webp" },
     { name: "Терапевтические", imageSrc: "/images/Fairy/magic.webp" },
     { name: "Современные", imageSrc: "/images/Fairy/magic.webp" },
     { name: "Для малышей", imageSrc: "/images/Fairy/magic.webp" },
     { name: "О феях", imageSrc: "/images/Fairy/toslip.jpg" },
     { name: "В стихах", imageSrc: "/images/Fairy/toslip.jpg" },
   ];

  return (
    <div className="flex flex-col min-h-[100vh] justify-between">
      <Navbar />
      <div className="flex flex-col pt-40 bg-gray-100">
        <div className="flex flex-wrap">
          {ingredientsData.map((ingredient, index) => (
            <Ingredient
              className="flex flex-col"
              key={index}
              imageSrc={ingredient.imageSrc}
              name={ingredient.name} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenerationPage;
