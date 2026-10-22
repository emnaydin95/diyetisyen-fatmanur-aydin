/**
 * GA4 Admin API inspector & configurator
 */
const fs = require('fs');
const crypto = require('crypto');

const PROPERTY_ID = process.env.GA4_PROPERTY_ID || '559469783';
const KEY_PATH = 'C:/Users/muhammedemin.aydin/.gemini/ga4-service-account.json';
const key = JSON.parse(fs.readFileSync(KEY_PATH, 'utf8'));

function getGoogleToken(scope) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claim = {
    iss: key.client_email,
    scope: scope,
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

async function getAccessToken(scope) {
  const jwt = getGoogleToken(scope);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });
  const data = await res.json();
  if (!data.access_token) throw new Error('Token failed: ' + JSON.stringify(data));
  return data.access_token;
}

async function inspect() {
  const token = await getAccessToken('https://www.googleapis.com/auth/analytics.edit https://www.googleapis.com/auth/analytics.readonly');

  console.log('=== 1. PROPERTY DETAILS ===');
  const propRes = await fetch(`https://analyticsadmin.googleapis.com/v1beta/properties/${PROPERTY_ID}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  console.log('Status:', propRes.status);
  const prop = await propRes.json();
  console.log(JSON.stringify(prop, null, 2));

  console.log('=== 2. DATA RETENTION SETTINGS ===');
  const retRes = await fetch(`https://analyticsadmin.googleapis.com/v1beta/properties/${PROPERTY_ID}/dataRetentionSettings`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  console.log('Status:', retRes.status);
  const ret = await retRes.json();
  console.log(JSON.stringify(ret, null, 2));

  console.log('=== 3. DATA STREAMS ===');
  const streamRes = await fetch(`https://analyticsadmin.googleapis.com/v1beta/properties/${PROPERTY_ID}/dataStreams`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  console.log('Status:', streamRes.status);
  const streams = await streamRes.json();
  console.log(JSON.stringify(streams, null, 2));

  console.log('=== 4. KEY EVENTS (CONVERSIONS) ===');
  const convRes = await fetch(`https://analyticsadmin.googleapis.com/v1beta/properties/${PROPERTY_ID}/keyEvents`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  console.log('Status:', convRes.status);
  const conv = await convRes.json();
  console.log(JSON.stringify(conv, null, 2));

  console.log('=== 5. CUSTOM DIMENSIONS ===');
  const dimRes = await fetch(`https://analyticsadmin.googleapis.com/v1beta/properties/${PROPERTY_ID}/customDimensions`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  console.log('Status:', dimRes.status);
  const dims = await dimRes.json();
  console.log(JSON.stringify(dims, null, 2));

  console.log('=== 6. GOOGLE SIGNALS SETTINGS ===');
  const sigRes = await fetch(`https://analyticsadmin.googleapis.com/v1beta/properties/${PROPERTY_ID}/googleSignalsSettings`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  console.log('Status:', sigRes.status);
  const sig = await sigRes.json();
  console.log(JSON.stringify(sig, null, 2));
}

inspect().catch(console.error);
