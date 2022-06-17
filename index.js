const TelegramApi = require('node-telegram-bot-api');



const url0 ="https://docs.google.com/spreadsheets/d/e/2PACX-1vRF2BofnWdHUrFQdRkCfOvmGUaNlEndnWJzTmzRv-9wlM4zxdMYH4Hb9LLolIvbKgBv6FijHU_cPpeT/pubhtml?gid=1565049153&single=true"
const url1 ="https://docs.google.com/spreadsheets/d/e/2PACX-1vTwpl-IYSEoLAtoTqNes8OFb8YJwh-zASoSJMxLqzP3BjZJEpQr9ZrXuHprlpgwJV5q4yqofqX8mdXM/pubhtml"
const url2 ="https://docs.google.com/spreadsheets/d/e/2PACX-1vT0ixLTnly0H26jAiMYKCDMqE5Aoc9ktj0-uoOeTZRhkkU9_v_G_r4IYwx5EfAe19-08FHS260G8TnC/pubhtml"
const url3 ="https://docs.google.com/spreadsheets/d/e/2PACX-1vTyCNPj4NS436fx0USsCQgFUn0U5lalTRmTS1mQ5xO7pnDr_ptRmq5-lDM8pYrqgXlqQ0sTjezURDMi/pubhtml"
const url4 ="https://docs.google.com/spreadsheets/d/e/2PACX-1vT3GDwlX5qFWTg8QmvE1arSyAY1Z28CcCx8G2LHow55JOg05JyWxCHREffBB7o_IaclFjjPlcy-4YF0/pubhtml"
const url5 ="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsmzK3k6bItOAR8UhqxiPt0k119-ARJNSMUKE_Q1_opubk3EFYMcWMiMbdmxzjT7DuGL9tBxndAub3/pubhtml"
const url6 ="https://docs.google.com/spreadsheets/d/e/2PACX-1vRsqqUuT06VM3X6bBIPMtWw90Prk-ByWyimfPgo1G5aR3T1xoJNw9sOY3fsowqtwdqaQReHvsjyxOcN/pubhtml"
const url7 ="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5fB-hZ-Mn3PDc6XcJjYrt9GeqaPOAB8AKyBZc2WgXoELhvy9BIMu39oX479JHxFb3rZfEkKoNU9_9/pubhtml"
const url8 ="https://docs.google.com/spreadsheets/d/e/2PACX-1vTw_TWXsNwdT504GI1qxWfkeGUw9bW8r66MszZbbm0u2D4XU5N22Jp98zd86n-Mu5kd9G9iQsaqQEN8/pubhtml"
const url9 ="https://docs.google.com/spreadsheets/d/e/2PACX-1vRYhB0o3A2OMSO1ixqRnjs2YRgfQbmBZTWPGnnMkqyfehmJ1-RHxUoZAQuzUl-SlUJBGNvXLR9Q5eNf/pubhtml"

const token = '5466934344:AAGu7KJxlH6kbkB42SjT7u4fVIn6rMGfnmQ';

const bot = new TelegramApi(token, {polling: true});

const {info_list, report_list, job_list} = require('./options')


const { GoogleSpreadsheetRow } = require('google-spreadsheet');
const {google} = require('googleapis');
const keys =  require('./keys.json');
const { restart } = require('nodemon');

const client = new google.auth.JWT(
keys.client_email,
null,
keys.private_key,
['https://www.googleapis.com/auth/spreadsheets']
);


const start = async () => {
    bot.setMyCommands([
        {command: '/get_report', description: 'Получить информацию о графике'},

        {command: '/get_report_all', description: 'Отчет по видам работ'},
    ])
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/get_report') {
            return bot.sendMessage(chatId,  "Выбери отчет", report_list)
        }
        if (text === '/get_report_all') {
          return bot.sendMessage(chatId, "Тут всего один отчет", job_list)
        }

    })
    bot.on('callback_query',  msg =>{
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if (data === '0'){
          return bot.sendMessage(chatId, url0)
        }
        if (data === '1'){
          return bot.sendMessage(chatId, url1)
        }
        if (data === '2'){
          return bot.sendMessage(chatId, url2)
        }
        if (data === '3'){
          return bot.sendMessage(chatId, url3)
        }
        if (data === '4'){
          return bot.sendMessage(chatId, url4)
        }
        if (data === '5'){
          return bot.sendMessage(chatId, url5)
        }
        if (data === '6'){
          return bot.sendMessage(chatId, url6)
        }
        if (data === '7'){
          return bot.sendMessage(chatId, url7)
        }
        if (data === '8'){
          return bot.sendMessage(chatId, url8)
        }
        if (data === '9'){
          return bot.sendMessage(chatId, url9)
        }

    })

}

start()
