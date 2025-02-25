
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface AnalysisResultProps {
  matchScore: number;
  missingSkills: string[];
  suggestions: string[];
}

export const AnalysisResult = ({ matchScore, missingSkills, suggestions }: AnalysisResultProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto animate-fadeIn">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Match Score
          <span className="text-2xl font-bold text-primary">{matchScore}%</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Progress value={matchScore} className="h-2" />
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold">Missing Skills</h4>
          <ul className="list-disc list-inside space-y-1">
            {missingSkills.map((skill, index) => (
              <li key={index} className="text-muted-foreground">{skill}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Suggestions for Improvement</h4>
          <ul className="list-disc list-inside space-y-1">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-muted-foreground">{suggestion}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
