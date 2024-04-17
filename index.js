const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('my-input');
  console.log(`Hello ${nameToGreet}!`);

  console.log('environment:');
  console.log(JSON.stringify(process.env, null, 4));
} catch (error) {
  core.setFailed(error.message);
}