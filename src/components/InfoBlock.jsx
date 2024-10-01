import toslip from '../../public/images/Fon14.jpg'
import { Link } from "react-router-dom";
import Footer from "./Footer"

const InfoBlock = () => {
    return (
      <div className="flex w-full flex-col infoBlockBg">
        <div className="flex w-full justify-evenly items-center">
          <div className="w-[500px] space-y-4 flex flex-col">
            {/* <div className="text-xl font-bold w-[400px] md:w-[600px] lg:w-[1500px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, magnam?</div> */}

            <div className=" mt-[90px] mb-3 p-4 text-white italic bg-emerald-950 bg-opacity-20 flex flex-col items-center">
              <h1 className="text-white italic text-lg">
                Диза́йн интерье́ра (интерье́рный диза́йн)
              </h1>
              <p className=" mt-[5px] text-white italic">
                Разработка дизайна интерьера начинается с составления
                дизайн-проекта — комплекта документов, описывающих
                функциональные и дизайнерские решения, в них содержатся чертежи
                помещения и описания всех деталей будущего интерьера, включая
                отделочные материалы и расположение коммуникаций. Поскольку,
                дизайнер должен по максимуму использовать возможное
                пространство, множество деталей зависящих от самой конструкции
                дома, дизайнер уточняет у инженера-строителя. В работе над
                проектом, дизайнер часто напрямую сотрудничает с строителями,
                подрядчиками и архитекторами, для того, что бы все внесённые
                изменения были в рамках строительных и санитарных норм. В
                проекте присутствует техническое задание, в котором описаны все
                требования и пожелания заказчика. Сначала производятся обмеры
                помещения, после чего разрабатываются примерные планировочные
                решения и эскизы. На этом этапе дизайнер предлагает заказчику
                несколько вариантов планировки с распределением основных
                функциональных зон и расстановкой мебели. Так как
                3D-моделирование — трудозатратный процесс, на этапе примерного
                планирования подробные трёхмерные модели разрабатываются только
                после согласования с заказчиком. После утверждения размещения
                зон разрабатываются проектировочные чертежи электрических
                проводов и планируется расположение электроприборов (освещение,
                электрический обогрев и прочее); в случае необходимости
                выполняются чертежи изменений в планировке; план потолков и
                напольных покрытий, размещения сантехнического оборудования,
                ведомости, содержащие сведения об отделке и заказываемых
                материалах и предметах мебели и декоре.
              </p>
              {/* <a href="/generate" className="text-blue">
              клик
            </a> */}
            </div>
            {/* <Link to="/generate">
            <button className="m-[50px] bg-blue-950 text-lg px-6 py-2 text-white font-bold border-[2px] border-yellow-200 rounded-2xl">
              Сгенерировать интерьер
            </button>
          </Link> */}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="w-[600px] mt-[5px] text-white italic">
              На нашем сайте вы можете в пару кликов создать свой интерьер!
              Достаточно заполнить параметры на странице генрации интерьеров.
            </h1>
            <p className="w-[400px] mt-[10px] text-white italic">
              У дачи и приятных вам интеьеров!!!
            </p>
            <Link to="/generate">
              <img
                src={toslip}
                alt="skazki"
                width={400}
                className="w-[500px] mt-[50px] mb-[20px] rounded-[20px] border-[2px] border-yellow-200"
              />
            </Link>
            <button className=" bg-gray-500 text-lg px-6 py-2 text-white font-bold border-[1px] border-yellow-200">
              Нажмите на картинку
            </button>
          </div>
        </div>
        <Footer />
        {/* <span class="material-icons">home</span> */}
      </div>
    );
}

export default InfoBlock