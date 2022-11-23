# similar comment aggregation

1. Prepare directory with `mkdir -p dump`
2. Run `./fetch-comment-logs.sh <your mongodb url>`
    - your dump file will be available at `dump/commentLogs.json`
3. Run `npx ts-node --transpileOnly aggregate.ts` to run aggregation
    - if you are running Deno, then it would be `deno run -A aggregate.ts`