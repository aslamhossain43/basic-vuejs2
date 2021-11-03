export default [
    {
        path: "/",
        name: "hello",
        component: () => import(/* webpackChunkName: "child" */ "../components/HelloWorld.vue")
    },
    {
        path: "ch",
        name: "ChildComponent",
        component: () => import(/* webpackChunkName: "child" */ "./components/ChildComponent.vue")
    }
]