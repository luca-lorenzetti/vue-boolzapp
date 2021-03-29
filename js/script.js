var app = new Vue({
    el: '#root',
    data: {
        username: "Nome Utente",
        avatar: "img/avatar_io.jpg",
        contacts: [
          {
              id:"1",
              name: 'Michele',
              avatar: '_1',
              visible: true,
              active: false,
              messages: [{
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di dargli da mangiare',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ],
          },
          {
              id:"2",
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              active: false,
              messages: [{
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent'
              },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'received'
                  }
              ],
          },
          {
              id:"3",
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              active: false,
              messages: [{
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received'
              },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              id:"4",
              name: 'Luisa',
              avatar: '_4',
              visible: true,
              active: false,
              messages: [{
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          }],
      currentChat: {},
      textMessage: ""
    },
   
    methods:{
    
      setCurrentChat: function (id){
        this.contacts.forEach(element => {
         if( element.id == id){
           element.active = true;
          this.currentChat = element;
         }
         else{
          element.active = false;
         }
        });
        

      },
      setInitCurrentChat: function (){
        this.setCurrentChat(this.contacts[0].id)
      },
      sentMessage: function(message){
        this.currentChat.messages.push(message);
        this.textMessage = "";
      },

      getCurrentDate: function(){
        return dayjs().format("DD/MM/YYYY HH:mm");
      },
      checkInputText: function(text){

        if( text != ""){

            this.sentMessage({
                date: this.getCurrentDate(),
                message: text,
                status: 'sent'
            })
        }
      }
      
    },
    created: function (){
      this.setInitCurrentChat();
     }
   
  })

  