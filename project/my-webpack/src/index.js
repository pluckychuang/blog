// 装饰器------
// let a = require('./util/a.js')
// console.log('hello world')
// // @subscriber('assistant_up_message', 'show')
// class ModelComponent{
//     @subscribe('choice_question_message')
//     close() {
//         // todo
//     }
// }
// function subscribe(messageName) {
//     return target => {
//         console.log(messageName);
//     }
// }


// Pubsub监听------
let PubSub = {
    subscribe: function() {}
}
class Loading{
    componentDidMount() {
        //【订阅】接收长链接消息
        //参数(msg_type, (msg_type, msg_data) => {}) 数据已处理冗余层级
        PubSub.subscribe('joinRoom', this.updateData.bind(this));
    }
    updateData(msg_type, msg_data) {}
}