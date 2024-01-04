// Implement the launch sequence function here and export it as the default export.
import { loadPayload } from "./core/load";
import { NFSAT } from "./payload/satellites";
import { FISHSAT } from "./payload/satellites";

loadPayload(NFSAT);
loadPayload(FISHSAT);
