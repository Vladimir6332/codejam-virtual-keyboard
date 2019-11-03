function drawKeyboard() {
  const row1Key = [
    ['Backquote', 'ё', 'Ё', '`', '~'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '"', '2', '@'],
    ['Digit3', '3', '№', '3', '#'],
    ['Digit4', '4', ';', '4', '$'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', ':', '6', '^'],
    ['Digit7', '7', '?', '7', '&'],
    ['Digit8', '8', '', '8', ''],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '', '-', ''],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']
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
    ['Delete', 'Del', 'Del', 'Del', 'Del']
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
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter']
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
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']
  ];
  const row5Key = [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['MetaRight', 'Win', 'Win', 'Win', 'Win'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
  ];
  let keyboardFragment = document.createDocumentFragment();
  const textarea = document.createElement('textarea');
  const keyboard = document.createElement('div');
  let row1, row2, row3, row4, row5;
  textarea.className = 'textarea';
  keyboardFragment.appendChild(textarea);
  keyboard.className = 'keyboard';
  keyboardFragment.appendChild(keyboard);

  row1 = drawRow(row1Key, keyboard);
  row2 = drawRow(row2Key, keyboard);
  row3 = drawRow(row3Key, keyboard);
  row4 = drawRow(row4Key, keyboard);
  row5 = drawRow(row5Key, keyboard);

  row1.querySelector('div:last-child').classList.add('keyboard__backspace');
  row2.querySelector('div:first-child').classList.add('keyboard__tab');
  row2.querySelector('div:last-child').classList.add('keyboard__del');
  row3.querySelector('div:first-child').classList.add('keyboard__caps');
  row3.querySelector('div:last-child').classList.add('keyboard__enter');
  row4.querySelector('div:first-child').classList.add('keyboard__shift-left');
  row4.querySelector('div:last-child').classList.add('keyboard__shift-right');
  Array.prototype.forEach.call(row5.children, elem =>
    elem.classList.add('keyboard__ctrl-win-alt')
  );
  row5.querySelector('div:nth-child(4)').classList.add('keyboard__space');

  document.body.appendChild(keyboardFragment);
}

function drawRow(arrKey, parent) {
  let row = document.createElement('div');
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

drawKeyboard();
