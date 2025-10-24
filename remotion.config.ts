import { Config } from "remotion";

Config.Rendering.setImageFormat("jpeg");
Config.Output.setCodec("h264");
Config.Output.setCrf(17);
Config.Rendering.setConcurrency(2);
Config.Puppeteer.setBrowserExecutable("/usr/bin/google-chrome");
