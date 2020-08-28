"use strict";

const componentHomeBox = new Vue({
    el: '#home_box',
    name:'Component_Home_Box',
    data: {
        msg: "",
        box_msg: [{
            'msg': "Waiting for connection",
            'time': moment().format('YYYY, MMM D H:m'),
            'type': 'tag'
        }],
        view_form: false
    },
    created() {
        this.startSocket();
    },
    methods: {
        sendMsg: function(e) {
            socket.emit('newMsg', this.msg, (res) => {
                this.addMsg({
                    'msg': this.msg,
                    'time': moment().format('YYYY, MMM D H:m'),
                    'type': 'msg_i'
                });

                this.addMsg({
                    'msg': res,
                    'time': moment().format('YYYY, MMM D H:m'),
                    'type': 'msg_you'
                });
            });

            e.preventDefault();
        },
        startSocket: function() {
            const self = this;
            socket.on('connect', function(io) {
                self.view_form = true;
                self.addMsg({
                    'msg': "Open chat",
                    'time': moment().format('YYYY, MMM D H:m'),
                    'type': 'tag'
                });
            });
        },
        addMsg: function(obj) {
            this.box_msg.push(obj);
        }
    }
});