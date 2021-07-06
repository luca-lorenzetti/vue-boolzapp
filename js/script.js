var app = new Vue({
    el: '#root',
    data: {
        username: "Luca Lorenzetti",
        avatar: "img/avatar_5.jpg",
        showContacts: false,
        chatsCanStarted:[],
        chatStarted: [],
        contacts: [{
            id: 1,
            name: 'Michele',
            avatar: '_1',
            lastAccess: "10/01/2021 15:30:55",
        },
        {
            id: 2,
            name: 'Fabio',
            avatar: '_2',
            lastAccess: "1/03/2021 10:30:55",
        },
        {
            id: 3,
            name: 'Samuele',
            avatar: '_3',
            lastAccess: "10/02/2021 05:30:10",
        },
        {
            id: 4,
            name: 'Luisa',
            avatar: '_4',
            lastAccess: "20/02/2021 12:23:25",
        },
        {
            id: 5,
            name: 'Luigi',
            avatar: '_8',
            lastAccess: "20/02/2021 11:23:25",
        },
        {
            id: 6,
            name: 'Francesca',
            avatar: '_io',
            lastAccess: "20/02/2021 9:23:25",
        },
        {
            id: 7,
            name: 'Antonella',
            avatar: '_6',
            lastAccess: "20/02/2021 9:23:25",
        },
        {
            id: 8,
            name: 'Mario',
            avatar: '_7',
            lastAccess: "20/02/2021 13:23:25",
        }
    ],
        chatsOpened: [{
                id: 1,
                name: 'Michele',
                lastAccess: "10/01/2021 15:30:55",
                avatar: '_1',
                visible: true,
                active: false,
                messages: [{
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        seen: 'seen'
                    },
                    {
                        id: 2,
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        seen: 'seen'
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
                lastAccess: "1/03/2021 10:30:55",
                visible: true,
                active: false,
                messages: [{
                        id: 1,
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        seen: 'seen'
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
                lastAccess: "10/02/2021 05:30:10",
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
                        status: 'sent',
                        seen: 'seen'
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
                lastAccess: "20/02/2021 12:23:25",
                messages: [{
                        id: 1,
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        seen: 'seen'
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
        emojis:[
            {
                'icon': '😊',
                'word_detect':':)'
            },
            {
                'icon': '😔',
                'word_detect':':('
            },
            {
                'icon': '😆',
                'word_detect':'xD'
            },
            {
                'icon': '😡',
                'word_detect':'>('
            },

            {
                'icon': '💗',
                'word_detect':'<3'
            },
            {
                'icon': '😱',
                'word_detect':['D8']

            }
        

        ],
        show_emojis: false,
        currentChat: {},
        textMessage: "",
        filter: ""
    },

    methods: {

        //aggiungo la chat
        addChat(id){
            
            let contact = this.contacts.filter( elem => elem.id == id)[0];

            contact.visible = true;
            contact.active = false;
            contact.messages = null;

            contact.lastAccess = "10/01/2021 15:30:55",
            this.chatsOpened.push(contact);
            this.chatsCanStarted = this.chatsCanStarted.filter(elem => elem.id !== contact.id)
            this.setCurrentChat(id);
            this.showContacts = false;

        },
        //Setto le chat che possono essere aperte
        setChatsCanOpened(){
            this.contacts.forEach(element => {
                let found = false;

                for (let i = 0; i < this.chatsOpened.length; i++) {
                  
                    if( element.id == this.chatsOpened[i].id){
                        found = true;
                    }
                }

                if(!found){
                    this.chatsCanStarted.push(element);
                }
            });
        },
        // Aggiungo emoji al testo
        addEmoji(emoji){
            if(emoji){
                this.textMessage+=emoji.icon; 
            }
        },
        // Setta la chat corrente
        setCurrentChat: function (id) {
            this.chatsOpened.forEach(element => {
                if (element.id == id) {
                    element.active = true;
                    this.currentChat = element;
                } else {
                    element.active = false;
                }
            });


        },
        //   Setta le chat aperta
        setChatStarted: function () {
            this.chatStarted = this.chatsOpened.filter(function (elem) {
                return elem.visible;
            });
        },
        //   Setta la chat da aprire all'inizio
        setInitCurrentChat: function () {
            this.setCurrentChat(this.chatsOpened[0].id)
        },
        // Funzione per settare il messagio inviato
        sentMessage: function (text) {
            console.log("Invio")
          
            if (text != "") {
                let time = getRandomArbitrary(2, 5) * 1000;

                if(!this.currentChat.messages){
                    this.currentChat.messages = [];
                }
                this.currentChat.messages.push({
                    id: this.currentChat.messages.length + 1,
                    date: this.getCurrentDate(),
                    message: text,
                    status: 'sent',
                    seen: 'sent'
                });

                console.log("prima del setTime")
                setTimeout(() => {
                    console.log("setTime seen")
                    this.currentChat.messages[this.currentChat.messages.length - 1].seen = 'seen';
                }, time);

                setTimeout(() => {
                    console.log("setTime non seen")
                    this.createAnswer(buildAnswer(this.currentChat.messages[this.currentChat.messages.length - 1].message));
                }, time + (getRandomArbitrary(2, 5) * 1000));
              }

              this.show_emojis = false;
              this.textMessage = "";

        },
        // Funzione che crea la risposta
        createAnswer: function (mess) {
            this.currentChat.messages.push({
                id: this.currentChat.messages.length + 1,
                date: this.getCurrentDate(),
                message: mess,
                status: 'received'
            });

        },
        //   Funzione per ottenere l'ora corrente
        getCurrentDate: function () {
            return dayjs().format("DD/MM/YYYY HH:mm:ss");
        },
        //   Funzione per filtrare le chat aperte
        contactsFilter: function (input) {
            this.chatStarted = this.chatsOpened.filter(function (elem) {

                return (elem.visible && elem.name.toLowerCase().includes(input)) || elem == "";
            })
        }

    },
    // Funzioni eseguite alla creazione di vue
    created: function () {

        this.setChatsCanOpened();
        this.setInitCurrentChat();
        this.setChatStarted();
    }

})