// src/api/builders.js
export async function getBuilders() {
  const res = await fetch('/api/builders/getBuilders.php');
  return res.json();
}

export async function addBuilder(data) {
  const res = await fetch('/api/builders/addBuilder.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function updateBuilder(id, data) {
  const res = await fetch(`/api/builders/updateBuilder.php?id=${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}