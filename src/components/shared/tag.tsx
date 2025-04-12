const Tag = ({ title }: { title: string }) => {
  return (
    <div className="text-muted-foreground gap-1 rounded-full border border-gray-800 px-3 py-1 text-sm">
      <span>{title}</span>
    </div>
  );
};

export default Tag;
