import { definePreparserSetup } from "@slidev/types";

const divider = "/";

export default definePreparserSetup(() => {
  return {
    name: "titles",
    transformRawLines(lines: string[]) {
      for (const i in lines) {
        if (lines[i].startsWith("# ")) {
          const line = lines[i];

          if (line.includes(divider)) {
            let [title, subtitle] = line.split(divider);

            if (subtitle.startsWith(" ")) {
              subtitle = subtitle.substr(1, subtitle.length - 1);
            }

            if (title.endsWith(" ")) {
              title = title.slice(0, -1);
            }

            lines[i] = `${title} / **${subtitle}**`;
          } else {
            let value = lines[i].slice(2);

            if (value.endsWith(" ")) {
              value = value.slice(0, -1);
            }

            lines[i] = `# **${value}**`;
          }
        }
      }
    },
  };
});
