import axios from 'axios'
export const sendTicket = (msg) => {
  const url = 'https://api.telegram.org/bot'
  const bot_token = '1535923642:AAEXCdgRF7GZ-K9NL_9xWgXCK53hyPCw0ms'
  const group = '-474615690'
  const message = `Имя: ${msg.name}\nМэйл: ${msg.email}\nТекст: ${msg.text}`

  axios.post(
    `https://api.telegram.org/bot1535923642:AAEXCdgRF7GZ-K9NL_9xWgXCK53hyPCw0ms/sendMessage`,
    {
      chat_id: group,
      text: message,
    }
  )
}
