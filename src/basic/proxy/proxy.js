const sharedPropertyDefinition = {
  enumerable: true,
  configurable: true
}

/**
 * 模拟 vue 底层代理对象的实现
 *
 * @export
 * @param {*} target 要代理的目标对象
 * @param {*} temp 模版
 * @param {*} key 
 */
export default function proxy(target, temp, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return temp[key]
  }
  sharedPropertyDefinition.set = function proxySetter(val) {
    temp[key] = val
    if (!window.isUpdatingChildComponent) {
      console.error(`不可以直接修改：${key}`);
    }
    console.log('val :>> ', val);
    window.isUpdatingChildComponent = false // 全局标识位，表明是否为父组件传递的属性
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}