// deno-lint-ignore-file

if (!globalThis.Deno) {
  const fs = await import("fs");
  globalThis.Deno = {};
  globalThis.Deno.open = function openFile(path): any {
    const file = fs.readFileSync(path);
    return {
      rid: {
        file,
        pointer: 0,
      },
    };
  };

  globalThis.Deno.read = function read(rid: any, buffer: Uint8Array): any {
    const pointer = rid.pointer;
    if (pointer >= rid.file.length) return null;
    buffer.forEach((_, i, arr) => {
      rid.pointer += rid.file[i + pointer] ? 1 : 0;
      arr[i] = rid.file[i + pointer] ?? 0;
    });
    return rid.pointer - pointer;
  };

  globalThis.Deno.close = () => void 0;
}
