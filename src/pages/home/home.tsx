import { Typography, Container, Box } from "@mui/material";
import DashboardCard from "../../components/dashboardCard.tsx";

type Props = {};

const dashboardCardData = [
  { id: 1, title: "Daily Income", amount: "3,004,000 LAK", color: "#008000" },
  {
    id: 2,
    title: "Yesterday Income",
    amount: "3,004,000 LAK",
    color: "#FFC000",
  },
  { id: 3, title: "Weekly Income", amount: "3,004,000 LAK", color: "#008000" },
  { id: 4, title: "Monthly Income", amount: "3,004,000 LAK", color: "#008000" },
];

export default function Home({}: Props) {
  return (
    <Box sx={{ paddingY: "50px", backgroundColor: "#d3d3d3", height: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h4" gutterBottom>
          Overview
        </Typography>
        <Box display="flex">
          {dashboardCardData.map((card) => (
            <DashboardCard
              key={card.id}
              title={card.title}
              amount={card.amount}
              color={card.color}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
