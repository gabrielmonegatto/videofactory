// src/Root.tsx

import { Composition } from "remotion";
import {
  HeavensVault,
  getHeavensVaultMetadata,
  heavensVaultSchema,
} from "./projects/heavensvault/heavensvault"; // <-- 'h' minúsculo

import {
  FaithsCheckbook,
  getFaithsCheckbookMetadata,
  faithsCheckbookSchema,
} from "./projects/faithscheckbook/faithscheckbook"; // <-- 'f' minúsculo

import {
  MannaDaily,
  getMannaDailyMetadata,
  mannaDailySchema,
} from "./projects/mannadaily/mannadaily"; // <-- 'm' minúsculo

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="heavensvault"
        component={HeavensVault} // <-- Isso agora vai funcionar
        calculateMetadata={getHeavensVaultMetadata}
        schema={heavensVaultSchema}
        durationInFrames={1500}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="faithscheckbook"
        component={FaithsCheckbook} // <-- Isso agora vai funcionar
        calculateMetadata={getFaithsCheckbookMetadata}
        schema={faithsCheckbookSchema}
        durationInFrames={1500}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="mannadaily"
        component={MannaDaily} // <-- Isso agora vai funcionar
        calculateMetadata={getMannaDailyMetadata}
        schema={mannaDailySchema}
        durationInFrames={1500}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
