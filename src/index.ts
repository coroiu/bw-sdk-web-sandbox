import { createSdkClient } from './sdk';

async function main() {
  const client = await createSdkClient();

  const totpSecret = "JBSWY3DPEHPK3PXP";
  const totpResult = await client.vault().generate_totp(totpSecret);

  console.log(totpResult);
}

main().then(() => console.log("Main done")).catch(console.error);
