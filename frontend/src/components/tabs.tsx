import { memo } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Tabs = memo(
  ({
    values,
    styles,
    onClick,
  }: {
    values: string[];
    styles?: string;
    onClick: (value: string) => void;
  }) => (
    // const [categories] = useState({
    //   Never: [
    //     {
    //       id: 1,
    //       title: 'Does drinking coffee make you smarter?',
    //       date: '5h ago',
    //       commentCount: 5,
    //       shareCount: 2,
    //     },
    //     {
    //       id: 2,
    //       title: "So you've bought coffee... now what?",
    //       date: '2h ago',
    //       commentCount: 3,
    //       shareCount: 2,
    //     },
    //   ],
    //   Rarely: [
    //     {
    //       id: 1,
    //       title: 'Is tech making coffee better or worse?',
    //       date: 'Jan 7',
    //       commentCount: 29,
    //       shareCount: 16,
    //     },
    //     {
    //       id: 2,
    //       title: 'The most innovative things happening in coffee',
    //       date: 'Mar 19',
    //       commentCount: 24,
    //       shareCount: 12,
    //     },
    //   ],
    //   Sometimes: [
    //     {
    //       id: 1,
    //       title: 'Ask Me Anything: 10 answers to your questions about coffee',
    //       date: '2d ago',
    //       commentCount: 9,
    //       shareCount: 5,
    //     },
    //     {
    //       id: 2,
    //       title: "The worst advice we've ever heard about coffee",
    //       date: '4d ago',
    //       commentCount: 1,
    //       shareCount: 2,
    //     },
    //   ],
    //   Often: [
    //     {
    //       id: 1,
    //       title: 'Ask Me Anything: 10 answers to your questions about coffee',
    //       date: '2d ago',
    //       commentCount: 9,
    //       shareCount: 5,
    //     },
    //     {
    //       id: 2,
    //       title: "The worst advice we've ever heard about coffee",
    //       date: '4d ago',
    //       commentCount: 1,
    //       shareCount: 2,
    //     },
    //   ],
    //   Always: [
    //     {
    //       id: 1,
    //       title: 'Ask Me Anything: 10 answers to your questions about coffee',
    //       date: '2d ago',
    //       commentCount: 9,
    //       shareCount: 5,
    //     },
    //     {
    //       id: 2,
    //       title: "The worst advice we've ever heard about coffee",
    //       date: '4d ago',
    //       commentCount: 1,
    //       shareCount: 2,
    //     },
    //   ],
    // });
    <div className={`w-full max-w-md ${styles}`}>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-200 p-1">
          {values.map((value) => (
            <Tab
              key={value}
              className={({ selected }) => classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-600 hover:text-blue-400',
              )}
              onClick={() => onClick(value)}
            >
              {value}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  ),
);
