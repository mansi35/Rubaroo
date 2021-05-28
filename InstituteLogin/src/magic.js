import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

export const socialLogins = ["facebook", "google"];

export const magic = new Magic("pk_live_17A4B401DCDB4720", {
  extensions: [new OAuthExtension()],
});
