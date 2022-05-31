import s from './b.module.css';

function b1() {
  return (
    <div className={s.theme__style}>
      <h1>Билет 1</h1>
      <details>
        <summary>
          <h4>1</h4>
        </summary>
        текст
      </details>
      <details>
        <summary> <h4>2</h4></summary>
        текст
      </details>
      <details>
        <summary>
          <h4>3</h4>
        </summary>
        текст
      </details>
    </div>
  );
}

export default b1;
