export const SummaryPanel = () => {
  return (
    <div className="flex relative gap-4 rounded-lg p-4 text-foreground bg-muted ">
      <div className="flex flex-col gap-1 w-full">
        <span className="text-muted-foreground">Mocks</span>
        <span className="text-2xl font-bold">4</span>
      </div>

      <div className="min-h-full w-[1px] bg-border shrink-0" />

      <div className="flex flex-col gap-1 w-full">
        <span className="text-muted-foreground">Toggles</span>
        <span className="text-2xl font-bold">2</span>
      </div>

      <div className="min-h-full w-[1px] bg-border shrink-0" />

      <div className="flex flex-col gap-1 w-full">
        <span className="text-muted-foreground">Intercepts</span>
        <span className="text-2xl font-bold">4</span>
      </div>
    </div>
  );
};
