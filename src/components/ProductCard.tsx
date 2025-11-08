import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  gradient: string;
}

export const ProductCard = ({ title, description, image, link, gradient }: ProductCardProps) => {
  return (
    <Link to={link} className="group">
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all shadow-card hover:shadow-glow hover:scale-105 duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute inset-0 ${gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <Button variant="ghost" className="group-hover:text-primary">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Link>
  );
};
