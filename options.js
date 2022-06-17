module.exports = {
    info_list: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Опрыскиватели', callback_data:'opList'},{text: 'Сеялки', callback_data:'seed'},{text: 'Агрегаты', callback_data:'agr'} ]
            ]

        })
    },
    report_list: {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{text : 'Обробка землі отчет', callback_data : '1'}, {text : 'Роса отчет', callback_data : '2'}],
          [{text : ' Протруення отчет', callback_data : '3'}, {text : 'Оприскування', callback_data : '4'}],
          [{text : 'Посiв cуцiльний отчет', callback_data : '5'}, {text : 'Посiв просапний отчет', callback_data : '6'}],
          [{text : 'Внесення БА отчет', callback_data : '7'}, {text : 'Комбайнування отчет', callback_data : '8'}],
          [{text : 'Дрони', callback_data : '9'}],

        ]
      })
    },
    job_list: {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{text : 'Отчет по видам работ', callback_data : '0'}]
        ]
      })
    }
}
