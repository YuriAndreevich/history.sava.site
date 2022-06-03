import s from './b.module.css';

function b5() {
  return (
    <div className={s.theme__style}>
      <p className={s.bilet__number}>Билет 5</p>
      <details className={s.theme__details}>
        <summary>
          <p className={s.bilet__numbervopros}>1.	Принятие христианства и развитие культуры на белорусских землях в IX — середине XIII в.</p>
        </summary>
        текст
      </details>
      <details className={s.theme__details}>
        <summary> <p className={s.bilet__numbervopros}>2.	Политика индустриализации и коллективизации сельского хозяйства в БССР во второй половине 1920-х — 1930-е гг.</p></summary>
        текст
      </details>
      <details className={s.theme__details}>
        <summary>
          <p className={s.bilet__numbervopros}>3.	Сравнительная характеристика событий истории Беларуси по предложенным признакам.</p>
        </summary>
        <p>Сравнение политики белорусизации и полонизации по предложенным признакам.</p>
        <p>Сравнение белорусизации и полонизации проводится по признакам, учитывающим период их осуществления, проведенные мероприятия и их влияние на состояние белорусского этноса.</p>
        <p>Если в БССР коммунистической партией проводилась политика белорусизации, направленная на поддержку развития национального языка и культуры, что помогало белорусам осознать себя нацией, то в Западной Беларуси белорусам приходилось бороться за право обучать детей на белорусском языке.</p>
        <p>Таким образом, процессы белорусизации и полонизации являются противоположными по своей сущности. Белорусизация имела положительный характер, так как способствовала росту национального самосознания и идентификации белорусов. Полонизация, наоборот, была направлена на ассимиляцию белорусов, т. е. их слияние с поляками и потерю своих языка и культуры.</p>

      </details>
    </div>
  );
}

export default b5;
