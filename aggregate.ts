import "./deno-compat.ts";
import { CommentLog } from "./comment.type.ts";

const file = await Deno.open("./dump/commentLogs.json", {
  read: true,
});

const lines = new Array<string>();

const aggregations: Record<string, CommentLog & { count: number }> = {};

function processLine(line: string): void {
  try {
    const obj: CommentLog = JSON.parse(line);
    const commentKey = `${obj.comment?.contentId}:${obj.comment?.message}`;
    aggregations[commentKey] = aggregations[commentKey] ??
      {
        ...obj,
        count: 0,
      };
    aggregations[commentKey].count += 1;
  } catch (err) {
    console.trace(err);
  }
  return;
}

for (
  const buf = new Uint8Array(2048);
  await Deno.read(file.rid, buf);
  buf.forEach((_, i, arr) => arr[i] = 0)
) {
  const bufString = String.fromCharCode(...buf);
  const split = bufString.split("\n");

  while (split.length > 1) {
    lines.push(split.shift()!);
    const line = lines.join("");
    processLine(line);
    lines.length = 0;
  }
  lines.push(split.shift()!);
}

Deno.close(file.rid);

const duplicateComments = Object.entries(aggregations).filter(([_, value]) =>
  value?.count > 1
);

console.dir(duplicateComments, { depth: Infinity });
