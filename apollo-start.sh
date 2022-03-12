if [ -d "apollo" ] 
then
    echo "Directory apollo exists." 
    cd apollo
else
    echo "Error: Directory apollo does not exists."
    mkdir apollo && cd apollo && git init && git pull https://github.com/apollographql/fullstack-tutorial.git
fi
cd final/server 
npm install
nohup npm start &

end=$((SECONDS+240))

while [ $SECONDS -lt $end ]; do
    ping -c1 -W1 -q 127.0.0.1 &>/dev/null
    status=$( echo $? )
    if [[ $status == 0 ]] ; then
        sleep 2
        exit
    fi
done
