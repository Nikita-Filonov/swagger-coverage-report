import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

it('embeds report JSON without interpreting HTML or replacement-string characters', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'swagger-report-state-'));
  try {
    fs.mkdirSync(path.join(root, 'scripts'));
    fs.mkdirSync(path.join(root, 'state'));
    fs.copyFileSync('scripts/load-state.js', path.join(root, 'scripts/load-state.js'));
    fs.writeFileSync(path.join(root, 'package.json'), '{"type":"module"}');
    fs.writeFileSync(
      path.join(root, 'index.html'),
      '<html><script id="state" type="application/json"></script></html>'
    );
    const state = { name: "</script><div>$& $` $' & \\n</div>" };
    fs.writeFileSync(path.join(root, 'state/state.json'), JSON.stringify(state));

    execFileSync(process.execPath, [path.join(root, 'scripts/load-state.js')]);

    const html = fs.readFileSync(path.join(root, 'index.html'), 'utf-8');
    const embedded = html.match(/<script id="state" type="application\/json">([\s\S]*?)<\/script>/)?.[1];
    expect(JSON.parse(embedded || '')).toEqual(state);
    expect(html).not.toContain('<div>');
    expect(html.match(/<\/script>/g)).toHaveLength(1);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});
