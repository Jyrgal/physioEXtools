import { Popover, Transition } from "@headlessui/react";
import { Button } from "components/button";
import { Fragment, memo, useState } from "react";
import {
  convertTitleCaseToURL,
  removePunctuation,
  removeSpacesAndToLowerCase,
} from "utils";
import { ChartBarIcon } from "@heroicons/react/outline";
import { useAssessment } from "contexts/assessment";
import { IAssessment } from "types/assessment";

export interface AssessmentOption {
  title: string;
  orientation: string;
  type: string;
  categories: string[];
  areas: string[];
  topics: string[];
  subTopics: string[];
  tags: string[];
}

export interface SearchOption {
  title: string;
  description?: string;
  icon?: JSX.Element;
}

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

// const solutions = [
//   {
//     name: 'Analytics',
//     description:
//       'Get a better understanding of where your traffic is coming from.',
//     href: '#',
//     icon: ChartBarIcon,
//   },
//   {
//     name: 'Engagement',
//     description: 'Speak directly to your customers in a more meaningful way.',
//     href: '#',
//     icon: CursorClickIcon,
//   },
//   {
//     name: 'Security',
//     description: "Your customers' data will be safe and secure.",
//     href: '#',
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: 'Integrations',
//     description: "Connect with third-party tools that you're already using.",
//     href: '#',
//     icon: ViewGridIcon,
//   },
//   {
//     name: 'Automations',
//     description:
//       'Build strategic funnels that will drive your customers to convert',
//     href: '#',
//     icon: RefreshIcon,
//   },
// ];
// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon },
// ];
// const resources = [
//   {
//     name: 'Help Center',
//     description:
//       'Get all of your questions answered in our forums or contact support.',
//     href: '#',
//     icon: SupportIcon,
//   },
//   {
//     name: 'Guides',
//     description:
//       'Learn how to maximize our platform to get the most out of it.',
//     href: '#',
//     icon: BookmarkAltIcon,
//   },
//   {
//     name: 'Events',
//     description:
//       'See what meet-ups and other events we might be planning near you.',
//     href: '#',
//     icon: CalendarIcon,
//   },
//   {
//     name: 'Security',
//     description: 'Understand how we take your privacy seriously.',
//     href: '#',
//     icon: ShieldCheckIcon,
//   },
// ];

export const SearchBar = memo(
  ({
    // items,
    filters = [""],
    onClick,
  }: {
    // items?: string[];
    filters?: string[];
    onClick?: (value?: string) => void;
  }) => {
    const [searchText, setSearchText] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [filteredSearch, setFilteredSearch] = useState<IAssessment[]>();
    const { assessments } = useAssessment();
    const searchArray = assessments.map((assessment) => {
      const title = removeSpacesAndToLowerCase(
        removePunctuation(assessment.title || "")
      );
      const orientation = removeSpacesAndToLowerCase(
        removePunctuation(assessment.orientation || "")
      );
      const categories = removeSpacesAndToLowerCase(
        assessment.categories?.join("") || ""
      );
      const areas = removeSpacesAndToLowerCase(
        removePunctuation(assessment.areas?.join("") || "")
      );
      const topics = removeSpacesAndToLowerCase(
        removePunctuation(assessment.topics?.join("") || "")
      );
      const subTopics = removeSpacesAndToLowerCase(
        removePunctuation(assessment.subTopics?.join("") || "")
      );
      const tags = removeSpacesAndToLowerCase(
        removePunctuation(assessment.tags?.join("") || "")
      );
      return (
        title + orientation + categories + areas + topics + subTopics + tags
      );
    });

    return (
      <form>
        <Popover.Group>
          <Popover className="relative bg-white">
            {() => (
              <>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search for title, category & more"
                    required
                    onChange={(e) => {
                      e.preventDefault();
                      setSearchText(
                        removeSpacesAndToLowerCase(
                          removePunctuation(e.target.value)
                        )
                      );
                      const options: IAssessment[] = [];
                      searchArray.map((value, index) => {
                        if (
                          value.includes(
                            removeSpacesAndToLowerCase(
                              removePunctuation(e.target.value)
                            ) +
                              removeSpacesAndToLowerCase(
                                removePunctuation(filters.join(""))
                              )
                          )
                        ) {
                          options.push(assessments[index]);
                        }
                        return value;
                      });
                      setFilteredSearch(options);
                    }}
                    onBlur={(e) => {
                      e.preventDefault();
                      setShowSearch(false);
                    }}
                    onFocus={(e) => {
                      e.preventDefault();
                      setShowSearch(true);
                    }}
                  />
                  {/* <button
          type='submit'
          className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'
        >
          Search
        </button> */}
                  <Button
                    value="Search"
                    type="submit"
                    styles="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    onClick={() => {
                      const options: IAssessment[] = [];
                      searchArray.map((value, index) => {
                        if (
                          value.includes(
                            searchText +
                              removeSpacesAndToLowerCase(
                                removePunctuation(filters.join(""))
                              )
                          )
                        ) {
                          options.push(assessments[index]);
                        }
                        return value;
                      });
                      setFilteredSearch(options);
                    }}
                  />
                  <Popover.Button
                    onClick={() => {
                      const options: IAssessment[] = [];
                      searchArray.map((value, index) => {
                        if (
                          value.includes(
                            searchText +
                              removeSpacesAndToLowerCase(
                                removePunctuation(filters.join(""))
                              )
                          )
                        ) {
                          options.push(assessments[index]);
                        }
                        return value;
                      });
                      setFilteredSearch(options);
                    }}
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    <span>Search</span>
                  </Popover.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                  show={showSearch}
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-full mx-auto sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 max-h-96 overflow-y-scroll">
                        {filteredSearch?.map((item) => (
                          <button
                            key={item.title}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            onClick={() => {
                              onClick &&
                                onClick(
                                  convertTitleCaseToURL(item.title || "")
                                );
                            }}
                          >
                            <ChartBarIcon
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <div className="ml-4 flex-col justify-start">
                              <p className="text-base font-medium text-gray-900">
                                {item.title}
                              </p>
                              <p className="mt-1 text-sm text-gray-500 text-left">
                                {item.orientation}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
      </form>
    );
  }
);
