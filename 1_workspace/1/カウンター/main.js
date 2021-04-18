const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const mainasuButton = document.getElementById("mainasu-button")
const nibaiButton = document.getElementById("nibai-button")

// ボタンをクリックしたときの処理を登録
plusButton.onclick = function() {
  // ここにクリック後の処理を書く
}

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function() {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}
mainasuButton.onclick = function() {
  // count を更新
  count -= 1
  // count を表示
  display.textContent = count
}
nibaiButton.onclick = function() {
  // count を更新
  count *= 2
  // count を表示
  display.textContent = count
}
