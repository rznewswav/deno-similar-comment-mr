# similar comment aggregation

1. Use node version >= 18 or deno version >= 1.25.1
2. Prepare directory with `mkdir -p dump`
3. Run `./fetch-comment-logs.sh <your mongodb url>`
    - your dump file will be available at `dump/commentLogs.json`
4. Run `npx ts-node --transpileOnly aggregate.ts` to run aggregation
    - if you are running Deno, then it would be `deno run -A aggregate.ts`