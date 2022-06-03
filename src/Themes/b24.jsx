import s from './b.module.css';

function b24() {
  return (
    <div className={s.theme__style}>
      <p className={s.bilet__number}>Билет 24</p>
      <details className={s.theme__details}>
        <summary>
          <p className={s.bilet__numbervopros}>1.	Культура Беларуси во второй половине XIX — начале XX в. Условия формирования белорусской нации и особенности её становления.</p>
        </summary>
        текст
      </details>
      <details className={s.theme__details}>
        <summary> <p className={s.bilet__numbervopros}>2.	Олимпийские достижения спортсменов Республики Беларусь.</p></summary>
        текст
      </details>
      <details className={s.theme__details}>
        <summary>
          <p className={s.bilet__numbervopros}>3.	Объяснение причинно-следственных связей между историческими фактами.</p>
        </summary>
        <p>Раскрытие  причинно-следственные связи между распадом  СССР и развитием интеграции между Беларусью и странами СНГ.</p>
        <p>Раскрытие причинно-следственной связи между прекращением су­ществования СССР и началом интеграционного процесса между Респу­бликой Беларусь и странами Содружества Независимых Государств с распадом бывшего СССР произошел разрыв единого эконо­мического пространства, разрушились хозяйственные связи между бывшими советскими республиками, которые существовали в рам­ках единого народно-хозяйственного комплекса. В процессе поиска путей преодоления кризисных явлений и восстановления бывших экономических связей в новом рыночном пространстве Республика Беларусь особое внимание уделяет восстановлению на равноправной и взаимовыгодной основе связей с государствами СНГ, ранее входив­шими в состав СССР, прежде всего с Россией.</p>
      </details>
    </div>
  );
}

export default b24;
