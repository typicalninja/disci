
/**
 * Names of the headers sent in a normal discord request
 */
export enum DiscordVerificationHeaders {
    Signature = "x-signature-ed25519",
    TimeStamp = "x-signature-timestamp",
}

export const DummyVerificationHeaders = {
    [DiscordVerificationHeaders.Signature]: '@DISCI/FORGE_sig_{id}',
    [DiscordVerificationHeaders.TimeStamp]: `@DISCI/FORGE_TIME_${Date.now()}`
}
