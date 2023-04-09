/**
 * 自定义函数对象的bind方法
 * @param {*} fn
 * @param {*} obj
 * @param  {...any} args
 * @returns
 */
import { call } from './call';

export function bind(fn, obj, ...args) {
    console.log('bind()');
    // 返回一个新函数
    return (...args2) => {
        // 通过call调用原函数, 并指定this为obj, 实参为args与args2
        return call(fn, obj, ...args, ...args2);
    };
}
