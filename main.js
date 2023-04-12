const $inputText = document.querySelector('#input-text')
const $encrypt = document.querySelector('#encriptar')
const $decrypt = document.querySelector('#desencriptar')
const $copyText = document.querySelector('#copiar')
const $outputText = document.querySelector('#outText')

const encryptText = (text) => {
  const newText = text.toLowerCase().split('')

  newText.forEach((letter, index) => {
    if (letter === 'a') newText[index] = 'ai'
    if (letter === 'e') newText[index] = 'enter'
    if (letter === 'i') newText[index] = 'imes'
    if (letter === 'o') newText[index] = 'ober'
    if (letter === 'u') newText[index] = 'ufat'
  })

  return newText.join('')
}

const decryptText = (text) => {
  const newText = text.toLowerCase()

  return (
    newText
      .replaceAll('ai', 'a')
      .replaceAll('enter', 'e')
      .replaceAll('imes', 'i')
      .replaceAll('ober', 'o')
      .replaceAll('ufat', 'u')
  )
}

$encrypt.onclick = () => {
  if ($inputText.value.trim() === '') return

  document.querySelector('#not-found').classList.add('hidden')
  document.querySelector('.output-box').classList.add('encrypted')
  document.querySelector('.output').classList.add('encrypted')

  $outputText.value = encryptText($inputText.value)
  $inputText.value = ''
}

$decrypt.onclick = () => {
  if ($inputText.value.trim() === '') return

  $outputText.value = decryptText($inputText.value)
  $inputText.value = ''
}

$copyText.onclick = async () => {
  try {
    await navigator.clipboard.writeText($outputText.value)
  } catch {
    console.error('Failed to copy')
  }
}

$inputText.onkeydown = (e) => {
  const replacements = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' }

  for (key in replacements) {
    if (e.key.toLowerCase() === key ) {
      e.preventDefault()
      $inputText.value += replacements[key]
    }
  }
}
