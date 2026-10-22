/**
 * Google Analytics 4 (GA4) CLI Client for Diyetisyen Fatmanur Aydın
 * Uses Service Account credentials to query GA4 Data API v1beta directly.
 */

const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const PROPERTY_ID = process.env.GA4_PROPERTY_ID || '559469783';
const KEY_PATH = process.env.GA4_KEY_PATH || 'C:/Users/muhammedemin.aydin/.gemini/ga4-service-account.json';

if (!fs.existsSync(KEY_PATH)) {
  console.error(`GA4 Key file not found at ${KEY_PATH}`);
  process.exit(1);
}

const key = JSON.parse(fs.readFileSync(KEY_PATH, 'utf8'));

function getGoogleToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claim = {
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };
  const b64 = obj => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = b64(header) + '.' + b64(claim);
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(unsigned);
  const signature = sign.sign(key.private_key, 'base64url');
  return unsigned + '.' + signature;
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function getAccessToken() {
  const jwt = getGoogleToken();
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });
  const data = await res.json();
  if (!data.access_token) {
    throw new Error('Failed to get token: ' + JSON.stringify(data));
  }
  return data.access_token;
}

async function runReport(body) {
  const token = await getAccessToken();
  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return await res.json();
}

async function runRealtimeReport(body) {
  const token = await getAccessToken();
  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runRealtimeReport`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return await res.json();
}

async function main() {
  const mode = process.argv[2] || 'overview';

  if (mode === 'realtime') {
    const data = await runRealtimeReport({
      metrics: [{ name: 'activeUsers' }],
      dimensions: [{ name: 'country' }, { name: 'city' }, { name: 'deviceCategory' }]
    });
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (mode === 'sources') {
    const data = await runReport({
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      metrics: [{ name: 'activeUsers' }, { name: 'sessions' }],
      dimensions: [{ name: 'sessionSource' }, { name: 'sessionMedium' }]
    });
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (mode === 'pages') {
    const data = await runReport({
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }, { name: 'averageSessionDuration' }],
      dimensions: [{ name: 'pagePathPlusQueryString' }, { name: 'pageTitle' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }]
    });
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (mode === 'events') {
    const data = await runReport({
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      metrics: [{ name: 'eventCount' }, { name: 'activeUsers' }],
      dimensions: [{ name: 'eventName' }],
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }]
    });
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (mode === 'locations') {
    const data = await runReport({
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      metrics: [{ name: 'activeUsers' }, { name: 'screenPageViews' }],
      dimensions: [{ name: 'country' }, { name: 'city' }],
      orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }]
    });
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (mode === 'devices') {
    const data = await runReport({
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      metrics: [{ name: 'activeUsers' }, { name: 'screenPageViews' }],
      dimensions: [{ name: 'deviceCategory' }, { name: 'operatingSystem' }]
    });
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  // Default: Overview
  const data = await runReport({
    dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
    metrics: [
      { name: 'activeUsers' },
      { name: 'newUsers' },
      { name: 'sessions' },
      { name: 'screenPageViews' },
      { name: 'keyEvents' }
    ]
  });
  console.log(JSON.stringify(data, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
