import { Container, Typography } from "@mui/material";
import SaleTableReport from "../../components/saleTableReport";
import { useEffect, useState } from "react";
import reportService from "../../services/reportService";

type Props = {};

const weeklyReport = ({}: Props) => {
  const [weeklyReport, setWeeklyReport] = useState<any[]>([]);

  useEffect(() => {
    try {
      const getWeeklyReport = async () => {
        const weeklyReport = await reportService.getWeeklyReport();

        if (weeklyReport.data.success) setWeeklyReport(weeklyReport.data.data);
      };
      getWeeklyReport();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Weekly Sale Report</Typography>
      <SaleTableReport dataList={weeklyReport} />
    </Container>
  );
};

export default weeklyReport;
