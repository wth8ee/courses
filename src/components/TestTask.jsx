export function TestTask({ test, reset }) {
  if (!test) {
    return;
  }

  return (
    <div
      id="test"
      className="w-full flex flex-col gap-10 outline outline-[1px] outline-ct3 p-2 rounded-lg"
    >
      {test?.map((el, i) => (
        <div key={i} className="flex flex-col gap-5 w-full items-start">
          <p className="hl">{el.question}</p>
          <div className="flex flex-col gap-2">
            {el?.options?.map((option, i) => (
              <div key={i} className="flex gap-2">
                <input
                  onChange={reset}
                  type="radio"
                  id={option}
                  name={el.question}
                ></input>
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
