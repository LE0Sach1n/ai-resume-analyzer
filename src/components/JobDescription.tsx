
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { AnalysisResult } from './AnalysisResult';
import { useToast } from "@/hooks/use-toast";

export const JobDescription = () => {
  const [description, setDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    matchScore: number;
    missingSkills: string[];
    suggestions: string[];
  } | null>(null);
  const { toast } = useToast();

  const analyzeMatch = async () => {
    setIsAnalyzing(true);
    try {
      // Temporary mock analysis - Replace this with actual API call
      const mockResult = {
        matchScore: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
        missingSkills: [
          "React Native development",
          "GraphQL experience",
          "AWS deployment",
        ],
        suggestions: [
          "Highlight any mobile development experience you have",
          "Add specific examples of database management",
          "Include metrics and quantifiable achievements",
          "Add a technical skills section",
        ],
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setAnalysisResult(mockResult);
      
      toast({
        title: "Analysis Complete",
        description: "Your resume has been analyzed successfully!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to analyze resume. Please try again.",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="w-full max-w-2xl mx-auto p-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Job Description</h3>
          <Textarea
            placeholder="Paste the job description here..."
            className="min-h-[200px] resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button 
            className="w-full" 
            disabled={!description || isAnalyzing}
            onClick={analyzeMatch}
          >
            <Search className="w-4 h-4 mr-2" />
            {isAnalyzing ? "Analyzing..." : "Analyze Match"}
          </Button>
        </div>
      </Card>

      {analysisResult && <AnalysisResult {...analysisResult} />}
    </div>
  );
};
