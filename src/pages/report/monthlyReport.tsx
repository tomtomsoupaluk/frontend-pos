import { Container, Typography } from "@mui/material";
import SaleTableReport from "../../components/saleTableReport";
import { useEffect, useState } from "react";
import reportService from "../../services/reportService";

type Props = {};

const monthlyReport = ({}: Props) => {
  const [monthlyReport, setMonthlyReport] = useState<any[]>([]);

  useEffect(() => {
    try {
      const getMonthlyReport = async () => {
        const monthlyReport = await reportService.getMonthlyReport();

        if (monthlyReport.data.success)
          setMonthlyReport(monthlyReport.data.data);
      };
      getMonthlyReport();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Monthly Sale Report</Typography>
      <SaleTableReport dataList={monthlyReport} />
    </Container>
  );
};

export default monthlyReport;
