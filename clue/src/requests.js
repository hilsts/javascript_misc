async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }

function get_dice () {
    const dice_url = 'http://localhost:8080/dice/';
    dice_result = fetchAsync(dice_url);
    console.log(dice_url);
}

export { get_dice };