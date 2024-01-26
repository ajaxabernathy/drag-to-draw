document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const drawingArea = document.getElementById('drawingArea');
  const text = document.getElementById('text');
  document.body.appendChild(nav);
  drawingArea.appendChild(text);
  let isDrawing = false;

  // Handle click info to display info modal
  const info = document.getElementById('info');
  const dialog = document.querySelector('dialog');
  const closeButton = document.querySelector('dialog button');

  info.addEventListener('click', () => {
    dialog.showModal();
  });

  closeButton.addEventListener('click', () => {
    dialog.close();
  });

  const emojis = [
    '😸',
    '🎀',
    '🚗',
    '🌸',
    '🐳',
    '🏰',
    '📚',
    '🌼',
    '🎉',
    '🍇',
    '🍓',
    '🚀',
    '🎨',
    '🏖️',
    '🍔',
    '🌈',
    '🏞️',
    '🍦',
    '🎢',
    '🍟',
    '🎁',
    '🚴‍♀️',
    '🏄‍♂️',
    '🐬',
    '🍕',
    '🍭',
    '🚁',
    '🍩',
    '📷',
    '🚴‍♂️',
    '🐼',
    '🌟',
    '🎭',
    '🍉',
    '🎸',
    '🍍',
    '🏓',
    '🐵',
    '🍎',
    '📱',
    '🎂',
    '🚤',
    '🚴‍♀️',
    '🍒',
    '🏀',
    '🍑',
    '🌺',
    '🎸',
    '🚂',
    '🎻',
    '🐘',
    '🌍',
    '🎧',
    '🎹',
    '🏆',
    '🌊',
    '🍈',
    '🌯',
    '🎬',
    '🍨',
    '🚗',
    '🏰',
    '📡',
    '🚀',
    '🍜',
    '🏰',
    '🎩',
    '🍟',
    '🎳',
    '🌲',
    '🍬',
    '🌓',
    '🍏',
    '🏇',
    '🌞',
    '🍲',
    '🍣',
    '🎭',
    '🚴‍♂️',
    '🍤',
    '🍡',
    '🎳',
    '🏄‍♀️',
    '🎺',
    '🐄',
    '🎨',
    '🍳',
    '🌄',
    '🍖',
    '🎵',
    '🍏',
    '🌃',
    '🎊',
    '🐢',
    '🏰',
    '📚',
    '🍜',
    '🚚',
    '🚤',
    '🌍',
    '🏓',
    '🍋',
    '🌠',
    '🎓',
    '🚑',
    '🎵',
    '🌲',
    '🍛',
    '🍠',
    '🍩',
    '🚁',
    '🏕️',
    '🍯',
    '📸',
    '🎹',
    '🌑',
    '🌄',
    '🏇',
    '🚴‍♀️',
    '🏞️',
    '🍇',
    '🏀',
    '🚴‍♂️',
    '🎻',
    '🍆',
    '🚢',
    '📱',
    '🌑',
    '🎃',
    '🍍',
    '🍭',
    '🍁',
    '🍏',
    '🌅',
    '🏆',
    '🎈',
    '🏖️',
    '🍚',
    '🌲',
    '🚀',
    '🍇',
    '🚂',
    '🍄',
    '🌹',
    '🎻',
    '🏞️',
    '🍔',
    '🎬',
    '🌓',
    '🐶',
    '🚴‍♀️',
    '📷',
    '🍀',
    '🚦',
    '🎉',
    '🍂',
    '🌟',
    '🍊',
    '🎼',
    '🏰',
    '🎺',
    '🎢',
    '🚚',
    '📚',
    '🚁',
    '🍑',
    '🍒',
    '🍛',
    '🚴‍♂️',
    '🍌',
    '📚',
    '🌊',
    '🏆',
    '🍨',
    '🍇',
    '🚁',
    '🏇',
    '🍠',
    '🌈',
    '🎸',
    '🌲',
    '🍆',
    '🍃',
    '🚁',
    '🍖',
    '🎩',
    '🍕',
    '🏓',
    '🎳',
    '🚤',
    '🎶',
    '🍙',
    '🚗',
    '🎭',
    '🍲',
    '🎂',
    '🌄',
    '🌺',
    '🍴',
    '🚦',
    '🏀',
    '🌋',
    '🎹',
    '🏕️',
    '🏆',
    '🎡',
    '🍦',
    '🚁',
    '🍋',
    '🏞️',
    '🌈',
    '🍬',
    '🚢',
    '🎨',
    '🍉',
    '🏄‍♂️',
    '🎵',
    '🚲',
    '🚴‍♀️',
    '🍄',
    '🏕️',
    '🌸',
    '🚴‍♂️',
    '🌠',
    '🚤',
    '🏞️',
    '🎸',
    '🍯',
    '🌑',
    '🚲',
    '🌲',
    '🌟',
    '🎬',
    '🏄‍♀️',
    '🌑',
    '🌄',
    '🎓',
    '🍉',
    '🌠',
    '🏰',
    '🚗',
    '🍊',
    '🎨',
    '🎢',
    '🍌',
    '🚀',
    '🎻',
    '🎹',
    '🌸',
    '🚚',
    '🎭',
    '🚴‍♀️',
    '📷',
    '🚁',
    '🍎',
    '🌺',
    '📸',
    '🍩',
    '🍍',
    '🚁',
    '🍓',
    '🚀',
    '🏓',
    '🌓',
    '🏖️',
    '🚁',
    '🍘',
    '🍆',
    '🏞️',
    '🚲',
    '🚴‍♂️',
    '🌲',
    '🚤',
    '🍜',
    '🏰',
    '🍨',
    '🏆',
    '🎹',
    '🍧',
    '🏇',
    '🌋',
    '🌺',
    '🚁',
    '🍀',
    '🍲',
    '🎶',
    '🎼',
    '🚲',
    '🚴‍♀️',
    '🍏',
    '🎡',
    '🎸',
    '🌏',
    '🎺',
    '🍍',
    '🍨',
    '🌳',
    '🚴‍♂️',
    '🏄‍♂️',
    '🌅',
    '🍕',
    '🏓',
    '🚢',
    '🎯',
    '🌇',
    '🚲',
    '🚴‍♀️',
    '🏖️',
    '🍂',
    '🏰',
    '🎼',
    '🍤',
    '🍑',
    '🏞️',
    '🌞',
    '🌍',
    '🍣',
    '🚁',
    '🏇',
    '🎬',
    '🍳',
    '🍦',
    '🚁',
    '🍖',
    '🍙',
    '🚤',
    '🚴‍♀️',
    '🌈',
    '🍉',
    '🏄‍♀️',
    '🍖',
    '🎺',
    '🍑',
    '🚁',
    '🌻',
    '🎻',
    '🏰',
    '🎶',
    '🎵',
    '🎭',
    '🍜',
    '🚗',
    '🍄',
    '🚀',
    '🏆',
    '🚁',
    '🍍',
    '🍂',
    '🍬',
    '🎢',
    '🌑',
    '🏓',
    '🍏',
    '🏄‍♀️',
    '🍋',
    '🏀',
    '🎳',
    '🍄',
    '🎹',
    '🍓',
    '🍩',
    '🎭',
    '🎸',
    '🏞️',
    '🍨',
    '🍅',
    '🏰',
    '🎻',
    '🎺',
    '🍠',
    '🎧',
    '🚁',
    '🚀',
    '🌟',
    '🎡',
    '🍦',
    '🍬',
    '🎢',
    '🚤',
    '🍈',
    '🌻',
    '🎨',
    '🌊',
    '🏆',
    '🏀',
    '🍚',
    '🚁',
    '🏓',
    '🍧',
    '🚲',
    '🍤',
    '🚴‍♂️',
    '🌓',
    '🎹',
    '🍁',
    '🏰',
    '📸',
    '🌌',
    '🎬',
    '🚚',
    '🍴',
    '🚴‍♀️',
    '🚀',
    '🍌',
    '🍆',
    '🌠',
    '🌃',
    '🌅',
    '🌺',
    '🚴‍♂️',
    '🎻',
    '🍖',
    '🏓',
    '🚤',
    '🎧',
    '🍏',
    '🍠',
    '🏖️',
    '🌊',
    '🍦',
    '🍄',
    '🎭',
    '🎸',
    '🍎',
    '🍯',
    '🌋',
    '🎯',
    '🏀',
    '🍇',
    '🌟',
    '🏞️',
    '🚁',
    '🍉',
    '🍓',
    '🚴‍♀️',
    '🍇',
    '🚗',
    '🍑',
    '🎵',
    '🏰',
    '📚',
    '🌌',
    '🍋',
    '🍊',
    '🚲',
    '🎉',
    '🍍',
    '🌠',
    '🍠',
    '🎊',
    '🚴‍♂️',
    '🍩',
    '🍘',
    '🏰',
    '🍓',
    '🍦',
    '🎸',
    '🌑',
    '🍆',
    '🍍',
    '🌳',
    '🎬',
    '🍏',
    '🎻',
    '🎺',
    '🎭',
    '🌍',
    '🚗',
    '🚲',
    '🚀',
    '🍨',
    '🎵',
    '🍜',
    '🚁',
    '🎢',
    '🏀',
    '🏓',
    '🎼',
    '🍯',
    '🍕',
    '🍒',
    '🍋',
    '🍍',
    '🎻',
    '🚲',
    '🎺',
    '🍈',
    '🍌',
    '🎧',
    '🚤',
    '🎳',
    '🌇',
    '🌋',
    '🍦',
    '🚴‍♀️',
    '🍏',
    '🚴‍♂️',
    '🍂',
    '🚴‍♀️',
    '🎹',
    '🍁',
    '🍆',
    '🍣',
    '🍟',
    '🍖',
    '🌓',
    '🎩',
    '🚁',
    '🌺',
    '🍠',
    '🎤',
    '🍴',
    '🍔',
    '🚢',
    '🍀',
    '🚗',
    '🍇',
    '🎂',
    '🍙',
    '🌻',
    '🎉',
    '🏆',
    '🎸',
    '🚴‍♀️',
    '🚀',
    '🎵',
    '🏖️',
    '🍈',
    '🎧',
    '🌋',
    '🍩',
    '🌄',
    '🎓',
    '🍭',
    '🍉',
    '🌈',
    '🎹',
    '🍍',
    '🍄',
    '🏰',
    '🏞️',
    '🍲',
    '🏰',
    '🎬',
    '🍇',
    '🚗',
    '🍤',
    '🍍',
    '🚤',
    '🎺',
    '🍀',
    '🎻',
    '🚁',
    '🎢',
    '🍓',
  ];

  // Event listeners for mouse down, up, and move events
  drawingArea.addEventListener('mousedown', startDrawing);
  drawingArea.addEventListener('mouseup', stopDrawing);
  drawingArea.addEventListener('mousemove', drawEmoji);
  drawingArea.addEventListener('touchstart', startDrawing);
  drawingArea.addEventListener('touchend', stopDrawing);
  drawingArea.addEventListener('touchmove', drawMobileEmoji);
  drawingArea.addEventListener('click', drawSingleEmoji);

  function startDrawing() {
    isDrawing = true;
  }

  function stopDrawing() {
    isDrawing = false;
  }

  // Draw on browser
  function drawEmoji(e) {
    if (!isDrawing) return;

    text.classList.add('hidden');
    const emoji = getRandomEmoji();

    // Create an emoji element
    const emojiElement = document.createElement('div');
    emojiElement.textContent = emoji;
    emojiElement.style.position = 'absolute';

    const emojiSize = 24;
    emojiElement.style.left = e.clientX - emojiSize / 2 + 'px';
    emojiElement.style.top = e.clientY - emojiSize / 2 + 'px';
    emojiElement.style.fontSize = '24px';

    // Append the emoji element to the drawing area
    drawingArea.appendChild(emojiElement);
  }

  // Draw on mobile
  function drawMobileEmoji(e) {
    if (!isDrawing) return;

    text.classList.add('hidden');
    const emoji = getRandomEmoji();

    // Create an emoji element
    const emojiElement = document.createElement('div');
    emojiElement.textContent = emoji;
    emojiElement.style.position = 'absolute';

    const emojiSize = 24;
    emojiElement.style.left = e.touches[0].clientX - emojiSize / 2 + 'px';
    emojiElement.style.top = e.touches[0].clientY - emojiSize / 2 + 'px';
    emojiElement.style.fontSize = '18px';

    // Append the emoji element to the drawing area
    drawingArea.appendChild(emojiElement);
  }

  // Draw one emoji on single click
  function drawSingleEmoji(e) {
    text.classList.add('hidden');
    const emoji = getRandomEmoji();

    // Create an emoji element
    const emojiElement = document.createElement('div');
    emojiElement.textContent = emoji;
    emojiElement.style.position = 'absolute';

    const emojiSize = 24;
    emojiElement.style.left = e.clientX - emojiSize / 2 + 'px';
    emojiElement.style.top = e.clientY - emojiSize / 2 + 'px';
    emojiElement.style.fontSize = '24px';

    // Append the emoji element to the drawing area
    drawingArea.appendChild(emojiElement);
  }

  function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
});
