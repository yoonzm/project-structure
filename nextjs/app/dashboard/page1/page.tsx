'use client'

import {toast} from "../../utils/toast";
import {sayHello} from "@/app/dashboard/page1/utils/say-hello";
import {add} from "@/app/dashboard/page1/utils/add";
import Image from "next/image";
import {DashboardHeader} from "@/app/dashboard/components/dashboard-header";
import {dashboardDataFormat} from "@/app/dashboard/utils/dashboard-data-format";
import {useDashboardData} from "@/app/dashboard/hooks/use-dashboard-data";
import {usePage1Data} from "@/app/dashboard/page1/hooks/use-page1-data";

export default function Page() {

    usePage1Data();

    useDashboardData();

    dashboardDataFormat();

    return (
        <>
            <DashboardHeader/>
            <h1>Hello, Dashboard Page1!</h1>
            <button onClick={() => {
                toast('哈哈哈');
            }}>
                toast
            </button>
            <button onClick={() => {
                sayHello()
            }}>
                sayHello
            </button>
            <button onClick={() => {
                add(1, 2)
            }}>
                add
            </button>
            <Image alt='avatar' src={require('./images/avatar.png')}/>
        </>
    )
}
