
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface NewsCardProps {
  image: string;
  title: string;
  url: string;
}

const NewsCard = ({ image, title, url }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <Link to={url} className="block">
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-light-300 text-mahatai-dark line-clamp-3 min-h-[4.5rem]">
            {title}
          </h3>
          <Link 
            to={url} 
            className="text-mahatai-primary hover:underline block mt-2"
          >
            อ่านต่อ
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default NewsCard;
