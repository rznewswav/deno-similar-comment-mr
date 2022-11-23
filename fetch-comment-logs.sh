if [ -z "$1" ]
then
    echo "Run $0 <mongodb string>"
    echo "eg. $0 mongodb://localhost:27017/comment-svc"
else
    mongoexport $1 --collection commentLogs > dump/commentLogs.json
    echo ""
    echo "File dumped at dump/commentLogs.json"
fi