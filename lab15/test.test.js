import { filterByName } from "./utils.js";

function assert(condition, msg) {
    if (!condition) throw new Error("TEST FAILED: " + msg);
}

(function runTests() {
    console.log("Running tests...");

    const sample = [
        { name: "Иван" },
        { name: "Иванна" },
        { name: "Петр" }
    ];

    const result = filterByName(sample, "иван");

    assert(result.length === 2, "Должно найти 2 студента");
    assert(result[0].name === "Иван", "Первый — Иван");
    assert(result[1].name === "Иванна", "Второй — Иванна");

    console.log("%cAll tests passed!", "color: green; font-weight: bold");
})();
