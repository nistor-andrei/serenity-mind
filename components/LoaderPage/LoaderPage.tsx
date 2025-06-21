type LoaderPageProps = {
  text?: string;
};

export const LoaderPage = ({ text = "Loading..." }: LoaderPageProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-violet" />
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
};
