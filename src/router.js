/* eslint global-require: 0 */
export default function (router) {
    router.map({
        '/': {
            name: 'foo',
            component: require('./components/Foo.vue'),
        },
        '/bar': {
            name: 'bar',
            // 按需加载
            component: function asyncBar(resolve) {
                require(['./components/Bar.vue'], resolve);
            },
        },
    });
}
