export function askQuestionSet() {
  const name = prompt("What is your name ?");
  const age = prompt("How old are you");
  const obj = { test: "test" };
  alert(`
        Your data is now processed:
         - Name: ${name}
         - Age: ${age}
         - Object: ${JSON.stringify({ ...obj })}
    `);
}
