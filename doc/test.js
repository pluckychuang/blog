// 数据劫持
function defineReactive(obj, key, value) {
  observer(value)
  Object.defineProperty(obj, key, {
    get() {
      return value
    },
    set(newValue) {
      if(typeof newValue === 'object') {
        observer(newValue)
      }
      // 通知watcher 更新视图
      update()
      value = newValue
    }
  })
}
// 深度监听
function observer(obj) {
  if(Array.isArray(obj)) {
    // 数组单独处理
    return observerArray(obj)
  }
  if(typeof obj !== 'object') {
    return 
  }
  for(let key in obj) {
    defineReactive(obj, key, obj[key])
  }
}
// 监听数组
function observerArray(arr) {
  // 创建一个原型对象 其原型指向数组原型
  let proto = Object.create(Array.prototype)
  let methods = ['push', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'splice']
  methods.forEach(method => {
    proto[method] = function() {
      update()
      Array.prototype[method].call(this, ...arguments)
    }
  })
  arr.__proto__ = proto
}
function update() {
  // 更新视图
  setTimeout(() => console.log('更新视图'), 0)
}

// 测试用例
let obj = [1, 2, 3]
observer(obj)
obj.push(4)
console.log(obj)