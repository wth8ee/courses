export function TestTask({ test, reset }) {
  if (!test) {
    return;
  }

  return (
    <div
      id="test"
      className="w-full p-4 flex flex-col gap-10 outline overflow-y-auto outline-[1px] outline-ct3 rounded-lg"
    >
      {test?.map((el, i) => (
        <div key={i} className="flex flex-col gap-8 w-full items-start">
          <p className="hl">{el.question}</p>
          <div className="flex flex-col gap-4">
            {el?.options?.map((option, i) => (
              <div key={i} className="flex gap-2">
                <input
                  className="radio"
                  onChange={reset}
                  type="radio"
                  id={option}
                  name={el.question}
                ></input>
                <label className="radio" htmlFor={option}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
