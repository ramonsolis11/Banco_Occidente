import PropTypes from 'prop-types';

function DataTable({ data }) {
    function exportToCSV() {
        if (!data || data.length === 0) {
            alert("No data available to export");
            return;
        }

        const csvRows = [];
        const headers = Object.keys(data[0]);
        csvRows.push(headers.join(","));

        for (const row of data) {
            const values = headers.map((header) => {
                const escaped = ("" + row[header]).replace(/"/g, '\\"');
                return `"${escaped}"`;
            });
            csvRows.push(values.join(","));
        }

        const csvData = csvRows.join("\n");
        const blob = new Blob([csvData], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.setAttribute("hidden", "");
        a.setAttribute("href", url);
        a.setAttribute("download", "data.csv");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div>
            <button onClick={exportToCSV}>Export to CSV</button>
            {/* otros elementos del componente */}
        </div>
    );
}

DataTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DataTable;
