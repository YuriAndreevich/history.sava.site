import s from './b.module.css';
import logo from '../img/v3/b4.png'

function b4() {
  return (
    <div className={s.theme__style}>
      <p className={s.bilet__number}>Билет 4</p>
      <details className={s.theme__details}>
        <summary>
          <p className={s.bilet__numbervopros}>1.	Хозяйственная жизнь и возникновение городов на территории Беларуси в IX — середине XIII в.</p>
        </summary>
        текст
      </details>
      <details className={s.theme__details}>
        <summary> <p className={s.bilet__numbervopros}>2.	БССР в годы новой экономической политики. Участие в образовании СССР. Укрупнение территории.</p></summary>
        текст
      </details>
      <details className={s.theme__details}>
        <summary>
          <p className={s.bilet__numbervopros}>3.	Характеристика социально-экономического (внешнеполитического) положения Беларуси с опорой на историческую карту.</p>
        </summary>
        <p>Характеристика социально-экономического положения Беларуси, сложившегося в результате аварии на Чернобыльской АЭС, с опорой на карту «Последствия аварии на Чернобыльской АЭС».</p>
        <p>Карта иллюстрирует территорию Беларуси, оказавшуюся зараженной и результате аварии на Чернобыльской АЭС 26 апреля 1986 г. На карте  показываются территории, требующие дополнительных мер по безопасному ведению сельскохозяйственного производства в связи с аварией на ЧАЭС. Исторические условия социально-экономического положения Беларуси были значительно осложнены последствиями аварии на Чернобыльской АЭС.</p>
        <img src={logo} alt='Радиационная ситуация на территории Беларуси (по состоянию на май 1986 г.)' />
        <p>Радиационная ситуация на территории Беларуси (по состоянию на май 1986 г.)</p>
        <p>В результате аварии 23 % территории Беларуси было загрязнено радиоактивными изотопами (показывается на карте), из-за чего пострадало 2,3 млн человек, т. е. каждый пятый житель Беларуси. С загрязненных территорий на новое место жительства было отселено более 135 тыс. человек. Из хозяйственного оборота было выведено 20 % земель. В белорусском секторе 30-километровой зоны отселения вокруг станции был создан Полесский радиационно-экологический заповедник (показывается на карте).</p>
        <p>Чернобыльская катастрофа стала самой масштабной техногенной катастрофой XX в., последствия которой очень тяжелы для Беларуси. Отселение, лечение и оздоровление людей, создание необходимых условий для труда и жизни на пострадавших территориях остаются одной из важнейших проблем социально-экономического развития Республики Беларусь. Тысячи участников преодоления последствий аварии получили народное название «ликвидаторы».</p>

      </details>
    </div>
  );
}

export default b4;
