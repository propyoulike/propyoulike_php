// src/components/BuilderCard.js
export default function BuilderCard({ builder }) {
  return `
    <div class="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <img src="${builder.logo_url}" alt="${builder.name}" class="h-16 mb-2"/>
      <h3 class="text-xl font-bold">${builder.name}</h3>
      <p class="text-gray-600">${builder.description || ''}</p>
    </div>
  `;
}