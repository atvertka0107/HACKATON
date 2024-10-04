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
    status_create_options: [
        {id: 'draft', name: 'Проект'},
        {id: 'signed', name: 'Подписан'},
    ],
    status_edit_options: [
        {id: 'draft', name: 'Проект'},
        {id: 'signed', name: 'Подписан'},
        {id: 'terminated', name: 'Расторгнут'},
    ],
    button_create: 'Оформить договор',
    button_edit: 'Подтвердить',
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
    {insuredPersonId: '1232323323', DateCreate: '11.04.2014', Name: 'pipi', Status: 'terminated'},
    {insuredPersonId: '1232144124', DateCreate: '12.04.2023', Name: 'zalupa', Status: 'draft'},
    {insuredPersonId: '2344324344', DateCreate: '11.04.2024', Name: 'xui', Status: 'signed'},
    {insuredPersonId: '1232323323', DateCreate: '11.04.2014', Name: 'pipi', Status: 'terminated'},
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
    {ID: '15', Name: 'Тур', LOBId: 'THI'},
    {ID: '16', Name: 'Авария', LOBId: 'ACCIDENT'},
    {ID: '17', Name: 'Каршеринговая тех фирма', LOBId: 'THI'},
]

export const main_text = {
    title: 'Проверка гипотез',
    desctription: '23423rwefqergqergqeg',
}

export const agent_header_text = [
    ["/sign_contract", 'Оформление договора', "./src/refs/Assignment add.svg"],
    ["/history", 'История договоров', './src/refs/History.svg'],
    ["/insuarance_products", 'Продукты страхования', './src/refs/Vector.svg'],
]

export const admin_header_text = [
    ["/admin", 'Начальная страница', '../src/refs/Admin panel settings.svg'],
    ["/admin/products_list", 'Продукты страхования', '../src/refs/Vector.svg'],
]

export const admin_conv_prod = [
    {AgentId: '123', ProductId: '345341', LOB: 'CASCO', Status: 'draft', Date: '12.06.2003'},
    {AgentId: '213', ProductId: '2662623', LOB: 'CASCO', Status: 'terminated', Date: '12.06.2005'},
    {AgentId: '312', ProductId: '123213', LOB: 'CASCO', Status: 'signed', Date: '12.06.2002'},
    {AgentId: '123', ProductId: '345341', LOB: 'CASCO', Status: 'draft', Date: '12.06.2003'},
    {AgentId: '213', ProductId: '2662623', LOB: 'CASCO', Status: 'terminated', Date: '12.06.2005'},
    {AgentId: '312', ProductId: '123213', LOB: 'CASCO', Status: 'signed', Date: '12.06.2002'},
    {AgentId: '123', ProductId: '345341', LOB: 'CASCO', Status: 'draft', Date: '12.06.2003'},
    {AgentId: '213', ProductId: '2662623', LOB: 'CASCO', Status: 'terminated', Date: '12.06.2005'},
    {AgentId: '312', ProductId: '123213', LOB: 'CASCO', Status: 'signed', Date: '12.06.2002'},
    {AgentId: '123', ProductId: '345341', LOB: 'CASCO', Status: 'draft', Date: '12.06.2003'},
    {AgentId: '213', ProductId: '2662623', LOB: 'CASCO', Status: 'terminated', Date: '12.06.2005'},
    {AgentId: '312', ProductId: '123213', LOB: 'CASCO', Status: 'signed', Date: '12.06.2002'},
    {AgentId: '123', ProductId: '345341', LOB: 'CASCO', Status: 'draft', Date: '12.06.2003'},
    {AgentId: '213', ProductId: '2662623', LOB: 'CASCO', Status: 'terminated', Date: '12.06.2005'},
    {AgentId: '312', ProductId: '123213', LOB: 'CASCO', Status: 'signed', Date: '12.06.2002'},
    
]

export const admin_view_sales = [
    {AgentId: '123', ProductId: '345341', ContractId: '1235562', Premium: '123', Comission: '587'},
    {AgentId: '7896', ProductId: '074', ContractId: '01', Premium: '1', Comission: '562'},
    {AgentId: '125', ProductId: '1346', ContractId: '21115', Premium: '19', Comission: '0'},
    {AgentId: '123', ProductId: '345341', ContractId: '1235562', Premium: '123', Comission: '587'},
    {AgentId: '7896', ProductId: '074', ContractId: '01', Premium: '1', Comission: '562'},
    {AgentId: '125', ProductId: '1346', ContractId: '21115', Premium: '19', Comission: '0'},
    {AgentId: '123', ProductId: '345341', ContractId: '1235562', Premium: '123', Comission: '587'},
    {AgentId: '7896', ProductId: '074', ContractId: '01', Premium: '1', Comission: '562'},
    {AgentId: '125', ProductId: '1346', ContractId: '21115', Premium: '19', Comission: '0'},
    {AgentId: '123', ProductId: '345341', ContractId: '1235562', Premium: '123', Comission: '587'},
    {AgentId: '7896', ProductId: '074', ContractId: '01', Premium: '1', Comission: '562'},
    {AgentId: '125', ProductId: '1346', ContractId: '21115', Premium: '19', Comission: '0'},
]

export const admin_prem_com = [
    {ProductId: '123', SumPremium: '31634', SumComission: '1245135', AgentId: '234'},
    {ProductId: '132531', SumPremium: '000', SumComission: '1244', AgentId: '1243'},
    {ProductId: '666', SumPremium: '1488', SumComission: '228', AgentId: '895494'},
    {ProductId: '123', SumPremium: '31634', SumComission: '1245135', AgentId: '234'},
    {ProductId: '132531', SumPremium: '000', SumComission: '1244', AgentId: '1243'},
    {ProductId: '666', SumPremium: '1488', SumComission: '228', AgentId: '895494'},
    {ProductId: '123', SumPremium: '31634', SumComission: '1245135', AgentId: '234'},
    {ProductId: '132531', SumPremium: '000', SumComission: '1244', AgentId: '1243'},
    {ProductId: '666', SumPremium: '1488', SumComission: '228', AgentId: '895494'},
    {ProductId: '123', SumPremium: '31634', SumComission: '1245135', AgentId: '234'},
    {ProductId: '132531', SumPremium: '000', SumComission: '1244', AgentId: '1243'},
    {ProductId: '666', SumPremium: '1488', SumComission: '228', AgentId: '895494'},
    {ProductId: '123', SumPremium: '31634', SumComission: '1245135', AgentId: '234'},
    {ProductId: '132531', SumPremium: '000', SumComission: '1244', AgentId: '1243'},
    {ProductId: '666', SumPremium: '1488', SumComission: '228', AgentId: '895494'},
]