/* ================================================================
   OLIVIA UVIPLAIS — UTILITÁRIOS E HELPERS GLOBAIS
   ================================================================ */

'use strict';

function escapeHTML(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

window.escapeHTML = escapeHTML;

function parseDateBR(value) {
  if (!value || value === 'N/A') return new Date(0);
  const [day, month, year] = value.split('/').map(Number);
  return new Date(year, month - 1, day);
}

window.parseDateBR = parseDateBR;

function extractCreditFromPath(path) {
  if (!path) return null;
  const filename = path.split('/').pop().split('\\').pop();
  const matchHandle = filename.match(/@([a-zA-Z0-9_]+)/);
  if (matchHandle) {
    return `@${matchHandle[1]}`;
  }
  const matchCredit = filename.match(/(?:Foto|Credit|Credito|Fotografo)[_-]+([a-zA-Z0-9_]+)/i);
  if (matchCredit) {
    return matchCredit[1].replace(/_/g, ' ');
  }
  return null;
}

window.extractCreditFromPath = extractCreditFromPath;

/* Constantes e Helpers da Agenda */
const AGENDA_MES_INDEX = { Jan: 0, Fev: 1, Mar: 2, Abr: 3, Mai: 4, Jun: 5, Jul: 6, Ago: 7, Set: 8, Out: 9, Nov: 10, Dez: 11 };
window.AGENDA_MES_INDEX = AGENDA_MES_INDEX;

const AGENDA_TIPO_INFO = {
  'Feira':      { cor: 'azul',     icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-7h6v7"/></svg>' },
  'Lançamento': { cor: 'vermelho', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/></svg>' },
  'Evento':     { cor: 'rosa',     icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>' }
};
window.AGENDA_TIPO_INFO = AGENDA_TIPO_INFO;

const AGENDA_ICON_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
const AGENDA_ICON_CALENDAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>';
const AGENDA_ICON_INSTA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>';
const AGENDA_ICON_CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>';

window.AGENDA_ICON_PIN = AGENDA_ICON_PIN;
window.AGENDA_ICON_CALENDAR = AGENDA_ICON_CALENDAR;
window.AGENDA_ICON_INSTA = AGENDA_ICON_INSTA;
window.AGENDA_ICON_CLOCK = AGENDA_ICON_CLOCK;

function getAgendaEventDate(eventItem) {
  const mesIndex = AGENDA_MES_INDEX[eventItem.mes] ?? 0;
  return new Date(Number(eventItem.ano), mesIndex, Number(eventItem.dia));
}
window.getAgendaEventDate = getAgendaEventDate;

function getAgendaStatus(eventDate) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const diffDias = Math.round((eventDate - hoje) / 86400000);

  if (diffDias < 0) return { label: 'Realizado', classe: 'passado' };
  if (diffDias === 0) return { label: 'É hoje!', classe: 'hoje' };
  if (diffDias === 1) return { label: 'Amanhã', classe: 'em-breve' };
  if (diffDias <= 30) return { label: `Em ${diffDias} dias`, classe: 'em-breve' };
  return { label: null, classe: '' };
}
window.getAgendaStatus = getAgendaStatus;

function buildAgendaCalendarLink(eventItem, eventDate) {
  const pad = (n) => String(n).padStart(2, '0');
  let datesParam;

  if (eventItem.horaInicio && eventItem.horaFim) {
    const [hI, mI] = eventItem.horaInicio.split(':');
    const [hF, mF] = eventItem.horaFim.split(':');
    const dataBase = `${eventItem.ano}${pad(AGENDA_MES_INDEX[eventItem.mes] + 1)}${pad(eventItem.dia)}`;
    datesParam = `${dataBase}T${pad(hI)}${pad(mI)}00/${dataBase}T${pad(hF)}${pad(mF)}00`;
  } else {
    const inicio = new Date(eventDate);
    const fim = new Date(eventDate);
    fim.setDate(fim.getDate() + 1);
    const formatar = (d) => d.toISOString().slice(0, 10).replace(/-/g, '');
    datesParam = `${formatar(inicio)}/${formatar(fim)}`;
  }

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${eventItem.tipo}: ${eventItem.titulo}`,
    dates: datesParam,
    details: eventItem.desc,
    location: eventItem.local,
    ...(eventItem.horaInicio && eventItem.horaFim ? { ctz: 'America/Sao_Paulo' } : {})
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
window.buildAgendaCalendarLink = buildAgendaCalendarLink;

function buildAgendaMapsLink(local) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local)}`;
}
window.buildAgendaMapsLink = buildAgendaMapsLink;
