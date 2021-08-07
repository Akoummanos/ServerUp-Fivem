fx_version 'cerulean'
games { 'rdr3', 'gta5' }

author 'Akoummanos'
description 'Server up webhook! Made by Akoummanos with nodejs!'
version '1.0.0'

-- What to run
client_scripts {
    'npm i discord-webhook-node',
    'node index.js'
    
}
server_script 'index.js'


