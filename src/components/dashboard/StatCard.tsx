import { Mail, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
  value: string;
};
export default function StatCard({ title, value }: StatCard) {
  return (
    <Card className="p-2 border-gray-200 rounded shadow min-w-[200px]">
      <CardHeader className="font-bold text-xl p-2">
        <div className="flex justify-between">
          <Mail color="#727272" className="bg-[#F2F2F2] p-1"></Mail>
          <FontAwesomeIcon width={24} height={24} icon={faArrowRight}></FontAwesomeIcon>
        </div>
      </CardHeader>
      <CardContent className="p-2">
        <p className="text-xs font-normal text-secondaryGray">{title}</p>
        <p className="font-semibold text-xl ">{value}</p>
      </CardContent>
    </Card>
  );
}
