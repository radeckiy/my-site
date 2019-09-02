import React, {Fragment} from 'react';
import {ResumeContainer} from "../../components";
import './welcomePage.css';
import AutomatedTestsZip from '../../res/AutomatedTest-master.zip';

export default function WelcomePage() {
    return (
        <Fragment>
            <div className="bg-img-container text-light text-center d-flex flex-column justify-content-center"
                 id="welcome">
                <h1>Привет!</h1>
                <hr className="my-1 mb-3 custom-hr"/>
                <h3 className="mb-1">Меня зовут Радецкий Андрей</h3>
                <h3>и это мой сайт-визитка.</h3>
                <div className=" mt-5">
                    <h5 className="m-0">Свайпай вниз</h5>
                    <i className="fas fa-caret-down m-0 down-arrow"/>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col pl-4 pr-4">
                        <div className="mt-3 mb-3" id="about-me">
                            <h3 className="mb-3">Обо мне</h3>
                            <p className="text-justify">Я проживаю в городе Екатеринбург и являюсь студентом УрГЭУ. Учусь на 4 курсе очной формы обучения, по направлению "Математическое обеспечение и администрированние информационных систем" (математик-программист). Обладаю целеустремленностью, усидчивостью, желанием развиваться и познавать новое. Мои приоритеты — опыт и знания. Также могу назвать себя доброжелательным, дружелюбным, понимающим и добросовестным человеком.</p>
                            <h5>Мои знания</h5>
                            <p className="text-justify">Я владею языком программирования Java. Имею знания как по SE версии Java, так и по EE версии. Мною была прочтена книга Герберта Шилдта "Полное руководство по Java SE 8", а также курс по Java EE (сервлеты, JSP, работа с базами данных) в интернете. Умею работать со сборщиками, такими как Maven, Gradle. Имеется опыт соло разработки back-end'а с использованием стека Java (Spring REST, Spring Data) + MongoDB. Имею знания (и небольшой опыт) по разаботке front-end'а на React + JS, следовательно имеется представление о работе web приложений. Умею работать со сторонними API и читать документацию (в том числе и на английском языке). Активно пользуюсь и владею такой vcs, как Git. В дополнение: могу и умею проверять написанный код посредством unit тестов, для выявления ошибок в работе кода.</p>
                            <h5>Моё портфолио</h5>
                            <ul className="mb-2">
                                <p className="font-italic">Описание проектов можно найти в файлах README.md</p>
                                <li><p className="text-justify">Back-end с использованием стека Java, Maven, Spring REST, Spring Data, MongoDB - <a className="text-danger" href="https://github.com/Radeckiy/simpleBackEnd">ссылка на github</a>.</p></li>
                                <li><p className="text-justify">Front-end на JS, React (этот сайт) - <a className="text-danger" href="https://github.com/Radeckiy/my-site">ссылка на github</a>.</p></li>
                                <li><p className="text-justify">Самописный фреймворк для автоматического UI тестирования на Java, Maven, Selenium, Junit4, Allure - <a className="text-danger"  href={ AutomatedTestsZip }>zip архив</a>.</p></li>
                                <li><p className="text-justify">Задачки с сайта Codewars - <a className="text-danger"  href="https://www.codewars.com/users/Radeckiy">ссылка на профиль</a>.</p></li>
                            </ul>
                            <ResumeContainer/>
                        </div>

                        <div id="contacts">
                            <h3 className="mb-3">Мои контакты</h3>
                            <p className="text-justify">Github - <a className="text-danger" href="https://github.com/Radeckiy">ссылка на профиль</a>.</p>
                            <p className="text-justify">VK - <a className="text-danger" href="https://vk.com/radeckiy_andrey">ссылка на профиль</a>.</p>
                            <p className="text-left">Email - radeckiy98@mail.ru (<a className="text-danger" href="mailto:radeckiy@mail.ru">Написать</a>).</p>
                            <p className="text-left">Телефон - +79501912417 (<a className="text-danger"  href="tel:+79501912417">Дзынь</a>). +79024492531 (<a className="text-danger"  href="tel:+79024492531">Дзынь</a>).</p>
                            <p className="text-justify">Codewars - <a className="text-danger" href="https://www.codewars.com/users/Radeckiy">ссылка на профиль</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}