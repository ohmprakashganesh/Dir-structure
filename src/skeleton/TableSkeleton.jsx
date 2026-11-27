
const Bar = ({ className = "", style }) => (
  <div className={`rounded bg-gray-200 animate-pulse ${className}`} style={style} />
);

export const TableSkeleton = ({
  headers = [],
  rows = 5,
  showFooter = false,
}) => {
  const columnCount = headers.length;

  // Dynamic grid columns
  const gridColumns = `repeat(${columnCount}, minmax(0, 1fr))`;

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <div className="min-w-[760px]">

        {/* Table Header */}
        <div
          className="grid gap-4 bg-gray-100 px-4 py-4"
          style={{ gridTemplateColumns: gridColumns }}
        >
          {headers.map((header, index) => (
            <Bar
              key={index}
              className={`h-3 ${
                header.align === "right" ? "ml-auto" : ""
              }`}
              style={{ width: header.width || "65%" }}
            />
          ))}
        </div>

        {/* Table Rows */}
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="grid items-center gap-4 border-t border-gray-100 px-4 py-4"
            style={{ gridTemplateColumns: gridColumns }}
          >
            {headers.map((header, colIndex) => (
              <div
                key={colIndex}
                className={header.align === "right" ? "flex justify-end" : ""}
              >
                <Bar
                  className={`h-4 ${
                    header.type === "badge"
                      ? "h-6 rounded-full"
                      : header.type === "actions"
                      ? "h-8 w-20 rounded-lg"
                      : ""
                  }`}
                  style={{
                    width: header.rowWidth || "70%",
                    ...(header.type === "badge" && {
                      height: 24,
                    }),
                  }}
                />
              </div>
            ))}
          </div>
        ))}

        {/* Optional Footer */}
        {showFooter && (
          <div
            className="grid items-center gap-4 border-t border-gray-300 bg-gray-100 px-4 py-4"
            style={{ gridTemplateColumns: gridColumns }}
          >
            {headers.map((header, index) => (
              <Bar
                key={index}
                className="h-4"
                style={{ width: header.footerWidth || "60%" }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TableSkeleton;



// use it like

// const orderHeaders = [
//   { label: "Order ID", width: "60%", rowWidth: "75%" },
//   { label: "Customer", width: "70%" },
//   { label: "Status", type: "badge", width: "50%" },
//   { label: "Date", width: "55%" },
//   { label: "Amount", align: "right", width: "60%" },
//   { label: "Actions", type: "actions", width: "60%" },
// ];

// function Orders() {
//   const loading = true;

//   if (loading) {
//     return (
//       <TableSkeleton
//         headers={orderHeaders}
//         rows={6}
//         showFooter
//       />
//     );
//   }

//   return <div>Your actual orders table</div>;
// }