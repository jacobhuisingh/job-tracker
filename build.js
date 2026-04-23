const fs = require('fs');
const path = require('path');

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('Error: SUPABASE_URL and SUPABASE_ANON_KEY environment variables must be set.');
  process.exit(1);
}

let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
html = html.replace(
  "'https://puidoehyimlndayjfvot.supabase.co'",
  `'${url}'`
);
html = html.replace(
  "'sb_publishable_SjzxBWHr0RpXZmDwWOjfHw_0WcsgmY8'",
  `'${key}'`
);

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), html);
console.log('Build complete → dist/index.html');
