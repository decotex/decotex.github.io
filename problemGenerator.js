
String.prototype.interpolate = function (params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
};

const randValue = values =>
  values[Math.floor(Math.random() * values.length)];

const makeProblem = data => {
  const keys = Object.keys(data);
  const randValues = {};
  for (const key of keys) {
    randValues[key] = randValue(data[key]);
  }
  return randValues.phrase.interpolate(randValues);
};

function twitterLink(problem) {
  var problemForUrl = `${problem} https://decotex.github.io`;
  return encodeURI(`https://twitter.com/intent/tweet?text=${problemForUrl} `) + '%23millennialproblemgenerator';
}

function updateProblem(data) {
    var problem = makeProblem(data);
    var el = document.getElementById('problem');
    el.innerText = problem;

    var tweetLink = document.getElementById('twitter-share-button');
    tweetLink.setAttribute('href', twitterLink(problem));
}
