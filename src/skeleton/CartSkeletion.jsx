const shimmer = "animate-pulse bg-gray-200";

export function CartCardSkeleton({
  rows = 3,
  imagePosition = "right",
  imageShape = "square",
  rowWidths = ["100%", "55%", "75%"],
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-3 shadow-sm">
      {/* Left Image */}
      {isImageLeft && (
        <div
          className={`${shimmer} h-20 w-20 shrink-0 ${
            imageShape === "circle" ? "rounded-full" : "rounded-md"
          }`}
        />
      )}

      {/* Text Rows */}
      <div className="min-w-0 flex-1 space-y-2">
        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={index}
            className={`${shimmer} h-2.5 rounded`}
            style={{
              width: rowWidths[index % rowWidths.length],
            }}
          />
        ))}
      </div>

      {/* Right Image */}
      {!isImageLeft && (
        <div
          className={`${shimmer} h-20 w-20 shrink-0 ${
            imageShape === "circle" ? "rounded-full" : "rounded-md"
          }`}
        />
      )}
    </div>
  );
}

export default function CartSkeleton({
  cardCount = 6,
  rows = 3,
  columns = 3,
  imageShape = "square",
  imagePosition = "right",
  rowWidths = ["100%", "55%", "75%"],
  alternate = false,
}) {
  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: cardCount }).map((_, index) => {
        const position = alternate
          ? index % 3 === 1
            ? "right"
            : "left"
          : imagePosition;

        return (
          <CartCardSkeleton
            key={index}
            rows={rows}
            imagePosition={position}
            imageShape={imageShape}
            rowWidths={rowWidths}
          />
        );
      })}
    </div>
  );
}

//use it like

{
  /* <CartSkeleton
  cardCount={9}
  rows={4}
  columns={3}
  imagePosition="right"
  imageShape="square"
/> */
}
