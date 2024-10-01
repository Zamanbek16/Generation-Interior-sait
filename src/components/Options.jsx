import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Options = ({
  setTextToUserOptionsComponent,
  setTextToGptOptionsComponent,
  setArrayOptions,
}) => {
  const [style, setStyle] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [nameOfRoom, setNameOfRoom] = useState("");
  const [otherThings, setOtherThings] = useState("");
  const [window, setWindow] = useState("");
  const [quantity, setQuantity] = useState("");
  const [furniture, setFurniture] = useState("");
  const [decor, setDecor] = useState("");
  const [ton, setTon] = useState([]);

  const changeGptOptions = () => {
    setTextToGptOptionsComponent(promptToGpt);
  };

   const addToArray = () => {
    // Создаем объект с переменными
    const newOptions = {
      style,
      length,
      width,
      height,
      nameOfRoom,
      otherThings,
      window,
      quantity,
      furniture,
      decor,
      ton,
    };
    setArrayOptions(newOptions);

  }

  const changeUserOptions = () => {
    setTextToUserOptionsComponent(promtTextForUser);
  };

  useEffect(() => {
    changeGptOptions();
    changeUserOptions();
    addToArray();
  }, [
    style,
    length,
    width,
    height,
    window,
    nameOfRoom,
    ton,
    otherThings,
    furniture,
    decor,
    quantity,
  ]);

  const promtTextForUser = `в стиле ${style} размером ${length} м длины, ${width} м ширины и ${height} м высоты потолка.
  Окна размером ${window} миллиметров. 
  В комнате также есть ${otherThings}, ${furniture}, ${decor}. 
   Количество картинок должно быть ${quantity}`;

  const promptToGpt = `Ты профессиональный архитектор и дизайнер интерьера с опытом более 10 лет. Генерируй инетерьер испульзуя все знания стилей в архитектуре.
  В современной реальности большинству людей нравятся современные стили минимализма из натуральных материалов. 
  Учитывая эти условия сгенерируй интерьер в стиле ${style} для ${nameOfRoom} комнаты размером ${length} метров длины, ${width} метров ширины 
  и ${height} метров высоты потолка, цветовая гамма и тональность комнаты ${ton}. 
  В комнате также есть ${otherThings}, ${furniture}, ${decor}. Количество картинок должно быть ${quantity}`;

  const simplePromtText = `Сгенерируй дизайн интерьера в стиле ${style}, для ${nameOfRoom}, размером ${length} м длины, ${width} м ширины и ${height} м высоты потолка. 
  В комнате также есть ${otherThings}, ${furniture}, ${decor}. Количество картинок должно быть ${quantity}`;

  return (
    <div className="w-full h-full pb-20 flex flex-col items-center justify-center optionsBg bg-no-repeat">
      <div className="text-center mb-10  text-yellow-100">
        <h3 className="font-bold text-lg mt-[200px]">
          {" "}
          Создайте свой интерьер
        </h3>
        <p>
          Вы можете создать индивидуальный интерьер. Заполните параметры и
          создавайте дизайн вашей мечты!
        </p>
      </div>

      <div className="flex space-x-20">
        <div className="flex flex-col gap-5 text-white ">
          <div className="flex flex-col items-center gap-2">
            <h5 className=" ">Задайте параметры помещения</h5>
            <input
              type="text"
              onChange={(e) => setLength(e.target.value)}
              className="w-[250px] h-[40px] text-blue-950 border-solid border-2 border-blue-950 pl-4"
              placeholder="Длина в метрах"
            />
            <input
              type="text"
              onChange={(e) => setWidth(e.target.value)}
              className="w-[250px] h-[40px] text-blue-950 border-solid border-2 border-blue-950 pl-4"
              placeholder="Ширина в метрах"
            />
            <input
              type="text"
              onChange={(e) => setHeight(e.target.value)}
              className="w-[250px] h-[40px] text-blue-950 border-solid border-2 border-blue-950 pl-4"
              placeholder="Высота в метрах"
            />
          </div>
          <div className="flex flex-col items-center">
            <label for="style">Выберите стиль интерьера</label>

            <select
              className="w-[250px] h-[40px] text-slate-800 border-solid border-2 border-blue-950 pl-4"
              onChange={(e) => setStyle(e.target.value)}
              name="style"
              id="style"
            >
              <option value="минимализм">Минимализм</option>
              <option value="лофт">Лофт</option>
              <option value="классика">Классика</option>
              <option value="арт-деко">Арт-деко</option>
              <option value="эклектики">Эклектика</option>
              <option value="модерна">Модерн</option>
              <option value="конструктивизма">Конструктивизм</option>
              <option value="кантри">Кантри</option>
              <option value="ренесанса">Ренесанс</option>
              <option value="хай-тека">Хай-тек</option>
              <option value="футуризма">Футуризм</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-white">
          <div className="flex flex-col items-center">
            <label for="style">Введите размеры окна</label>

            <input
              type="text"
              onChange={(e) => setWindow(e.target.value)}
              className="w-[250px] h-[40px] text-blue-950 border-solid border-2 border-blue-950 pl-4"
              placeholder="000 х 000 мм"
            />
          </div>
          <div className="flex flex-col items-center">
            <label for="style">Выберите оттенок</label>

            <select
              className="w-[250px] h-[40px] border-solid border-2 border-blue-950 pl-4 text-slate-800"
              onChange={(e) => setTon(e.target.value)}
              name="ton"
              id="ton"
              placeholder="Оттенок комнаты"
            >
              <option value="произвольном">Произвольный</option>
              <option value="в светлых тонах">В светлых тонах</option>
              <option value="в темных тонах">В темных тонах</option>
              <option value="в серых тонах">В серых тонах</option>
              <option value="в бежевых тонах">В бежевых тонах</option>
              <option value="в коричневых тонах">В коричневых тонах</option>
              <option value="бело-сером">Бело-серый</option>
            </select>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="">Дополнительные элементы декора</h5>
            <input
              type="text"
              onChange={(e) => setOtherThings(e.target.value)}
              className="w-[250px] h-[40px] text-blue-950 border-solid border-2 border-blue-950 pl-4"
              placeholder="Например: люстра, цветы и пр..."
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 text-white">
          <div className="flex flex-col items-center">
            <h5 className="">Укажите мебель</h5>
            <input
              type="text"
              onChange={(e) => setFurniture(e.target.value)}
              className="w-[250px] h-[40px] text-blue-950 border-solid border-2 border-blue-950 pl-4"
              placeholder="Например: шкаф, диван и пр..."
            />
          </div>
          <div className="flex flex-col items-center">
            <h5 className="">Укажите текстиль и другие предметы быта</h5>
            <input
              type="text"
              onChange={(e) => setDecor(e.target.value)}
              className="w-[250px] h-[40px] text-blue-950 border-solid border-2 border-blue-950 pl-4"
              placeholder="Например: шторы, вазы и пр..."
            />
          </div>
          <div className="flex flex-col items-center text-white">
            <h5 className="">Укажите количество картинок</h5>
            <input
              type="text"
              onChange={(e) => setQuantity(e.target.value)}
              className="w-[250px] h-[40px] text-blue-950 border-solid border-2 border-blue-950 pl-4"
              placeholder="Количество"
            />
          </div>
        </div>
      </div>
      {/* <Link to="/newResultPage">
        <button className="mt-[20px] mb-[200px] bg-blue-950 text-lg px-6 py-2 text-white font-bold border-[2px] border-yellow-200">
          Сгенерировать интерьер
        </button>
      </Link> */}
      <Footer />
    </div>
  );
};
export default Options;
