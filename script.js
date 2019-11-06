const row1Key = [
  ['Backquote', 'ё', 'Ё', '`', '~'],
  ['Digit1', '1', '!', '1', '!'],
  ['Digit2', '2', '"', '2', '@'],
  ['Digit3', '3', '№', '3', '#'],
  ['Digit4', '4', ';', '4', '$'],
  ['Digit5', '5', '%', '5', '%'],
  ['Digit6', '6', ':', '6', '^'],
  ['Digit7', '7', '?', '7', '&'],
  ['Digit8', '8', '*', '8', '*'],
  ['Digit9', '9', '(', '9', '('],
  ['Digit0', '0', ')', '0', ')'],
  ['Minus', '-', '-', '-', '-'],
  ['Equal', '=', '+', '=', '+'],
  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
];
const row2Key = [
  ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
  ['KeyQ', 'й', 'Й', 'q', 'Q'],
  ['KeyW', 'ц', 'Ц', 'w', 'W'],
  ['KeyE', 'у', 'У', 'e', 'E'],
  ['KeyR', 'к', 'К', 'r', 'R'],
  ['KeyT', 'е', 'Е', 't', 'T'],
  ['KeyY', 'н', 'Н', 'y', 'Y'],
  ['KeyU', 'г', 'Г', 'u', 'U'],
  ['KeyI', 'ш', 'Ш', 'i', 'I'],
  ['KeyO', 'щ', 'Щ', 'o', 'O'],
  ['KeyP', 'з', 'З', 'p', 'P'],
  ['BracketLeft', 'х', 'Х', '[', '{'],
  ['BracketRight', 'ъ', 'Ъ', ']', '}'],
  ['Backslash', '\u002F', '/', '\u002F', '|'],
  ['Delete', 'Del', 'Del', 'Del', 'Del'],
];
const row3Key = [
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
  ['KeyA', 'ф', 'Ф', 'a', 'A'],
  ['KeyS', 'ы', 'Ы', 's', 'S'],
  ['KeyD', 'в', 'В', 'd', 'D'],
  ['KeyF', 'а', 'А', 'f', 'F'],
  ['KeyG', 'п', 'П', 'g', 'G'],
  ['KeyH', 'р', 'Р', 'h', 'H'],
  ['KeyJ', 'о', 'О', 'j', 'J'],
  ['KeyK', 'л', 'Л', 'k', 'K'],
  ['KeyL', 'д', 'Д', 'l', 'L'],
  ['Semicolon', 'ж', 'Ж', ';', ':'],
  ['Quote', 'х', 'Х', "'", '"'],
  ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
];
const row4Key = [
  ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['KeyZ', 'я', 'Я', 'z', 'Z'],
  ['KeyX', 'ч', 'Ч', 'x', 'X'],
  ['KeyC', 'с', 'С', 'c', 'C'],
  ['KeyV', 'м', 'М', 'v', 'V'],
  ['KeyB', 'и', 'И', 'b', 'B'],
  ['KeyN', 'т', 'Т', 'n', 'N'],
  ['KeyM', 'ь', 'Ь', 'm', 'M'],
  ['Comma', 'б', 'Б', ',', '<'],
  ['Period', 'ю', 'Ю', '.', '>'],
  ['Slash', '.', ',', '/', '?'],
  ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
];
const row5Key = [
  ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
  ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['Space', ' ', ' ', ' ', ' '],
  ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['MetaRight', 'Win', 'Win', 'Win', 'Win'],
  ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
];
const arrKeyValue = [row1Key, row2Key, row3Key, row4Key, row5Key];
const keyboardFragment = document.createDocumentFragment();
const textarea = document.createElement('textarea');
textarea.id = 'textarea';
const keyboard = document.createElement('div');
let row1;
let row2;
let row3;
let row4;
let row5;
let arrKeyElements = [];
let lang = localStorage.lang || 'en';
let stateCaps = false;

function drawRow(arrKey, parent) {
  const row = document.createElement('div');
  let newKey;
  row.className = 'keyboard__row';
  arrKey.forEach(() => {
    newKey = document.createElement('div');
    newKey.className = 'keyboard__key';
    row.appendChild(newKey);
  });
  parent.appendChild(row);
  return row;
}

function drawKeyboard() {
  textarea.className = 'textarea';
  keyboardFragment.appendChild(textarea);
  keyboard.className = 'keyboard';
  keyboardFragment.appendChild(keyboard);

  row1 = drawRow(row1Key, keyboard);
  row2 = drawRow(row2Key, keyboard);
  row3 = drawRow(row3Key, keyboard);
  row4 = drawRow(row4Key, keyboard);
  row5 = drawRow(row5Key, keyboard);
  const childrensRow5 = row5.children;

  row1.querySelector('div:last-child').classList.add('keyboard__backspace', 'keyboard__key-functional');
  row2.querySelector('div:first-child').classList.add('keyboard__tab', 'keyboard__key-functional');
  row2.querySelector('div:last-child').classList.add('keyboard__del', 'keyboard__key-functional');
  row3.querySelector('div:first-child').classList.add('keyboard__caps', 'keyboard__key-functional');
  console.log(`ffff ${stateCaps}`);
  if (stateCaps === true) row3.querySelector('div:first-child').classList.add('active-key');
  row3.querySelector('div:last-child').classList.add('keyboard__enter', 'keyboard__key-functional');
  row4.querySelector('div:first-child').classList.add('keyboard__shift-left', 'keyboard__key-functional');
  row4.querySelector('div:last-child').classList.add('keyboard__shift-right', 'keyboard__key-functional');
  Array.prototype.forEach.call(childrensRow5, elem => elem.classList.add('keyboard__ctrl-win-alt', 'keyboard__key-functional'));
  row5.querySelector('div:nth-child(4)').classList.add('keyboard__space');
  row5.querySelector('div:nth-child(4)').classList.remove('keyboard__key-functional');

  document.body.appendChild(keyboardFragment);
}

function fillKey(param) {
  let indexLang;
  if (param === 'en') indexLang = 3;
  else indexLang = 1;

  if (stateCaps) indexLang += 1;

  arrKeyElements.forEach((row, rowIndex) => {
    Array.prototype.forEach.call(row.children, (key, keyIndex) => {
      const tempKey = key;
      tempKey.id = arrKeyValue[rowIndex][keyIndex][0];
      tempKey.innerHTML = arrKeyValue[rowIndex][keyIndex][indexLang];
    });
  });
}

function updateStyleActiveKey(event) {
  event.preventDefault();
  const classListKey = document.getElementById(event.code).classList;
  classListKey.remove('key-animate');
  if (!classListKey.contains('active-key')) classListKey.add('active-key');
}
function updateStyleInactiveKey(event) {
  if (event.code === 'CapsLock' && stateCaps) return;
  const classListKey = document.getElementById(event.code).classList;
  if (classListKey.contains('active-key')) {
    classListKey.add('key-animate');
    classListKey.remove('active-key');
  }
}

function updateActiveCapsShift(event) {
  if (event.code === 'CapsLock' || event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    stateCaps = !stateCaps;
    fillKey(lang);
  }
}

function updateStateInactiveShift(event) {
  event.stopPropagation();
  event.preventDefault();
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    stateCaps = !stateCaps;
    fillKey(lang);
  }
}

function inputKeyToTextarea(event) {
  event.preventDefault();
  let keyValue;
  arrKeyValue.forEach(row => {
    const keySearched = row.filter(key => key[0] === event.code);
    if (keySearched[0]) {
      if (lang === 'en') {
        if (stateCaps) keyValue = keySearched[0][4];
        else keyValue = keySearched[0][3];
      } else if (stateCaps) keyValue = keySearched[0][2];
      else keyValue = keySearched[0][1];
    }
  });
  if (keyValue.length === 1) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const finText = textarea.value.substring(0, start) + keyValue + textarea.value.substring(end);
    textarea.value = finText;
    textarea.focus();
    textarea.selectionEnd = start === end ? start + keyValue.length : start + 1;
  }

  event.stopPropagation();
}

function changeLang(event) {
  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && event.altKey) {
    if (lang === 'en') lang = 'ru';
    else lang = 'en';
    localStorage.lang = lang;
    fillKey(lang);
  }
}

function updateAfterBackspaceDelete(event) {
  if (event.code === 'Backspace') {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    let finText;
    if (start === end) finText = textarea.value.substring(0, start - 1) + textarea.value.substring(end);
    else finText = textarea.value.substring(0, start) + textarea.value.substring(end);
    textarea.value = finText;
    textarea.focus();
    textarea.selectionEnd = start === end ? start - 1 : start;
  }
  if (event.code === 'Delete') {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    let finText;
    if (start === end) finText = textarea.value.substring(0, start) + textarea.value.substring(end + 1);
    else finText = textarea.value.substring(0, start) + textarea.value.substring(end);
    textarea.value = finText;
    textarea.focus();
    textarea.selectionEnd = start;
  }
}

function handlerMouseDown(event) {
  if (event.target.classList.contains('keyboard') || event.target.classList.contains('keyboard__row')) {
    event.stopPropagation();
    event.preventDefault();
    return;
  }
  const newEvent = event;
  newEvent.code = event.target.id;
  updateStyleActiveKey(newEvent);
  updateActiveCapsShift(newEvent);
  inputKeyToTextarea(newEvent);
  updateAfterBackspaceDelete(newEvent);
  changeLang(newEvent);
  newEvent.stopPropagation();
  newEvent.preventDefault();
}

function handlerMouseUp(event) {
  if (event.target.classList.contains('keyboard') || event.target.classList.contains('keyboard__row')) {
    event.stopPropagation();
    event.preventDefault();
    return;
  }
  const newEvent = event;
  newEvent.code = event.target.id;

  window.setTimeout(updateStateInactiveShift.bind(this, newEvent), 800);
  updateStyleInactiveKey(newEvent);
  changeLang(newEvent);
  newEvent.stopPropagation();
  newEvent.preventDefault();
}

drawKeyboard();
arrKeyElements = [row1, row2, row3, row4, row5];
fillKey(lang);
document.addEventListener('keydown', updateActiveCapsShift);
document.addEventListener('keyup', updateStateInactiveShift);
document.addEventListener('keydown', updateStyleActiveKey);
document.addEventListener('keyup', updateStyleInactiveKey);
document.addEventListener('keydown', updateAfterBackspaceDelete);
document.addEventListener('keydown', inputKeyToTextarea);
document.addEventListener('keydown', changeLang);
keyboard.addEventListener('mousedown', handlerMouseDown);
keyboard.addEventListener('mouseup', handlerMouseUp);
