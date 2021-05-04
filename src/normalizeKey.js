export default function normalizeKey(key) {
    let normalized = [...key].map(i => i === i.toLowerCase()? i : `_${i.toLowerCase()}`).join("").replace(/\s+/g, '_');
    return normalized[0] === "_" ? normalized.slice(1) : normalized;
}


