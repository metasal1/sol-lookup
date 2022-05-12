import { resolveSolDomain } from './name-service';
import { getTwitterRegistry } from '@solana/spl-name-service';
import { clusterApiUrl, Connection } from '@solana/web3.js';

  const connection = new Connection(clusterApiUrl('mainnet-beta'));

let handle = 'metasal.sol'

    if (handle.startsWith('@')) {
      // This is a twitter handle
      try {
        const twitter = await getTwitterRegistry(connection, handle.slice(1));
        tokens[0] = twitter.owner.toString();
      } catch {
        console.error('Failed to parse twitter handle: ', handle);
      }
    } else if (handle.endsWith('.sol')) {
      // This is .sol domain name
      try {
        const domain = await resolveSolDomain(
          connection,
          handle.slice(0, handle.length - 4)
        );
        tokens[0] = domain.toString();
      } catch {
        console.error('Failed to parse domain name: ', handle);
      }
    } else {
      // Do nothing
      continue;
    }
  }

  // Remove duplicates
  if (options.duplicates) {
    const seen = new Set();
    input = input.filter(item => {
        let k = item[0];
        return seen.has(k) ? false : seen.add(k);
    })
  }

  let output = '';
  input.forEach(line => {
    output += `${line[0]}, ${line[1]}\n`;
  });

  console.log((output.trim());
};
