import s from './b.module.css';

function b7() {
  return (
    <div className={s.theme__style}>
      <p className={s.bilet__number}>Билет 7</p>
      <details className={s.theme__details}>
        <summary>
          <h4>1.	Укрепление великокняжеской власти в Великом Княжестве Литовском в конце XIII — XIV в.</h4>
        </summary>
        текст
      </details>
      <details className={s.theme__details}>
        <summary> <h4>2.	Положение Западной Беларуси в составе Польши (1921— 1939 гг.). Политика польских властей в отношении белорусского населения. </h4></summary>
        текст
      </details>
      <details className={s.theme__details}>
        <summary>
          <h4>3.	Раскрытие содержания исторических терминов.</h4>
        </summary>
        <p>Раскрытие содержания исторических термина «разбор» шляхты.</p>
        <p>В конце XVIII в. после присоединения белорусских земель к Рос­сийской империи царским правительством начала проводиться поли­тика в отношении недовольной разделами Речи Посполитой шляхты, которая получила название «разбор» шляхты. Согласно этой поли­тике те представители мелкой шляхты, которые не предоставили документы, что подтверждали бы их дворянское звание, исключались из дворянского сословия и переводились в сословие государственных крестьян или мещан. Такие меры были приняты также и в отношении к шляхте, которая участвовала в восстании 1830—1831 гг.</p>
      </details>
    </div>
  );
}

export default b7;
