import { Typography, Container, Box } from "@mui/material";
import DashboardCard from "../../components/dashboardCard.tsx";
import dashboardService from "../../services/dashboardService.tsx";
import { useEffect, useState } from "react";

type Props = {};

export default function Home({}: Props) {
  const [dailyIncome, setDailyIncome] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [yesterdayIncome, setYesterdayIncome] = useState(0);
  const [weeklyIncome, setWeeklyIncome] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const getDashboardInfo = async () => {
        const dailyIncome = await dashboardService.getDailyIncome();
        const monthlyIncome = await dashboardService.getMonthlyIncome();
        const yesterdayIncome = await dashboardService.getYesterdayIncome();
        const weeklyIncome = await dashboardService.getWeeklyIncome();

        if (dailyIncome.data.success) setDailyIncome(dailyIncome.data.data);
        if (monthlyIncome.data.success) {
          setMonthlyIncome(monthlyIncome.data.data);
        }
        if (yesterdayIncome.data.success) {
          setYesterdayIncome(yesterdayIncome.data.data);
        }
        if (weeklyIncome.data.success) setWeeklyIncome(weeklyIncome.data.data);
        setLoading(false);
      };

      getDashboardInfo();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <Box sx={{ paddingY: "50px", backgroundColor: "#d3d3d3", height: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h4" gutterBottom>
          Overview
        </Typography>
        <Box display="flex">
          <DashboardCard
            title={"Daily Income"}
            amount={dailyIncome}
            color={"#008000"}
            loading={loading}
          />

          <DashboardCard
            title={"Yesterday Income"}
            amount={yesterdayIncome}
            color={"#FFC000"}
            loading={loading}
          />

          <DashboardCard
            title={"Weekly Income"}
            amount={weeklyIncome}
            color={"#008000"}
            loading={loading}
          />

          <DashboardCard
            title={"Monthly Income"}
            amount={monthlyIncome}
            color={"#008000"}
            loading={loading}
          />
        </Box>
      </Container>
    </Box>
  );
}
