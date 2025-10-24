import { Composition } from "remotion";
import {
  HeavensVault,
  getHeavensVaultMetadata,
  heavensVaultSchema,
} from "./projects/heavensvault/HeavensVault";

import {
  FaithsCheckbook,
  getFaithsCheckbookMetadata,
  faithsCheckbookSchema,
} from "./projects/faithscheckbook/FaithsCheckbook";

import {
  MannaDaily,
  getMannaDailyMetadata,
  mannaDailySchema,
} from "./projects/mannadaily/MannaDaily";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="heavensvault"
        component={HeavensVault}
        calculateMetadata={getHeavensVaultMetadata}
        schema={heavensVaultSchema}
        durationInFrames={1500}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="faithscheckbook"
        component={FaithsCheckbook}
        calculateMetadata={getFaithsCheckbookMetadata}
        schema={faithsCheckbookSchema}
        durationInFrames={1500}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="mannadaily"
        component={MannaDaily}
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
