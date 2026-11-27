
const shimmer = "animate-pulse bg-gray-200";

export function ProductCardSkeleton({
  imageHeight = "h-20",
  rows = 2,
  rowWidths = ["65%", "45%"],
  showAvatar = true,
}) {
  return (
    <div className="min-w-0">
      {/* Image Placeholder */}
      <div className={`${shimmer} ${imageHeight} w-full rounded-sm`} />

      {/* Details */}
      <div className="mt-2 flex items-start gap-2">
        {/* Avatar */}
        {showAvatar && (
          <div className={`${shimmer} h-3 w-3 shrink-0 rounded-full`} />
        )}

        {/* Text Lines */}
        <div className="flex-1 space-y-1">
          {Array.from({ length: rows }).map((_, index) => (
            <div
              key={index}
              className={`${shimmer} h-1.5 rounded-full`}
              style={{
                width: rowWidths[index % rowWidths.length],
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductGridSkeleton({
  cardCount = 8,
  columns = 4,
  rows = 2,
  imageHeight = "h-20",
  rowWidths = ["65%", "45%"],
  showAvatar = true,
}) {
  return (
    <div
      className="grid gap-x-2 gap-y-4"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
      aria-busy="true"
      aria-label="Loading products"
    >
      {Array.from({ length: cardCount }).map((_, index) => (
        <ProductCardSkeleton
          key={index}
          imageHeight={imageHeight}
          rows={rows}
          rowWidths={rowWidths}
          showAvatar={showAvatar}
        />
      ))}
    </div>
  );
}

//use it like below

{/* <ProductGridSkeleton
  cardCount={6}
  columns={3}
  rows={3}
  imageHeight="h-32"
/>


<ProductGridSkeleton
  cardCount={8}
  columns={4}
  showAvatar={false}
/> */}