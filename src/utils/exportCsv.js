const COLUMNS = [
  ["Name", "name"],
  ["Code", "code"],
  ["Role", "role"],
  ["Department", "dept"],
  ["Join Date", "joined"],
  ["Status", "status"],
  ["Location", "location"],
];

const escapeCsvValue = (value) => {
  const text = value == null ? "" : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

export function exportCsv(rows, filename) {
  const header = COLUMNS.map(([label]) => escapeCsvValue(label)).join(",");
  const records = rows.map((row) =>
    COLUMNS.map(([, key]) => escapeCsvValue(row[key])).join(",")
  );
  const csv = `\uFEFF${[header, ...records].join("\r\n")}`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}
