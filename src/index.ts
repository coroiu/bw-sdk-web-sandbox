import { createSdkClient } from './sdk';

async function main() {
    const client = await createSdkClient();
    console.log(client);
}

main().then(() => console.log("Main done")).catch(console.error);
