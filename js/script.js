var app = new Vue({
    el: '#root',
    data: {
        username: "Luca Lorenzetti",
        avatar: "img/avatar_io.jpg",
        chatStarted: [],
        contacts: [{
                id: 1,
                name: 'Michele',
                avatar: '_1',
                visible: true,
                active: false,
                messages: [{
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        id: 3,
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                id: 2,
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                active: false,
                messages: [{
                        id: 1,
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        id: 3,
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                id: 3,
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                active: false,
                messages: [{
                        id: 1,
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        id: 2,
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        id: 3,
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                id: 4,
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                active: false,
                messages: [{
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            }
        ],
        currentChat: {},
        textMessage: "",
        filter: ""
    },

    methods: {

        // Setta la chat corrente
        setCurrentChat: function (id) {
            this.contacts.forEach(element => {
                if (element.id == id) {
                    element.active = true;
                    this.currentChat = element;
                } else {
                    element.active = false;
                }
            });


        },
        //   Setta le chat aperte
        setChatStarted: function () {
            this.chatStarted = this.contacts.filter(function (elem) {
                return elem.visible;
            });
        },
        //   Setta la chat da aprire all'inizio
        setInitCurrentChat: function () {
            this.setCurrentChat(this.contacts[0].id)
        },
        // Funzione psettare il messagio inviato
        sentMessage: function (message) {
            this.currentChat.messages.push(message);
            this.textMessage = "";
        },
        //   Funzione per ottenere l'ora corrente
        getCurrentDate: function () {
            return dayjs().format("DD/MM/YYYY HH:mm:ss");
        },
        checkInputText: function (text) {

            if (text != "") {

                this.sentMessage({
                    id: this.currentChat.messages.length + 1,
                    date: this.getCurrentDate(),
                    message: text,
                    status: 'sent'
                })
            }
        },
        //   Funzione per filtrare le chat aperte
        contactsFilter: function (input) {
            this.chatStarted = this.contacts.filter(function (elem) {

                return (elem.visible && elem.name.toLowerCase().includes(input)) || elem == "";
            })
        }

    },
    // Funzioni eseguite alla creazione di vue
    created: function () {
        this.setInitCurrentChat();
        this.setChatStarted();
    }

})