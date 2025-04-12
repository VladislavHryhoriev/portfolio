const Title = ({ title }: { title: string }) => {
  return (
    <div className="mb-8 text-center">
      <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
        {title}
      </h2>
      <div className="mx-auto h-px w-16 bg-gray-800" />
    </div>
  );
};

export default Title;
