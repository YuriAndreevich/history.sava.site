import s from './b.module.css';

function b3() {
  return (
    <div className={s.theme__style}>
      <p className={s.bilet__number}>Билет 3</p>
      <details className={s.theme__details}>
        <summary>
          <p className={s.bilet__numbervopros}>1.	Полоцкое княжество как первая историческая форма государственности на территории Беларуси в X—XI вв.</p>
        </summary>
        текст
      </details>
      <details className={s.theme__details}>
        <summary> <p className={s.bilet__numbervopros}>2.	Беларусь в условиях польско-советской войны 1919—1921 гг. Последствия Рижского мира для Беларуси.</p></summary>
        текст
      </details>
      <details className={s.theme__details}>
        <summary>
          <p className={s.bilet__numbervopros}>3. Соотнесение событий истории Беларуси и всемирной истории.</p>
        </summary>
        <p>Отмена крепостного права на российских и белорусских землях с выделением общего и особенностей.</p>
        <p>Особенности проведения аграрной реформы.</p>

        <p>Проведение аграрной реформы началось с белорусско-литовских губерний.</p>
        <p>Согласно Манифесту Александра II 1861 г. помещичьи крестьяне освобождались от крепостной зависимости и приобретали личную свободу и ряд гражданских прав: от своего имени заключать разные гражданские и имущественные соглашения, открывать торговые и промышленные предприятия, переходить в другие сословия.</p>
        <p>Помещики сохраняли право собственности на землю в своих имениях. Крестьяне могли получить землю в собственность только за выкуп. Сумма выкупного платежа определялась в размере, чтобы помещик имел возможность, положив ее в банк под проценты, получать ежегодную прибыль, равную прежнему оброку.</p>
        <p>Земельные отношения между помещиками и крестьянами регулировались государством. При заключении между крестьянином и помещиком выкупной операции государство закладывало (вносило) 4/5 выкупной суммы, которую крестьянин был обязан вернуть государству на протяжении 49 лет с процентами.</p>
        <p>До заключения выкупного соглашения крестьянин за пользование земельным наделом был обязан выполнять в пользу помещика повинности — барщину или оброк в установленных государством размерах. Такие крестьяне считались временнообязанными. Поземельные отношения временнообязанных крестьян с помещиками оформлялись уставными грамотами. Их составлением занимались мировые посредники.</p>
        <p>Государственные крестьяне согласно отдельному закону от 1867 г. переводились в разряд земельных владельцев.</p>

        <p style={{ textAlign: 'center' }}>Изменения в «Положениях» 19 февраля 1861 г., связанные с восстанием 1863—1864 гг. (для белорусских губерний)</p>
        <p>1. Ликвидировано «временнообязанное» положение крестьян и введен обязательный выкуп крестьянских наделов.</p>
        <p>2. Уменьшены на 20 % выкупные платежи.</p>
        <p>3. Возвращалась земля, отобранная с 1857 г. (отрезки).</p>
        <p>4. Безземельные крестьянские семьи наделялись тремя десятинами земли.</p>
        <p>5. Крестьянам передавалась земля участников восстания.</p>

        <p style={{ textAlign: 'center' }}>Итоги и значение реформы 1861 г.</p>
        <p>1. Отмена крепостного права — своеобразный рубеж между феодализмом и капитализмом.</p>
        <p>2. Провозглашение личной свободы крепостных крестьян, их независимость от помещика. Крестьяне получили гражданские права: свободного вступления в брак, заключения договоров и сделок, выбора рода занятий, поступления в учебные заведения.</p>
        <p>3. Для развития капиталистического производства сложился рынок наемной рабочей силы.</p>
        <p>4. Крестьянская реформа была половинчатой. Она оставила многочисленные крепостные пережитки: сохранение крупного помещичьего землевладения, временнобязанное положение крестьян, крупные выкупные платежи, чересполосицу, сервитутное право.</p>
      </details>
    </div>
  );
}

export default b3;
