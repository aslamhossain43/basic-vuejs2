import Vue from "vue";
import Router from "vue-router";

// import HelloWorld from "./components/HelloWorld.vue";
import CustomComponent from "./components/CustomComponent.vue"
import ChildRouter from "./child/router"

Vue.use(Router);

var router = new Router({
    mode: "history",
    base:"/",
    routes: [
        {
            path: "/h",
            component: {
                name:"Children",
                render(c) {
                  return c("router-view");
                }
              },
            children: ChildRouter
        },
        {
            path: "/c1",
            name:"CustomComponent",
            component: CustomComponent
        }
    ]
});

export default router;