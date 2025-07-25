import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'


global.owner = [
  ['573133374132', '💖💝 Y⃟o⃟ S⃟o⃟y⃟ Y⃟o⃟ 💝 💖 ', true],
  ['524571061982', 'admin op', true],
]


global.mods = []
global.prems = []

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '2.2.0'
global.nameqr = 'YuriBotMD'
global.namebot ='DEMONIO'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

global.packname = 'DEMONIO'
global.namebot = 'DEMONIO'
global.author = 'DEMONIO'


global.namecanal = 'toca aca'
global.canal = 'https://whatsapp.com/channel/0029VbAmMiM96H4KgBHZUn1z'
global.idcanal = '120363399729727124@newsletter'

global.ch = {
ch1: '120363399729727124@newsletter',
}

global.multiplier = 69 
global.maxwarn = '2'


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
