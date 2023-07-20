import { HTMLAttributes } from 'react';
import { cn } from '@fredricw/components';

export const Page = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('w-full min-h-[400px]', className)} {...props} />;
};
