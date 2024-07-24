import {DashboardHeader} from "@/app/dashboard/components/dashboard-header";
import {dashboardDataFormat} from "@/app/dashboard/utils/dashboard-data-format";
import {useDashboardData} from "@/app/dashboard/hooks/use-dashboard-data";

export default function Page() {

    useDashboardData();
    dashboardDataFormat();

    return (
        <>
            <DashboardHeader/>
            <h1>Hello, Dashboard Page2!</h1>
        </>
    )
}
