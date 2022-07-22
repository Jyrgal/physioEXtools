import { memo } from 'react';

export const Separator = memo(() => (
  <div className="relative flex w-full items-center py-5 px-4">
    <div className="flex-grow border-t border-gray-200" />
  </div>
));
