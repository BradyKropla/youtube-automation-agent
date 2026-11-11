#!/usr/bin/env node
// Loads a channel preset (profile + autonomous operator strategy) into a running
// dashboard server. Usage:
//   npm run channel:apply -- channels/first-time-dad/channel.json
//   npm run channel:apply -- channels/first-time-dad/channel.json --dry-run
// The strategy is saved as a draft. Activate it from the Autonomous operator panel
// once you have reviewed it.
require('dotenv').config();
const fs = require('fs');
const path = require('path');

function fail(message) {
  console.error(`✗ ${message}`);
  process.exit(1);
}

function checkLength(label, value, max) {
  if (value !== undefined && String(value).length > max) {
    fail(`${label} is ${String(value).length} characters; the server accepts at most ${max}`);
  }
}

function validatePreset(preset) {
  if (!preset || typeof preset !== 'object') fail('Preset must be a JSON object');
  const { profile = {}, strategy } = preset;
  for (const field of ['channelName', 'goal', 'targetAudience', 'brandVoice', 'defaultStyle', 'callToAction', 'visualStyle', 'timezone']) {
    checkLength(`profile.${field}`, profile[field], 500);
  }
  if (!strategy) fail('Preset needs a "strategy" object');
  if (!strategy.objective || !strategy.audience) fail('strategy.objective and strategy.audience are required');
  checkLength('strategy.objective', strategy.objective, 1000);
  checkLength('strategy.audience', strategy.audience, 500);
  checkLength('strategy.valueProposition', strategy.valueProposition, 1000);
  checkLength('strategy.constraints', strategy.constraints, 2000);
  checkLength('strategy.successMetric', strategy.successMetric, 300);
  const pillars = strategy.contentPillars;
  if (!Array.isArray(pillars) || !pillars.length || pillars.length > 8) fail('strategy.contentPillars needs 1 to 8 entries');
  pillars.forEach((pillar, index) => checkLength(`strategy.contentPillars[${index}]`, pillar, 100));
}

async function put(baseUrl, route, body) {
  const headers = { 'Content-Type': 'application/json' };
  if (process.env.API_KEY) headers['x-api-key'] = process.env.API_KEY;
  const response = await fetch(`${baseUrl}${route}`, { method: 'PUT', headers, body: JSON.stringify(body) });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.success === false) {
    fail(`${route} returned ${response.status}: ${payload.error || 'unknown error'}`);
  }
  return payload.result;
}

async function main() {
  const args = process.argv.slice(2);
  const file = args.find(arg => !arg.startsWith('--'));
  if (!file) fail('Pass the preset path, e.g. npm run channel:apply -- channels/first-time-dad/channel.json');
  const preset = JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
  validatePreset(preset);
  console.log(`✓ Preset "${preset.name || file}" passed validation`);
  if (args.includes('--dry-run')) return;

  const host = !process.env.HOST || process.env.HOST === '0.0.0.0' ? '127.0.0.1' : process.env.HOST;
  const baseUrl = process.env.DASHBOARD_URL || `http://${host}:${process.env.PORT || 3456}`;
  try {
    await put(baseUrl, '/api/profile', preset.profile || {});
  } catch (error) {
    fail(`Could not reach the dashboard at ${baseUrl}. Start it with npm start first. (${error.message})`);
  }
  console.log('✓ Channel profile saved');
  await put(baseUrl, '/api/operator/strategy', { ...preset.strategy, status: 'draft' });
  console.log('✓ Channel strategy saved as a draft');
  console.log(`Open ${baseUrl}, review the Autonomous operator panel, then choose "Activate & run now".`);
}

main().catch(error => fail(error.message));
