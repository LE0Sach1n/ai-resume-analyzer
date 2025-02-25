
import { Hero } from '@/components/Hero';
import { UploadZone } from '@/components/UploadZone';
import { JobDescription } from '@/components/JobDescription';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-8 space-y-12">
        <Hero />
        <div className="grid gap-8 animate-fadeIn">
          <UploadZone />
          <JobDescription />
        </div>
      </div>
    </div>
  );
};

export default Index;
