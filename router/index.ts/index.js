import { createRouter, createWebHistory } from "core-js/core/object";
import  ReportTable from "@/components/ReportTable.vue"

const routes =[
    { path: "/", component: ReportTable}
];

const router = createRouter({
    history: createWebHistory(),
});

export default router;