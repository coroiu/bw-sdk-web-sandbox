import { LogLevel, type RawBitwardenClient } from "@bitwarden/sdk-wasm";

export async function createSdkClient(
  // ...args: ConstructorParameters<typeof BitwardenClient>
): Promise<RawBitwardenClient> {
  // const settings_json = Convert.clientSettingsToJson({
  //   apiUrl: env.getApiUrl(),
  //   identityUrl: env.getIdentityUrl(),
  //   deviceType: this.toDevice(this.platformUtilsService.getDevice()),
  //   userAgent: this.userAgent ?? navigator.userAgent,
  // });

  const module = await import("@bitwarden/sdk-wasm");
  return Promise.resolve(new module.RawBitwardenClient("{}", LogLevel.Debug));
}
