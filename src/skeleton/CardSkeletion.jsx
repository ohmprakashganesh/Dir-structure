const shimmer = "animate-pulse bg-gray-200 rounded-md";

function MenuFiltersSkeleton() {
  return (
    <div className="flex gap-3 flex-wrap">
      <div className={`${shimmer} h-10 w-28`} />
      <div className={`${shimmer} h-10 w-28`} />
      <div className={`${shimmer} h-10 w-28`} />
    </div>
  );
}

/* Single menu item skeleton */
export function MenuItemCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className={`${shimmer} h-56 w-full rounded-none`} />

      <div className="flex items-center justify-between px-4 py-3">
        <div className={`${shimmer} h-4 w-20`} />
        <div className={`${shimmer} h-4 w-10`} />
      </div>
    </div>
  );
}

/* Full products skeleton */
export default function ProductsSkeleton({ itemCount = 10 }) {
  return (
    <div className="bg-gray-100 min-h-screen w-full p-6 space-y-6">
      <MenuFiltersSkeleton />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.from({ length: itemCount }).map((_, i) => (
          <MenuItemCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

//make its use like below
//  if (loading) {
//     return <ProductsSkeleton itemCount={10} />;
//   }
