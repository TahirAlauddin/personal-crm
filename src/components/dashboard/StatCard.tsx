import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


type StatCard = {
  title: string;
  value: number;
};
export default function StatCard({ title, value }: StatCard) {
  return (
    <Card className="m-6 p-4 bg-gray-200 rounded shadow min-w-[200px]">
      <CardHeader className="font-bold text-xl ">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{value}</p>
      </CardContent>
    </Card>
  );
}
