
const shimmer = "animate-pulse bg-gray-200";

export function ProfileCardSkeleton({
  avatarSize = "h-20 w-20",
  rows = 2,
  button = true,
  border = true,
}) {
  return (
    <div
      className={`flex flex-col items-center gap-3 rounded-lg bg-white p-4 ${
        border ? "border border-gray-200" : ""
      }`}
    >
      {/* Avatar */}
      <div className={`${shimmer} ${avatarSize} rounded-full`} />

      {/* Text placeholders */}
      <div className="w-full space-y-2">
        {Array.from({ length: rows }).map((_, index) => (
          <div
            key={index}
            className={`${shimmer} h-5 rounded-sm ${
              index === 0 ? "w-full" : "w-full"
            }`}
          />
        ))}
      </div>

      {/* Button */}
      {button && (
        <div className={`${shimmer} h-6 w-1/2 rounded-full`} />
      )}
    </div>
  );
}

export default function ProfileGridSkeleton({
  cardCount = 4,
  columns = 4,
  avatarSize = "h-20 w-20",
  rows = 2,
  button = true,
  border = true,
}) {
  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
      aria-busy="true"
      aria-label="Loading profiles"
    >
      {Array.from({ length: cardCount }).map((_, index) => (
        <ProfileCardSkeleton
          key={index}
          avatarSize={avatarSize}
          rows={rows}
          button={button}
          border={border}
        />
      ))}
    </div>
  );
}

//use it like below

{/* <ProfileGridSkeleton
  cardCount={4}
  columns={4}
  button={false}
  border={false}
/>


<ProfileGridSkeleton
  cardCount={6}
  columns={3}
  rows={3}
/> */}