interface IProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ className, onClick, children }: IProps) {
  return (
    <button
      className={`text-gray-100 px-8 py-2 bg-indigo-600 text-base font-medium rounded-md shadow-md transition hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-default focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-offset-white  focus:ring-opacity-80 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
