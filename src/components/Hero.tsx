
import { Brain } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="text-center space-y-6 py-12 px-4">
      <div className="flex justify-center">
        <Brain className="w-16 h-16 text-primary animate-float" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold">
        Resume AI Analyzer
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Upload your resume and job description to get instant AI-powered analysis, matching scores, and personalized recommendations.
      </p>
    </div>
  );
};
