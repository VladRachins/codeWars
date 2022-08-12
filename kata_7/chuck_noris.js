/* Chuck Norris loves push ups. That's just a fact. It has been said that when Chuck Norris does a push up, he isn't pushing himself up, he's pushing the world down!

Today, Chuck got home from work 10 minutes earlier than his wife. Naturally he decided to bang out some push ups. By the time she arrives home he can have smashed out at least 1000 and barely broken a sweat. He counts them in binary, because he thinks coding is cool, and because he is a massive Badass.

When his wife arrives home, she starts talking to Chuck, spoiling his count! Your job is to write a function to isolate Chuck's count, and then work out how many push ups he has done! Return your answer as a number.

Careful Chuck doesn't lose count! Even if he does, always return the highest number he counted to! If Chuck's wife has left a list of jobs for him he won't be able to do any push ups... if there is no sign of a count, simply return "CHUCK SMASH!!"

In the event someone dares to provide Chuck with something other than a string, return 'FAIL!!'

in [C++] when numbers not exists in input string then return -1 all time.

Your code should still pass in the case that the binary is mixed up with other characters - maybe Chuck has a cough... e.g.: "1ee1gf00t10h1011tr00" -> "110010101100" -> 3244.

Feel the burn!! */

function chuckPushUps(str) {
  if (["", 1].includes(str) || Array.isArray(str)) return "FAIL!!";
  if (str.includes(" ")) {
    str
      .split(" ")
      .filter((num) => num.includes(1) || num.includes(0))
      .map((num) => Number.parseInt(num, 2))
      .sort((a, b) => a - b)
      .pop();
  } else {
    const num = str
      .split("")
      .filter((num) => num.includes(1) || num.includes(0))
      .reduce((calc, next) => (calc += next));
    return Number.parseInt(num, 2);
  }
}
console.log(
  chuckPushUps(
    "sLJhvIjsXstWqaxN89jg8vexWL7rkP15Y5ZFHDt1000F1HxCnOYN8FhvNezLIAbktkmcUOr111118xEAZZUAEInL5SiG4QI0108ccahywQ5MTuLVoNUM75SDwlCskBlUnvosTqSLwJOKKtHmbAdwh0QbRVuG1xcsA7VyVJhp9"
  )
);
