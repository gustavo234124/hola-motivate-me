#!/usr/bin/env node

// Archivo: index.js
// Este script saluda y da una frase motivadora aleatoria

const frases = [
  "¡Tú puedes con esto y más!",
  "Sigue adelante, estás más cerca de lo que crees.",
  "El esfuerzo de hoy será el éxito de mañana.",
  "No te rindas, cada paso cuenta.",
  "Confía en tu proceso, vas excelente."
];

// Elegir frase aleatoria
const frase = frases[Math.floor(Math.random() * frases.length)];

// Mostrar mensaje
console.log("👋 ¡Hola! Espero que estés teniendo un gran día.");
console.log("💪 Mensaje motivador:");
console.log(`👉 "${frase}"`);