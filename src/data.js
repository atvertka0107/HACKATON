export const forms_text = {
    id: 'Наименование продукта',
    premium: 'Страховая премия',
    insuredPersonId: 'ИНН застрахованного лица',
    ownerId: 'ИНН собственника',
    dateBegin: 'Дата начала страховой ответсвенности',
    dateEnd: 'Дата окончания страховой ответсвенности',
    status: 'Статус договора',
    dateCreate: 'Дата подписания договора',
    dateSign: 'Дата подписания договора',
    id_options: [
        {id: '12', name: 'Sosago'},
        {id: '13', name: 'cacasco'},
        {id: '14', name: 'pipi'},
    ],
    status_options: [
        {id: 'draft', name: 'Проект'},
        {id: 'signed', name: 'Подписан'},
    ],
    button: 'Оформить договор',
}

export const contract_card_text = {
    contract: 'Договор',
    insuredPersonId: 'ИНН застрахованного лица',
    DateCreate: 'Дата создания',
    Name: 'Название продукта',
    Status: {'draft': 'Проект', 'signed': 'Подписан', 'terminated': 'Расторгнут'}
}

export const contracts = [
    {insuredPersonId: '1232144124', DateCreate: '12.04.2023', Name: 'zalupa', Status: 'draft'},
    {insuredPersonId: '2344324344', DateCreate: '11.04.2024', Name: 'xui', Status: 'signed'},
    {insuredPersonId: '1232323323', DateCreate: '11.04.2014', Name: 'pipi', Status: 'terminated'},
]

export const contracts_full = {
    '12': {Premium: '123', OwnerId: '2344324344', DateBegin: '12.06.3423', DateEnd: '12.23.2344', DateSign: '12.54.3244', insuredPersonId: '1232144124', DateCreate: '12.04.2023', Name: 'zalupa', Status: 'draft'},
    '36': {Premium: '123', OwnerId: '2344324344', DateBegin: '12.06.3423', DateEnd: '12.23.2344', DateSign: '12.54.3244', insuredPersonId: '2344324344', DateCreate: '11.04.2024', Name: 'xui', Status: 'signed'},
    '959': {Premium: '123', OwnerId: '2344324344', DateBegin: '12.06.3423', DateEnd: '12.23.2344', DateSign: '12.54.3244', insuredPersonId: '1232323323', DateCreate: '11.04.2014', Name: 'pipi', Status: 'terminated'},
}

export const products_text = {
    lob: 'Линия бизнеса',
    ids: {'OSAGO': 'ОСАГО', 'CASCO': 'КАСКО', 'THI': 'Страхование путешественников', 'ACCIDENT': 'Страхование от несчастных случаев'}
}

export const products = [
    {ID: '13', Name: 'Каршеринг', LOBId: 'CASCO'},
    {ID: '14', Name: 'Перевозка', LOBId: 'OSAGO'},
    {ID: '15', Name: 'Тур', LOBId: 'THI'},
    {ID: '16', Name: 'Авария', LOBId: 'ACCIDENT'},
    {ID: '17', Name: 'Каршеринговая тех фирма', LOBId: 'THI'},
]