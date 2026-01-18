// Example: Extract items and links
// We return 3 items: 2 with the same ID to demonstrate 'RUN' deduplication
return {
  items: [
    { id: "item-1", dedupe: "RUN", data: { title: document.title, val: "This is from repo" } },
    { id: "item-1", dedupe: "RUN", data: { title: document.title, val: "Duplicate (will be filtered)" } },
    { id: "item-2", dedupe: "RUN", data: { title: document.title, val: "Second Unique" } }
  ],
  links: []
};