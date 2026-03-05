const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const seatsInput = document.getElementById("seatsPerBench");
const capacityDisplay = document.getElementById("capacity");

function calculateCapacity() {
    const rows = parseInt(rowsInput.value) || 0;
    const cols = parseInt(colsInput.value) || 0;
    const seats = parseInt(seatsInput.value) || 0;

    capacityDisplay.textContent = rows * cols * seats;
}

rowsInput?.addEventListener("input", calculateCapacity);
colsInput?.addEventListener("input", calculateCapacity);
seatsInput?.addEventListener("change", calculateCapacity);

document.getElementById("generateBtn")?.addEventListener("click", function() {
    this.innerHTML = "Generating...";
    this.disabled = true;
});
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}
function collapseSidebar() {
    document.body.classList.toggle("sidebar-collapsed");
}