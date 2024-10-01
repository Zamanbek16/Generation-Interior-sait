import React, { useState } from "react";
import Ingredient from "./Ingredient";
import { Link } from "react-router-dom";
import Options from "./Options";
import loading from "../../public/images/loading2.gif";
import GenerationResoult from "./GenerationResoult";

const Choose = () => {

  const [textToUserOptionsComponent, setTextToUserOptionsComponent] = useState();
  const [textToGptOptionsComponent, setTextToGptOptionsComponent] = useState();
  const [arrayOptions, setArrayOptions] = useState([]);
  const [responseText, setResponseText] = useState();
  const apikey = import.meta.env.VITE_API_KEY;


  
  const collectChooses = () => {
    let text =
      "Сгенерируй дизайн интерьера " +
      gptPromptText.toString("") + ", " +
      "используя эти параметры: " +
      textToUserOptionsComponent;
    return text;
  };
  
  const [urlOfImage, setUrlOfImage] = useState('');

  const ingredientsData = [
    {
      name: "Гостийная",
      gname: "гостийной",
      imageSrc: "/images/Gostinaya.jpg",
    },
    { name: "Холл", gname: "холла", imageSrc: "/images/Holl.webp" },
    { name: "Спальня", gname: "спальни", imageSrc: "/images/Spalnya.jpg" },
    { name: "Детская", gname: "детской комнаты", imageSrc: "/images/Detskaya.jpg" },
    { name: "Прихожая", gname: "прихожей", imageSrc: "/images/Prihojaya.jpg" },
    { name: "Ванна", gname: "ванной комнаты", imageSrc: "/images/Bath.jpg" },
    { name: "Мансарда", gname: "мансарды", imageSrc: "/images/Mansarda.webp" },
    { name: "Гардероб", gname: "гардероба", imageSrc: "/images/Garderob.jpg" },
    { name: "Балкон", gname: "балкона", imageSrc: "/images/Balkon.jpg" },
    { name: "Уборная", gname: "уборной", imageSrc: "/images/Balkon.jpg" },
    { name: "Коридор", gname: "коридора", imageSrc: "/images/Balkon.jpg" },
    { name: "Кухня-студия", gname: "кухни-студии", imageSrc: "/images/Kuhnya-studiya.jpg" },
  ];

  const [gptPromptText, setGptPromptText] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = () => {setIsLoading(!isLoading);}

  const [showResolt, setShowResolt] = useState(false);

  const handleIngredientClick = (ingredient) => {
      setGptPromptText([...gptPromptText, ingredient.gname]);
  };
  

  const generateText = async () => {
    const ingredientsString =
      "Интерьер: " + gptPromptText.map((obj) => obj.name).join(", ");

    console.log(ingredientsString);
    let prompt =
      `Расчитать стоимость расходов на ремонт: ` +
      gptPromptText.toString();

    try {
      const response = await fetch(apiurl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 350,
        }),
      });

      const data = await response.json();
      const text = data.choices[0].text;
      console.log(text);
      setResponseText(text);

      console.log("Gtp response text: ", responseText);

      // await generateImage(responseText.substring(0, 100));

      setIsLoading(false);
    } catch (error) {
      console.error(error.response?.data ?? error.toJSON?.() ?? error);
      console.error("API error", error);
    }
  };

  const generateImage = async (prompt) => {

    setIsLoading(true);

    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apikey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            prompt: prompt,
            n: 1,
            size: "512x512",
        }),
    }
       try {

         const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            options
         );
         const data = await response.json();
         console.log("data of generatedImage is below: ", data);
         setUrlOfImage(data.data[0].url);

         await generateText();

         console.log("urlOfImage" + urlOfImage);
         setImageUrl(urlOfImage);
         setIsLoading(false);

       } catch (error) {
        setIsLoading(false);
        set
        alert('Генерация не удалась')
         console.error(error);
       }
  };



  return (
    <div className="flex flex-col bg-gradient-to-t from-teal-900 to-blue-300">
      <div className="flex pb-3 pl-3 pt-20">
        <div className="flex flex-wrap w-40% rounded-1xl">
          {ingredientsData.map((ingredient, index) => (
            <Ingredient
              className="flex"
              key={index}
              imageSrc={ingredient.imageSrc}
              name={ingredient.name}
              //   isSelected={selectedIngredients.includes(ingredient)}
              onClick={() => handleIngredientClick(ingredient)}
            />
          ))}
        </div>

        <Options
          setTextToGptOptionsComponent={setTextToGptOptionsComponent}
          setTextToUserOptionsComponent={setTextToUserOptionsComponent}
          setArrayOptions={setArrayOptions}
        />
      </div>
      <div className="flex flex-col w-[60%] align-center">
        <div className="flex justify-center w-[600px] ml-8 mt-[30px] mb-[50px]">
          <h2 className="text-center text-blue-800 text-[18px] italic font-bold pl-2 pr-6">
            <h1 className="text-center text-red-900 text-[20px] font-bold">
              Сгенерируй мне интерьер с учетом выбранных параметров:
            </h1>
            <br />
            <h3>
              Интерьер комнаты:{" "}
              <span className="font-bold text-lime-500 text-[22px]">
                {gptPromptText.toString("")}
              </span>
              <br />в стиле:{" "}
              <span className="font-bold text-lime-500 text-[22px]">
                {arrayOptions[0]}
              </span>
              <br />
              размером: <br />
              длина комнаты:{" "}
              <span className="font-bold text-lime-500 text-[22px]">
                {/* {length} */}
              </span>{" "}
              м <br />
              ширина комнаты:{" "}
              <span className="font-bold text-lime-500 text-[22px]">
                {/* {width} */}
              </span>{" "}
              м <br />
              высота потолка:{" "}
              <span className="font-bold text-lime-500 text-[22px]">
                {/* {height} */}
              </span>{" "}
              м <br />
              окна размером:{" "}
              <span className="font-bold text-lime-500 text-[22px]">
                {/* {window} */}
              </span>{" "}
              миллиметров <br />
              Цветовая гамма комнаты:{" "}
              <span className="font-bold text-lime-500 text-[22px]">
                {/* {ton} */}
              </span>{" "}
              <br />В комнате также есть:{" "}
              <span className="font-bold text-lime-500 text-[22px]">
                {/* {otherThings}, {furniture}, {decor} */}
              </span>
              <br />
              Количество картинок должно быть:{" "}
              <span className="font-bold text-lime-500 text-[22px]">
                {/* {quantity} */}
              </span>
            </h3>
            {/* {collectChooses()} */}
          </h2>
        </div>
        <div>
          In Array: {arrayOptions.toString()}
        </div>
        <div className="flex justify-center ml-6">
          <Link to="/newResultPage">
            <img src={urlOfImage} alt="Interior" width={400} />
          </Link>
        </div>
        {isLoading ? (
          <img
            src={loading}
            width={100}
            height={100}
            className="flex-center"
            alt="loading"
          />
        ) : (
          <button
            onClick={() => generateImage(collectChooses())}
            className="mt-8 mb-4 ml-[150px] h-[50px] w-[300px] bg-gradient-to-t from-teal-800 to-blue-500 text-lg px-6 py-2 text-white font-bold border-[2px] border-yellow-200 rounded-2xl"
            disabled={isLoading}
          >
            "Сгенерировать интерьер"
          </button>
        )}
      </div>
      <GenerationResoult
        responseText={responseText}
        imageUrl={imageUrl}
        show={showResolt}
      />
    </div>
  );
};


{/* <div className="flex justify-center">
  <ul>
    {gptPromptText.map((ingredient, index) => (
      <li key={index} className="color-blue-400 ">
        {ingredient}
      </li>
    ))}
  </ul>
</div>; */}

export default Choose;
