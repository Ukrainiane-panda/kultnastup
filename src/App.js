import './styles/index.scss';
import ManifestSection from './components/ManifestSection';
import { MenuNavForPhone } from './components/MenuNavForPhone';
import { useState } from 'react';



function App() {
  const [transformMobileMenu, setTransformMobileMenu] = useState(-100);

  const handleOpenMenu = () => {
    setTransformMobileMenu(0);
    document.body.style.overflow = 'hidden';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="App">
      <header className="header">
        <div className="wrapper wrapper--for-menu">
          <div className="logo" />
          <button 
            type="button" 
            class="menu-for-smallScreen"
            onClick={handleOpenMenu}
          >
            <span class="icon icon-menu"></span>
          </button>
        </div>
        <nav className="header__nav nav nav--bigScreen">
          <div className="wrapper">
            <div className='nav__block'>
              <ul className="nav__list">
                <li className="nav__item">
                  <a className="nav__link" href="#about">
                    Про нас
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#program">
                    Програма форуму
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="#manifest">
                    Маніфест
                  </a>
                </li>
              </ul>

              <a href='https://docs.google.com/forms/d/e/1FAIpQLSeSr6jYMKUc-Ji1zYhSbBdZp2zLEtwLlX9JxAigCNuEtaVZGQ/viewform' className='nav__button button'>
                Реєстрація
              </a>
            </div>
          </div>
        </nav>
      </header>
      <MenuNavForPhone
        transformMobileMenu={transformMobileMenu}
        setTransformMobileMenu={setTransformMobileMenu}
      />
      <main>
        <section id="data">
          <div className="wrapper">
            <div class="container">
              <div class="background-layer"></div>
              <div class="content-layer">
                <h1 className="data__time">Київ / 9 жовтня 2024 року <br />о 14:00</h1>
                <h2 className="data__title">Форум КультНаступу</h2>
              </div>
            </div>
          </div>
        </section>

        <section id="program">
          <div className="wrapper">
            <div class="container">
              <div class="background-layer">
              </div>
              <div class="content-layer">
                <div className="program__blocks">
                  <div className="program__block-title">
                    <h3 className="program__title">Програма форуму</h3>
                    <h3 className="program__data">Київ <br /> 9 жовтня <br /> 2024</h3>
                  </div>
                  <div className="program__block-timeline">
                    <div className="program__block-item">
                      <h4 className="program__time">14:00 - 14:25</h4>
                      <p className="program__description">Вітальна кава, реєстрація учасників</p>
                    </div>
                    <div className="program__block-item">
                      <h4 className="program__time">14:30 - 14:35</h4>
                      <p className="program__description">Відкриття форуму</p>
                    </div>
                    <div className="program__block-item">
                      <h4 className="program__time">14.35 - 15.00 </h4>
                      <p className="program__description">
                        «Не ридать, а добувати…» <br /> 
                        <strong>
                          Культнаступ як життєва необхідність.
                        </strong>
                        <br />
                        <br />
                        <div className="program__description--italic">
                          Сергій Жадан, письменник, поет, громадський діяч, військовослужбовець бригади «Хартія»
                          <br />
                          <br />
                          Олена Харлан, фехтувальниця, дворазова олімпійська чемпіонка, шестиразова чемпіонка світу і восьмиразова чемпіонка Європи
                          <br />
                          <br />
                          Ярина Чорногуз, поетка, військовослужбовиця, лауреатка Шевченківської премії 2024 року
                        </div>
                      </p>
                    </div>
                    <div className="program__block-item">
                      <h4 className="program__time">15.00 - 15.10 </h4>
                      <p className="program__description">
                        <strong>
                          Оприлюднення Маніфесту Культнаступу
                        </strong>
                      </p>
                    </div>
                    <div className="program__block-item">
                      <h4 className="program__time">15.10 - 16.10</h4>
                      <p className="program__description">
                        <strong>
                        Панель І. Розширення українського мовно-культурного простору як чинник національної безпеки і передумова української перемоги
                        </strong>
                        <br />
                        <br />
                        <div className="program__description--italic">
                          Микола Точицький, міністр культури та стратегічних комунікацій України (очікується підтвердження)
                          <br />
                          <br />
                          Олександра Матвійчук, голова Центру громадянських свобод (лауреат Нобелівської премії миру 2022 року)
                          <br />
                          <br />
                          Микита Потураєв, голова комітету з питань гуманітарної та інформаційної політики Верховної Ради України
                          <br />
                          <br />
                          Тарас Кремінь, Уповноважений із захисту державної мови
                          <br />
                          <br />
                          Володимир В’ятрович, народний депутат України
                          <br />
                          <br />
                          Мар’яна Савка, Видавництво Старого Лева 
                          <br />
                          <br />
                          Вступне слово і модерація - Данило Лубківський, дипломат, директор Київського безпекового форуму
                        </div>
                      </p>
                    </div>
                    <div className="program__block-item">
                      <h4 className="program__time">
                        16.10 - 16.30
                      </h4>
                      <p className="program__description">Перерва на каву</p>
                    </div>
                    <div className="program__block-item">
                      <h4 className="program__time">16.30 - 17.30</h4>
                      <p className="program__description">
                        <strong>
                          Панель ІІ. Від самозахисту до світової культурної експансії: як подолати російські впливи і донести український культурний продукт до споживачів у реальному й віртуальному просторі? 
                        </strong>
                        <br />
                        <br />
                        <div className="program__description--italic">
                          Михайло Федоров, віце-прем'єр-міністр - міністр цифрової трансформації України (очікується підтвердження)
                          <br />
                          <br />
                          Євгенія Кравчук, народна депутатка України, голова комітету культури, освіти, медіа і спорту Парламентської Асамблеї Ради Європи (2023 рік)
                          <br />
                          <br />
                          Владлен Мараєв, історик, провідний науковий співробітник НДЦ гуманітарних проблем ЗС України, автор каналу «Історія без міфів»
                          <br />
                          <br />
                          Олесь Санін, кінорежисер, актор, продюсер, віце-президент Національної академії мистецтв України
                          <br />
                          <br />
                          Віктор Круглов, генеральний директор видавництва «Ранок»
                          <br />
                          <br />
                          Роман Муха, голова Фонду розвитку української музики
                          <br />
                          <br />
                          Наталія Байдан, генеральний директор мережі кінотеатрів «Планета кіно»
                          <br />
                          <br />
                          Модерація - Сергій Стуканов, журналіст, теле- та радіоведучий, координатор руху «Простір свободи»

                        </div>
                      </p>
                    </div>
                    <div className="program__block-item">
                      <h4 className="program__time">17.30 - 18.20 </h4>
                      <p className="program__description">
                          <strong>
                            Панель ІІІ. Дієві інституції і послідовна політика як ключові елементи успіху.
                          </strong>
                        <br />
                        <br />
                        <div className="program__description program__description--italic">
                          Богдан Логвиненко, журналіст, видавець, громадський діяч, Ukraїner
                          <br />
                          <br />
                          Юлія Кириченко, Центр політико-правових реформ, співголова Ради Реанімаційного пакету реформ
                          <br />
                          <br />
                          Олександра Бетлій, Інститут економічних досліджень та політичних консультацій
                          <br />
                          <br />
                          Володимир Шейко, генеральний директор Українського інституту 
                          <br />
                          <br />
                          Олександра Коваль, директорка українського інституту книги 
                          <br />
                          <br />
                          Дмитро Гузій, юрист у галузі інтелектуальної власності та креативних індустрій
                          <br />
                          <br />
                          Модерація - Ірина Плехова, культурна менеджерка, громадська діячка
                        </div>
                      </p>
                    </div>
                    <div className="program__block-item">
                      <h4 className="program__time">18.20 - 18.30</h4>
                      <p className="program__description">Підбиття підсумків, закриття форуму</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="program__block-action">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSr6jYMKUc-Ji1zYhSbBdZp2zLEtwLlX9JxAigCNuEtaVZGQ/viewform" class="bttn bttn--primary">
                  <div className="bttn--icon"/>
                  ЗАРЕЄСТРУВАТИСЯ ДЛЯ УЧАСТІ В ФОРУМІ
                </a>
              </div>
            </div>
          </div>
        </section>

        <ManifestSection/>

        <section id="about">
          <div className="wrapper">
            <div class="container">
              <div class="background-layer"></div>
              <div class="content-layer content-layer--dark">
                <h2 className="about__title">Про Культнаступ</h2>
                <div className="about__subtitle">Ключові засади Культнаступу</div>
                <ul className="about__list">
                  <li className="about__item">Національна ідентичність є стрижнем, навколо якого будується державна єдність, безпека, економічний розвиток і зовнішній вплив країни. Нинішня війна є перш за все війною за ідентичність, а мова, культура, культурний продукт – не лише будівельним матеріалом нації, але і потужною зброєю.</li>
                  <li className="about__item">Брак розуміння важливості культури взагалі й культурних індустрій зокрема може мати катастрофічні наслідки. Уявлення, що «культура може почекати» в умовах війни за ідентичність є безглуздям, а протиставлення підтримки культури підтримці армії – шкідливим вкидом ворога,  який вкладає колосальні ресурси у власну культурно-інформаційну політику.</li>
                  <li className="about__item">Культурно-інформаційний простір є надважливим полем бою, а наступальна культурна політика - необхідною передумовою нашої перемоги.</li>
                  <li className="about__item">Наріжним каменем цієї політики мають стати прозорі і сталі правила, які стимулюватимуть створення і поширення українського культурного продукту, забезпечень безповоротне звільнення нашого культурно-інформаційного простору від російського впливу, допоможуть просуванню українських інтересів у світі.</li>
                  <li className="about__item">Ми об’єднуємо зусилля для створення міцних правових, політичних, економічних, культурних підвалин необхідних змін. Для кожного політика, посадовця, відповідального громадянина важливість наступальної культурної політики має стати аксіомою. Для успіху такої політики Україна має всі можливості, важливо лише це усвідомити і перейти до рішучих та послідовних дій.</li>
                </ul>
              
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrapper wrapper--for-footer">
          <div className="footer__content">
          <div className="footer__logo" onClick={scrollToTop} style={{ cursor: "pointer" }} />
            <div className="footer__social">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="https://www.facebook.com/profile.php?id=61566660901073&mibextid=ZbWKwL" className="footer__link">
                    <div className="footer__item--img footer__item--img-fb"/>
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    <div className="footer__item--img footer__item--img-inst"/>
                  </a>
                </li>
                <li className="footer__item">
                  <a href="https://www.youtube.com/@Kultnastup" className="footer__link">
                    <div className="footer__item--img footer__item--img-youtube"/>
                  </a>
                </li>
              </ul>
            </div>  
          </div>  
          <div className="footer__email">
            <a href='mailto:kultnastup@gmail.com'className="footer__email--link">
              kultnastup@gmail.com
            </a>
          </div>
        </div>

      </footer>
    
    </div>
  );
}

export default App;
