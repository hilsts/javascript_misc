export async function fetchAsync (url) {
    let response = await fetch(url);
    let data = response.json();
    return data;
  }

export function getDice () {
    const dice_url = 'http://127.0.0.1:8000/dice';
    dice_result = fetchAsync(dice_url);
    return dice_result
}