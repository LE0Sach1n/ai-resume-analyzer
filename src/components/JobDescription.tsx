
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export const JobDescription = () => {
  const [description, setDescription] = useState('');

  return (
    <Card className="w-full max-w-2xl mx-auto p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Job Description</h3>
        <Textarea
          placeholder="Paste the job description here..."
          className="min-h-[200px] resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button className="w-full" disabled={!description}>
          <Search className="w-4 h-4 mr-2" />
          Analyze Match
        </Button>
      </div>
    </Card>
  );
};
