import { Container, Typography } from "@mui/material";
import SaleTableReport from "../../components/saleTableReport";
import reportService from "../../services/reportService";
import { useEffect, useState } from "react";

type Props = {};

const dailyReport = ({}: Props) => {
  const [dailyReport, setDailyReport] = useState<any[]>([]);

  useEffect(() => {
    try {
      const getDailyReport = async () => {
        const dailyReport = await reportService.getDailyReport();

        if (dailyReport.data.success) setDailyReport(dailyReport.data.data);
      };
      getDailyReport();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Daily Sale Report</Typography>
      <SaleTableReport dataList={dailyReport} />
    </Container>
  );
};

export default dailyReport;
