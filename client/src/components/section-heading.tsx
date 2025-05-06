import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  highlightedWord: string;
  alignment: 'left' | 'center' | 'right';
}

export default function SectionHeading({ title, highlightedWord, alignment }: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const dividerClasses = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  };
  
  return (
    <div className={cn("mb-6", alignmentClasses[alignment])}>
      <h2 className="text-3xl md:text-4xl font-playfair font-bold">
        <span className="text-white">{title}</span>{' '}
        <span className="text-primary">{highlightedWord}</span>
      </h2>
      <div className={cn("w-20 h-1 bg-primary mt-6 mb-8", dividerClasses[alignment])}></div>
    </div>
  );
}
