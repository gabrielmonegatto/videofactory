// remotion.config.ts
import { Config } from "@remotion/cli/config"; // <-- A LINHA CORRETA
import { cpus } from "os";

// ⚙️ REMOTION 4.0 - CONFIGURAÇÃO CORRETA (Formato de Objeto)
const config: Config = {
  // 🎥 Qualidade e formato de vídeo
  imageFormat: "jpeg",
  codec: "h264",
  crf: 18,

  // ⚡ Performance
  concurrency: Math.min(cpus().length, 8), 
  overwrite: true,
  outDir: "out",

  // 🧠 Compatibilidade e logs
  chromiumOpenGlRenderer: "angle",
  logLevel: "info",
};

// export obrigatório
export default config;
