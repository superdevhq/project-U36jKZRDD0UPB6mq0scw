
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingSpinner = ({ size = "md", className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={cn(
          "relative animate-spin rounded-full border-4 border-muted border-t-primary",
          sizeClasses[size],
          className
        )}
      >
        <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-transparent opacity-20"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
