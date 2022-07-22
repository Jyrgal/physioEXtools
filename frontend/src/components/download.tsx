import { memo } from 'react';
import { Loading } from 'components/loading';

export const Download = memo(
  ({
    download,
    url,
    loading,
    onClick,
  }: {
    download: string;
    url: string;
    loading: boolean;
    onClick?: () => void;
  }) => (
    <a
      onClick={onClick}
      href={url || ''}
      download={download}
      className="mt-10 self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 w-24"
    >
      {url || loading ? 'Download' : <Loading />}
    </a>
  ),
);
