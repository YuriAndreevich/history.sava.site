import React, { useState } from 'react'
import './Quiz.scss'
import q1 from '../../img/q/q1.jpg'

function Quiz() {

    const questions = [
        {
            questionText: 'В каком году родился В. И. Ленин?',
            answerOptions: [
                { answerText: '1870', isCorrect: true },
                { answerText: '1875', isCorrect: false },
                { answerText: '1881', isCorrect: false },
                { answerText: '1886', isCorrect: false },
            ]
        },
        {
            questionText: 'Какова настоящая фамилия Ленина?',
            answerOptions: [
                { answerText: 'Ленинский', isCorrect: false },
                { answerText: 'Улинович', isCorrect: false },
                { answerText: 'Ульянов', isCorrect: true },
                { answerText: 'Улинский', isCorrect: false },
            ]
        },
        {
            questionText: 'Какой союз основал Ленин после возвращения из Европы?',
            answerOptions: [
                { answerText: 'Российский коммунистический союз молодежи', isCorrect: false },
                { answerText: '«Русское собрание»', isCorrect: false },
                { answerText: '«Союз борьбы за освобождение рабочего класса»', isCorrect: true },
                { answerText: '«Союз русского народа»', isCorrect: false },
            ]
        },
        {
            questionText: 'Какое наказание понес Ленин за создание «Союза» и активную пропаганду среди рабочих?',
            answerOptions: [
                { answerText: 'Пожизненное заключение', isCorrect: false },
                { answerText: 'Пубичное наказание плетьми', isCorrect: false },
                { answerText: 'Ссылку', isCorrect: true },
                { answerText: 'Крупный штраф', isCorrect: false },
            ]
        },
        {
            questionText: 'Как звали супругу Ленина, которая стала его идейным товарищем?',
            answerOptions: [
                { answerText: 'Нина', isCorrect: false },
                { answerText: 'Надежда', isCorrect: true },
                { answerText: 'Татьяна', isCorrect: false },
                { answerText: 'Светлана', isCorrect: false },
            ]
        },
        {
            questionText: 'Как называлась газета, которую Ленина выпускал с 1900 года?',
            answerOptions: [
                { answerText: '«Правда»', isCorrect: false },
                { answerText: '«Борьба»', isCorrect: false },
                { answerText: '«Знамя»', isCorrect: false },
                { answerText: '«Искра»', isCorrect: true },
            ]
        },
        {
            questionText: 'Где находился Ленин во время революции 1905 года?',
            answerOptions: [
                { answerText: 'Англия', isCorrect: false },
                { answerText: 'Финляндия', isCorrect: false },
                { answerText: 'Швейцария', isCorrect: true },
                { answerText: 'Польша', isCorrect: false },
            ]
        },
        {
            questionText: 'Кто был верным соратником Ленина?',
            answerOptions: [
                { answerText: 'Зиновьев', isCorrect: false },
                { answerText: 'Каменев', isCorrect: false },
                { answerText: 'Сталин', isCorrect: false },
                { answerText: 'Все ответы верны', isCorrect: true },
            ]
        },
        {
            questionText: 'Как называлось новое государство, образованное усилиями Ленина?',
            answerOptions: [
                { answerText: 'Монголия', isCorrect: false },
                { answerText: 'Бурятия', isCorrect: false },
                { answerText: 'Абхазия', isCorrect: false },
                { answerText: 'СССР', isCorrect: true },
            ]
        },
        {
            questionText: 'В каком году скончался Ленин?',
            answerOptions: [
                { answerText: '1920', isCorrect: false },
                { answerText: '1922', isCorrect: false },
                { answerText: '1924', isCorrect: true },
                { answerText: '1927', isCorrect: false },
            ]
        }
    ]
    const [visablePopup, setVisablePopup] = useState(false);
    const [visableTest, setVisableTest] = useState(false);



    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    const refresh = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
    }

    return (
        <div  className='wrapper' style={{ marginTop: '60px' }}>
            <p> Историческое личности</p>
            <hr />
            <div className='quiz'>

                <div className="card">
                    <img src={q1} alt='' />
                    <p>
                        Владимир Ильич Ленин
                    </p>
                    <p className='btn' onClick={() => setVisablePopup(true)}>Справка</p>
                    <p className='btn' onClick={() => setVisableTest(true)}>Тест</p>
                </div>
                {visablePopup &&
                    <div className="spravka" onClick={() => setVisablePopup(false)}>
                        <div className='spravka__content' onClick={e => e.stopPropagation()}>
                            <p>Владимир Ленин (настоящая фамилия Ульянов) родился в 1870 г. в Симбирске в семье инспектора народных училищ. В 1879-1887 гг. Владимир учился в гимназии и окончил ее с золотой медалью. Александр Ульянов, старший сын в семье, был активным революционером-народовольцем и образцом для подражания младшему брату. В 1887 г. Александр был казнен за подготовку покушения на жизнь императора Александра III. В этом же году В.И. Ульянов поступил на юридический факультет Казанского университета, но вскоре был отчислен без права восстановления за участие в деятельности нелегального кружка Богораза.</p>
                            <p>В 1891 г. В. Ульянов экстерном окончил юридический факультет Санкт-Петербургского университета. В это же время он работает над своей первой книгой &laquo;Что такое &laquo;друзья народа&raquo; и как они воюют против социал-демократов?&raquo;. В 1895 г. Ульянов-Ленин принимает активное участие в создании Петербургского &laquo;Союза борьбы за освобождение рабочего класса&raquo;. За эту деятельность В.И. Ленин был сослан на три года в село Шушенское Енисейской губернии. В 1900 г. он вынужден был уехать в Западную Европу, где издавал первую общерусскую нелегальную марксистскую газету &laquo;Искра&raquo;.</p>
                            <p>В 1903 г. на II съезде российских социал-демократов в результате раскола на меньшевиков и большевиков В.И. Ленин возглавил &laquo;большинство&raquo;, создав затем большевистскую партию.</p>
                            <p>Во время первой русской революции 1905-1907 гг. он нелегально жил в Петербурге, координируя действия левых сил. В 1907 г. Ленину повторно пришлось выехать из России на этот раз на 10 лет. В годы Первой мировой войны он выдвинул идею поражения национального правительства, которое при реализации в масштабах всей Европы непременно должно было привести к победе социалистической революции и рабочего класса.</p>
                            <p>С апреля 1917 г. в Петрограде В.И. Ленин становится одним из главных организаторов и руководителей Октябрьского вооруженного восстания и установления власти Советов. По его личному распоряжению 31 октября и 2 ноября 1917 г. в Москву из Петрограда были направлены отряды моряков, солдат и красногвардейцев, которые обеспечили переход власти к Советам в Москве. 25 октября 1917 г. правительство было свергнуто и власть в центральных районах страны перешла в руки большевиков. Вплоть до 1922 г. Ленин являлся руководителем большевистских сил в Гражданской войне.</p>
                            <p>Придя к власти, большевики во главе с В.И. Лениным создали новый тип государства, целью которого было стимулировать скорейшее свершение мировой социалистической революции. В отличие от европейского крыла социал-демократии большевики отличались радикализмом и отвергли возможность реформирования капитализма.</p>
                            <p>Ленин обладал широким кругозором и колоссальным багажом знаний во многих областях знаний, в том числе, и в экономике. Он разработал и попытался реализовать политику военного коммунизма, а после осознания ее несостоятельности предложил новую экономическую политику, которая благоприятно сказалась на развитии страны Советов.</p>
                            <p>В 1922 г. после покушения Фанни Каплан и ранения, Ленин тяжело болел и отошел от активной политической деятельности. С мая 1923 г. из-за резкого ухудшения состояния здоровья он проживал на государственной даче Горки (ныне Музей-заповедник). Последний раз Владимир Ильич был в Москве 18-19 октября 1923 г. Умер он в 1924 г. в Горках, под Москвой.</p></div>
                    </div>}</div>
            {visableTest &&
                <div className="test" onClick={() => setVisableTest(false)}>
                    <div onClick={e => e.stopPropagation()}>            {
                        showScore
                            ?
                            <div className='test__content'> Правильных ответов {score}из {questions.length}
                                <button onClick={refresh}>Попробовать еще раз</button></div>
                            :
                            <div className='test__content'><p>{questions[currentQuestion].questionText}</p>
                                <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
                                <div  className='btn-test'>{questions[currentQuestion].answerOptions.map(item =>
                                    (<button onClick={() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>)
                                )}</div></div>
                    }
                    </div></div>}
            <p> Историческое памятники</p>
            <hr />
            <div className='quiz'>

                <div className="card"></div>
            </div>
        </div>
    )
}

export default Quiz;