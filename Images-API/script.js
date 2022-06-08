const btn = document.querySelector('button');
const image = document.querySelector('img');
const url = 'https://aws.random.cat/meow';
async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    image.src = data.file;
  } catch (err) {
    console.log(err);
  }
}
btn.addEventListener('click', () => {
  fetchHandler();
});
