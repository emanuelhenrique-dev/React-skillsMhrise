import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

const skills = [
  {
    id: 0,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Attack Boost 攻撃',
    description: 'Increases attack power.',
    level: '7',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325457'
  },
  {
    id: 1,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Agitator 挑戦者',
    description:
      'Increases attack power and affinity when large monsters become enraged.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325557'
  },
  {
    id: 2,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Peak Performance フルチャージ',
    description: '	Increases attack when your health is full.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325499'
  },
  {
    id: 3,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Resentment 逆恨み',
    description:
      'Increases attack when you have recoverable damage (the red portion of your health gauge).',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325485'
  },
  {
    id: 4,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Resuscitate 死中に活',
    description:
      'Increases attack power when you are suffering from an abnormal status.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325484'
  },
  {
    id: 5,
    color: 'pink',
    colorBr: 'rosa',
    name: 'Critical Eye 見切り',
    description: 'Increases affinity.',
    level: '7',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325540'
  },
  {
    id: 6,
    color: 'pink',
    colorBr: 'rosa',
    name: 'Critical Boost 超会心',
    description: 'Increases the damage of critical hits.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/326442'
  },
  {
    id: 7,
    color: 'pink',
    colorBr: 'rosa',
    name: 'Weakness Exploit 弱点特効',
    description:
      'Increases the affinity of attacks that exploit a monster weak spot.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325464'
  },
  {
    id: 8,
    color: 'pink',
    colorBr: 'rosa',
    name: 'Latent Power 力の解放',
    description:
      'Temporarily increases affinity and reduces stamina depletion when certain conditions are met.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325513'
  },
  {
    id: 9,
    color: 'pink',
    colorBr: 'rosa',
    name: 'Maximum Might 渾身',
    description:
      'Increases affinity if stamina is kept full for a period of time.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325508'
  },
  {
    id: 10,
    color: 'darkblue',
    colorBr: 'azulescuro',
    name: 'Critical Element 会心撃【属性',
    description:
      'Increases elemental damage (fire, water, thunder, ice, dragon) when landing critical hits.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325541'
  },
  {
    id: 11,
    color: 'white',
    colorBr: 'branco',
    name: 'Master Touch 達人芸',
    description:
      'Prevents your weapon from losing sharpness during critical hits.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/329497'
  },
  {
    id: 12,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Fire Attack 火属性攻撃強化',
    description:
      'Increases fire element attack power. (Elemental attack power has a maximum limit.)',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325531'
  },
  {
    id: 13,
    color: 'skyblue',
    colorBr: 'azulceu',
    name: 'Water Attack 水属性攻撃強化',
    description:
      'Increases water element attack power. (Elemental attack power has a maximum limit.)',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325466'
  },
  {
    id: 14,
    color: 'lightblue',
    colorBr: 'azulclaro',
    name: 'Ice Attack 氷属性攻撃強化',
    description:
      'Increases ice element attack power. (Elemental attack power has a maximum limit.)',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325516'
  },
  {
    id: 15,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Thunder Attack 雷属性攻撃強化',
    description:
      'Increases thunder element attack power. (Elemental attack power has a maximum limit.)',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325470'
  },
  {
    id: 16,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Dragon Attack 龍属性攻撃強化',
    description:
      'Increases dragon element attack power. (Elemental attack power has a maximum limit.)',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325536'
  },
  {
    id: 17,
    color: 'purple',
    colorBr: 'roxo',
    name: 'Poison Attack 毒属性強化',
    description:
      'Increases the rate of poison buildup. (Poison buildup has a maximum limit.)',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325497'
  },
  {
    id: 18,
    color: 'amber',
    colorBr: 'ambar creme',
    name: 'Paralysis Attack 麻痺属性強化',
    description:
      'Increases the rate of paralysis buildup. (Paralysis buildup has a maximum limit.)',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325502'
  },
  {
    id: 19,
    color: 'lightblue',
    colorBr: 'azulclaro',
    name: 'Sleep Attack 睡眠属性強化',
    description:
      'Increases the rate of sleep buildup. (Sleep buildup has a maximum limit.)',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325483'
  },
  {
    id: 20,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Blast Attack 爆破属性強化',
    description:
      'Increases the rate of blast buildup. (Blast buildup has a maximum limit.)',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325553'
  },
  {
    id: 21,
    color: 'darkblue',
    colorBr: 'azulescuro',
    name: 'Handicraft 匠',
    description:
      'Extends the weapon sharpness gauge. However, it will not increase the gauge past its maximum.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325521'
  },
  {
    id: 22,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Razor Sharp 業物',
    description: 'Prevents your weapon from losing sharpness.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325490'
  },
  {
    id: 23,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Spare Shot 弾丸節約',
    description:
      'Bow and bowgun shots have a chance not to expend coatings or ammo.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325494'
  },
  {
    id: 24,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Protective Polish 剛刃研磨',
    description:
      'Weapon sharpness does not decrease for a set time after sharpening.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325494'
  },
  {
    id: 25,
    color: 'white',
    colorBr: 'branco',
    name: 'Minds Eye 心眼',
    description:
      'Your attacks are deflected less and deal more damage to hard targets.	',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325507'
  },
  {
    id: 26,
    color: 'white',
    colorBr: 'branco',
    name: 'Ballistics 弾導強化',
    description:
      'Extends the range in which ammo and arrows have maximum power.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/329500'
  },
  {
    id: 27,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Bludgeoner 鈍器使い',
    description: 'Increases attack power when your weapon sharpness is low.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325550'
  },
  {
    id: 28,
    color: 'green',
    colorBr: 'verde',
    name: 'Bow Charge Plus 弓溜め段階解放',
    description: 'Increases max bow charge level by one.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/327046'
  },
  {
    id: 29,
    color: 'white',
    colorBr: 'branco',
    name: 'Focus 集中',
    description:
      'Increases the fill rate for weapons with gauges and the charge rate for weapons with charge attacks.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325528'
  },
  {
    id: 30,
    color: 'brown',
    colorBr: 'marrom',
    name: 'Power Prolonger 強化持続',
    description:
      'Long swords, dual blades, insect glaives, switch axes, and charge blades stay powered up longer.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325495'
  },
  {
    id: 31,
    color: 'amber',
    colorBr: 'ambar creme',
    name: 'Marathon Runner ランナー',
    description:
      'Slows down stamina depletion for actions which continuously drain stamina (such as dashing).',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325510'
  },
  {
    id: 32,
    color: 'amber',
    colorBr: 'ambar creme',
    name: 'Constitution 体術',
    description:
      'Reduces stamina depletion when evading, blocking, or doing certain other actions.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325544'
  },
  {
    id: 33,
    color: 'amber',
    colorBr: 'ambar creme',
    name: 'Stamina Surge スタミナ急速回復',
    description: 'Speeds up stamina recovery.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325475'
  },
  {
    id: 34,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Guard ガード性能',
    description: 'Reduces knockbacks and stamina depletion when guarding.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325523'
  },
  {
    id: 35,
    color: 'white',
    colorBr: 'branco',
    name: 'Guard Up ガード強化',
    description: 'Allows you to guard against ordinarily unblockable attacks.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325522'
  },
  {
    id: 36,
    color: 'purple',
    colorBr: 'roxo',
    name: 'Offensive Guard 攻めの守勢',
    description:
      'Temporarily increases attack power after executing a perfectly-timed guard.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325503'
  },
  {
    id: 37,
    color: 'pink',
    colorBr: 'rosa',
    name: 'Critical Draw 抜刀術【技】',
    description:
      'Increases affinity for a short time after performing a draw attack. (Does not include Silkbind attacks.)',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325542'
  },
  {
    id: 38,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Punishing Draw 抜刀術【力】',
    description:
      'Adds a stun effect to draw attacks and slightly increases attack power. (Does not include Silkbind attacks.)',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325493'
  },
  {
    id: 39,
    color: 'brown',
    colorBr: 'marrom',
    name: 'Quick Sheathe 納刀術',
    description: 'Speeds up weapon sheathing.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325492'
  },
  {
    id: 40,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Slugger KO術',
    description: 'Makes it easier to stun monsters.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325474'
  },
  {
    id: 41,
    color: 'darkblue',
    colorBr: 'azulescuro',
    name: 'Stamina Thief スタミナ奪取',
    description: 'Increases certain attacks ability to exhaust monsters.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325474'
  },
  {
    id: 42,
    color: 'pink',
    colorBr: 'rosa',
    name: 'Affinity Sliding 滑走強化',
    description: 'Sliding increases your affinity for a short time.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325558'
  },
  {
    id: 43,
    color: 'green',
    colorBr: 'verde',
    name: 'Horn Maestro 笛吹き名人',
    description: 'Increases overall performance speed and shockwave damage.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325519'
  },
  {
    id: 44,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Artillery 砲術',
    description:
      'Strengthens explosive attacks like shells, Wyverns Fire, charge blade phial attacks, and Sticky Ammo.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325555'
  },
  {
    id: 45,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Load Shells 砲弾装填',
    description:
      'Improves reloading, and increases the gunlances shell capacity and charge blades phial capacity.',
    level: '2',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325511'
  },
  {
    id: 46,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Special Ammo Boost 特殊射撃強化',
    description:
      'Increases the power of bowgun special ammo and Dragon Piercer.',
    level: '2',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325479'
  },
  {
    id: 47,
    color: 'white',
    colorBr: 'branco',
    name: 'Normal/Rapid Up 通常弾・連射矢強化',
    description:
      'Increases the attack power of Normal Ammo and Rapid-type arrows.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325504'
  },
  {
    id: 48,
    color: 'lightblue',
    colorBr: 'azulclaro',
    name: 'Pierce Up 貫通弾・貫通矢強化',
    description:
      'Increases the attack power of Piercing Ammo and Piercing-type arrows.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325498'
  },
  {
    id: 49,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Spread Up 散弾・拡散矢強化',
    description:
      '	Increases the attack power of Spread Ammo and Spread- type arrows',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325476'
  },
  {
    id: 50,
    color: 'green',
    colorBr: 'verde',
    name: 'Ammo Up 装填拡張',
    description:
      'Increases bowgun loading capacity. (There is a cap to loading capacity.)',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325556'
  },
  {
    id: 51,
    color: 'white',
    colorBr: 'branco',
    name: 'Reload Speed 装填速度',
    description: 'Increases bowgun reloading and bow coating loading speed.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325486'
  },
  {
    id: 52,
    color: 'brown',
    colorBr: 'marrom',
    name: 'Recoil Down 反動軽減',
    description: 'Reduces recoil when firing bowgun ammo.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325489'
  },
  {
    id: 53,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Steadiness ブレ抑制',
    description: 'Suppresses the deviation of bowgun shots.',
    level: '2',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325472'
  },
  {
    id: 54,
    color: 'white',
    colorBr: 'branco',
    name: 'Rapid Fire Up 速射強化',
    description: 'Improves light bowgun rapid fire.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/326472'
  },
  {
    id: 55,
    color: 'amber',
    colorBr: 'ambar creme',
    name: 'Defense Boost 防御',
    description:
      'Increases defense. Resistances will also improve as the level increases.',
    level: '7',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325539'
  },
  {
    id: 56,
    color: 'white',
    colorBr: 'branco',
    name: 'Divine Blessing 精霊の加護',
    description: 'Has a predetermined chance of reducing the damage you take.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325537'
  },
  {
    id: 57,
    color: 'green',
    colorBr: 'verde',
    name: 'Recovery Up 体力回復量UP',
    description: 'Increases the amount recovered when restoring health.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325487'
  },
  {
    id: 58,
    color: 'green',
    colorBr: 'verde',
    name: 'Recovery Speed 回復速度',
    description:
      'Speeds healing of recoverable damage (the red portion of the health gauge).',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325488'
  },
  {
    id: 59,
    color: 'amber',
    colorBr: 'ambar creme',
    name: 'Speed Eating 早食い',
    description: 'Increases meat-eating and item-consumption speed.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325478'
  },
  {
    id: 60,
    color: 'white',
    colorBr: 'branco',
    name: 'Earplugs 耳栓',
    description: 'Grants protection from large monsters roars.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325534'
  },
  {
    id: 61,
    color: 'white',
    colorBr: 'branco',
    name: 'Windproof 風圧耐性',
    description: 'Grants protection against wind pressure.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325461'
  },
  {
    id: 62,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Tremor Resistance 耐震',
    description: 'Grants protection against ground tremors.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325468'
  },
  {
    id: 63,
    color: 'white',
    colorBr: 'branco',
    name: 'Bubbly Dance 泡沫の舞',
    description:
      'Reduces bubbleblight and grants increased evasion when afflicted.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325546'
  },
  {
    id: 64,
    color: 'lightblue',
    colorBr: 'azulclaro',
    name: 'Evade Window 回避性能',
    description: 'Extends the invulnerability period when evading.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325532'
  },
  {
    id: 65,
    color: 'lightblue',
    colorBr: 'azulclaro',
    name: 'Evade Extender 回避距離UP',
    description: 'Increases evade distance.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325533'
  },
  {
    id: 66,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Fire Resistance 火耐性',
    description:
      'Increases fire resistance. Also improves defense at higher levels.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325530'
  },
  {
    id: 67,
    color: 'skyblue',
    colorBr: 'azulceu',
    name: 'Water Resistance 水耐性',
    description:
      'Increases water resistance. Also improves defense at higher levels.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325465'
  },
  {
    id: 68,
    color: 'lightblue',
    colorBr: 'azulclaro',
    name: 'Ice Resistance 氷耐性',
    description:
      'Increases ice resistance. Also improves defense at higher levels.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/326299'
  },
  {
    id: 69,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Thunder Resistance 雷耐性',
    description:
      'Increases thunder resistance. Also improves defense at higher levels.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325469'
  },
  {
    id: 70,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Dragon Resistance 龍耐性',
    description:
      'Increases dragon resistance. Also improves defense at higher levels.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325535'
  },
  {
    id: 71,
    color: 'darkblue',
    colorBr: 'azulescuro',
    name: 'Blight Resistance 属性やられ耐性',
    description: 'Grants protection against all elemental blights.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325551'
  },
  {
    id: 72,
    color: 'purple',
    colorBr: 'roxo',
    name: 'Poison Resistance 毒耐性',
    description: 'Reduces damage while poisoned.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325496'
  },
  {
    id: 73,
    color: 'amber',
    colorBr: 'ambar creme',
    name: 'Paralysis Resistance 麻痺耐性',
    description: 'Reduces the duration of paralysis.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325501'
  },
  {
    id: 74,
    color: 'lightblue',
    colorBr: 'azulclaro',
    name: 'Sleep Resistance 睡眠耐性',
    description: 'Reduces the duration of sleep.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325482'
  },
  {
    id: 75,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Stun Resistance 気絶耐性',
    description: 'Reduces stun duration.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325473'
  },
  {
    id: 76,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Muck Resistance 泥雪耐性',
    description:
      'Reduces impairments to mobility while stuck in monster muck or deep snow.',
    level: '2',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325506'
  },
  {
    id: 77,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Blast Resistance 爆破やられ耐性',
    description: 'Grants protection against blastblight.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325552'
  },
  {
    id: 78,
    color: 'green',
    colorBr: 'verde',
    name: 'Botanist 植生学',
    description:
      'Increases the quantity of herbs and other consumable items you gather.',
    level: '4',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325547'
  },
  {
    id: 79,
    color: 'brown',
    colorBr: 'marrom',
    name: 'Geologist 地質学',
    description: 'Increases the number of times you can use a gathering point.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325525'
  },
  {
    id: 80,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Partbreaker 破壊王',
    description: 'Makes it easier to break or sever parts of monsters.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325500'
  },
  {
    id: 81,
    color: 'pink',
    colorBr: 'rosa',
    name: 'Capture Master 捕獲名人',
    description:
      'High chance of increased capture rewards. (No effect when joining mid-quest.)',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/326592'
  },
  {
    id: 82,
    color: 'green',
    colorBr: 'verde',
    name: 'Carving Master 剥ぎ取り名人',
    description:
      'Lets you carve one additional time. (No effect when joining mid-quest.)',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/329794'
  },
  {
    id: 83,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Good Luck 幸運',
    description:
      'Lets you carve one additional time. (No effect when joining mid-quest.)',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325524'
  },
  {
    id: 84,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Speed Sharpening 砥石使用高速化',
    description: 'Speeds up weapon sharpening when using a whetstone.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325477'
  },
  {
    id: 85,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Bombardier ボマー',
    description: 'Increases the damage of explosive items.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325548'
  },
  {
    id: 86,
    color: 'purple',
    colorBr: 'roxo',
    name: 'Mushroomancer キノコ大好き',
    description:
      'Lets you digest mushrooms that would otherwise be inedible and gain their advantageous effects.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325505'
  },
  {
    id: 87,
    color: 'brown',
    colorBr: 'marrom',
    name: 'Item Prolonger アイテム使用強化',
    description: 'Extends the duration of some item effects.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325515'
  },
  {
    id: 88,
    color: 'white',
    colorBr: 'branco',
    name: 'Wide-Range 広域化',
    description:
      'Allows the effects of certain items to also affect nearby allies.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325463'
  },
  {
    id: 89,
    color: 'brown',
    colorBr: 'marrom',
    name: 'Free Meal 満足感',
    description:
      'Gives you a predetermined chance of consuming a food or drink item for free.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325526'
  },
  {
    id: 90,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Heroics 火事場力',
    description:
      'Increases attack power and defense when health drops to 35% or lower.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325520'
  },
  {
    id: 91,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Fortify 不屈',
    description:
      'Increases your attack and defense when you fall in battle. (Disabled for some quests. Can be activated twice.)',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325527'
  },
  {
    id: 92,
    color: 'grey',
    colorBr: 'cinza preparo',
    name: 'Flinch Free ひるみ軽減',
    description: 'Prevents knockbacks and other reactions to small damage.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325529'
  },
  {
    id: 93,
    color: 'skyblue',
    colorBr: 'azulceu',
    name: 'Jump Master ジャンプ鉄人',
    description: 'Prevents attacks from knocking you back during a jump.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325514'
  },
  {
    id: 94,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Carving Pro 剥ぎ取り鉄人',
    description: 'Prevents knockback from attacks while carving.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325545'
  },
  {
    id: 95,
    color: 'amber',
    colorBr: 'ambar creme',
    name: 'Hunger Resistance 腹減り耐性',
    description: 'Reduces maximum stamina depletion over time.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325518'
  },
  {
    id: 96,
    color: 'lightblue',
    colorBr: 'azulclaro',
    name: 'Leap of Faith 飛び込み',
    description:
      'Allows you to do an emergency evade when facing towards large monsters, and extends the evasion distance.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325512'
  },
  {
    id: 97,
    color: 'purple',
    colorBr: 'roxo',
    name: 'Diversion 陽動',
    description: 'Increases the attention drawn when attacking a monster.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325538'
  },
  {
    id: 98,
    color: 'purple',
    colorBr: 'roxo',
    name: 'Chameleos Blessing 霞皮の恩恵',
    description: 'Gain the power of the elder dragon Chameleos.',
    level: '4',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/329499'
  },
  {
    id: 99,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Kushala Blessing 鋼殻の恩恵',
    description: 'Gain the power of the elder dragon Kushala Daora.',
    level: '4',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/329498'
  },
  {
    id: 100,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Teostra Blessing 炎鱗の恩恵',
    description: 'Gain the power of the elder dragon Teostra.',
    level: '4',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/329496'
  },
  {
    id: 101,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Dragonheart 龍気活性',
    description:
      'Draconic energy fills you after losing a certain amount of health. Weapons lose all non-dragon effects.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/332515'
  },
  {
    id: 102,
    color: 'lightblue',
    colorBr: 'azulclaro',
    name: 'Wirebug Whisperer 翔蟲使い',
    description: 'Improves your handling of Wirebugs.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325460'
  },
  {
    id: 103,
    color: 'green',
    colorBr: 'verde',
    name: 'Wall Runner 壁面移動',
    description: 'Reduces stamina consumption when running on walls.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325467'
  },
  {
    id: 104,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Counterstrike 逆襲',
    description: 'Temporarily increases attack power after being knocked back.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325543'
  },
  {
    id: 105,
    color: 'skyblue',
    colorBr: 'azulceu',
    name: 'Rapid Morph 高速変形',
    description:
      'Increases switch speed and power for switch axes and charge blades.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325491'
  },
  {
    id: 106,
    color: 'purple',
    colorBr: 'roxo',
    name: 'Hellfire Cloak 鬼火纏',
    description:
      'Grants hellfire resistance and confers explosive hellfire power to your attacks after fulfilling certain conditions.',
    level: '4',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325517'
  },
  {
    id: 107,
    color: 'lightblue',
    colorBr: 'azulclaro',
    name: 'Wind Alignment 風紋の一致',
    description: 'Gain the power of the elder dragon Wind Serpent Ibushi.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325462'
  },
  {
    id: 108,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Thunder Alignment 雷紋の一致',
    description: 'Gain the power of the elder dragon Thunder Serpent Narwa.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325471'
  },
  {
    id: 109,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Stormsoul 風雷合一',
    description:
      'Strengthens thunder and dragon power and improves skills of the same elements.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/332849'
  },
  {
    id: 110,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Blood Rite 血氣',
    description:
      'A proportion of damage dealt is converted to health when striking a broken monster part.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381745'
  },
  {
    id: 111,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Dereliction 伏魔響命',
    description:
      'Qurio will drain health, but also bolster your attacks. Multiple Qurio further bolster attacks and let you recover health when performing a Switch Skill Swap.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381744'
  },
  {
    id: 112,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Furious 激昂',
    description:
      'Using the Red Scroll builds your fury while fighting monsters. Swapping to the Blue Scroll when your fury is full gives you infinite stamina temporarily.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381743'
  },
  {
    id: 113,
    color: 'purple',
    colorBr: 'roxo cota',
    name: 'Mail of Hellfire 業鎧【修羅】',
    description:
      'Decreases defense but increases attack. Exact changes to stats depends on Switch Skill Swap Scroll that is being used.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/382307'
  },
  {
    id: 114,
    color: 'purple',
    colorBr: 'roxo',
    name: 'Coalescence 災禍転福',
    description:
      'Temporarily enhances attacks after recovering from blights or abnormal status.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381746'
  },
  {
    id: 115,
    color: 'purple',
    colorBr: 'roxo',
    name: 'Bloodlust 狂竜症【蝕】',
    description:
      'The effects of the Frenzy virus change. Health is gradually reduced, but you gain a variety of effects. Frenzy virus occurs regularly when in combat.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381747'
  },
  {
    id: 116,
    color: 'amber',
    colorBr: 'ambar creme',
    name: 'Defiance 顕如盤石',
    description: 'Increases defense when large monsters become enraged.',
    level: '5',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/384990'
  },
  {
    id: 117,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Sneak Attack 闇討ち',
    description:
      'Increases damage to large monsters when attacks hit them from behind.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/384988'
  },
  {
    id: 118,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Adrenaline Rush 巧撃',
    description:
      'Perform a perfectly-timed evade just as a monster attacks for a temporary attack boost.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/384989'
  },
  {
    id: 119,
    color: 'amber',
    colorBr: 'ambar creme',
    name: 'Embolden 煽衛',
    description:
      'When targeted by a monster, that monster becomes more likely to become enraged but your own defense is increased.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/391784'
  },
  {
    id: 120,
    color: 'green',
    colorBr: 'verde',
    name: 'Redirection 合気',
    description:
      'Perform a perfectly-timed Switch Skill Swap just as a monster attacks to reduce the damage and negate damage reactions.',
    level: '2',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381748'
  },
  {
    id: 121,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Spiribirds Call 供応',
    description:
      'Receive the effects of a random Spiribird at fixed intervals. (Certain quests only)',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381749'
  },
  {
    id: 122,
    color: 'darkblue',
    colorBr: 'azulescuro',
    name: 'Charge Master チャージマスター',
    description:
      'When a charged attack hits a monster, the element and status buildup of the charged attack increases.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381750'
  },
  {
    id: 123,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Foray 攻勢',
    description:
      'Increases attack power and affinity when attacking a large monster affected by poison, paralysis, or an elemental blight.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381751'
  },
  {
    id: 124,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Tune-Up チューンアップ',
    description: '	Increases the stats of custom mods attached to bowguns.',
    level: '2',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381752'
  },
  {
    id: 125,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Grinder (S) 研磨術【鋭】',
    description:
      'When recovering sharpness, grants a boost to sharpness properties based on the number of levels recovered.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381753'
  },
  {
    id: 126,
    color: 'yellow',
    colorBr: 'amarelo',
    name: 'Bladescale Hone 刃鱗磨き',
    description:
      'Dodge rolling to evade an attack with your weapon drawn will recover sharpness, refill bowgun ammo, or give Close-range Coatings a temporary boost.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381754'
  },
  {
    id: 127,
    color: 'green',
    colorBr: 'verde',
    name: 'Wall Runner (Boost) 壁面移動【翔】',
    description: 'Wirebug Gauge recovers faster while wall running.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381755'
  },
  {
    id: 128,
    color: 'darkblue',
    colorBr: 'azulescuro',
    name: 'Element Exploit 弱点特効【属性】',
    description:
      'Increases elemental damage when attacking body parts upon which the element are highly effective.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/384991'
  },
  {
    id: 129,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Burst 連撃',
    description:
      'Continuously landing hits gradually increases attack and elemental attack. (The amount of increase depends on the weapon.)',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381756'
  },
  {
    id: 130,
    color: 'white',
    colorBr: 'branco',
    name: 'Guts 根性',
    description:
      'Prevents fainting one time only when damage taken exceeds a certain amount of your remaining health.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/384992'
  },
  {
    id: 131,
    color: 'green',
    colorBr: 'verde',
    name: 'Quick Breath 疾之息吹',
    description:
      'You can remove some statuses or slow their effects by performing a Switch Skill Swap. Health recovers when a status is removed.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/381742'
  },
  {
    id: 132,
    color: 'purple',
    colorBr: 'roxo',
    name: 'Status Trigger 状態異常確定蓄積',
    description:
      'Perform a perfectly-timed evade just as a monster attacks to trigger abnormal status buildup on hit.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/384993'
  },
  {
    id: 133,
    color: 'white',
    colorBr: 'branco',
    name: 'Intrepid Heart 剛心',
    description:
      'After filling the gauge by continuously landing attacks, negates damage reactions and reduces damage taken from a single attack that would knock you back.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/391775'
  },
  {
    id: 134,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Buildup Boost 蓄積時攻撃強化',
    description:
      'Increases attack power when you land attacks that build poison, paralysis, sleep, blast, or exhaust. (Exhaust - ammo/phials/coatings only)',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/391783'
  },
  {
    id: 135,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Berserk 狂化',
    description:
      'Switch to the Blue Swap Scroll and all vitality will change to red gauge and start decreasing. As long as you have red you cannot faint.',
    level: '2',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/398154'
  },
  {
    id: 136,
    color: 'green',
    colorBr: 'verde',
    name: 'Wind Mantle 風纏',
    description:
      'Using Silkbind attacks boosts Wirebug Gauge recovery. Landing continuous attacks increases the effect. Wears off when you sheathe your weapon.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/398157'
  },
  {
    id: 137,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Powder Mantle 粉塵纏',
    description:
      'Continuously attacking a large monster will cause powder to form around you. The color and effects of the powder will change over time.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/398156'
  },
  {
    id: 138,
    color: 'white',
    colorBr: 'branco',
    name: 'Frostcraft 冰気錬成',
    description:
      'An aura of frost builds when your weapon is sheathed, raising attack. The effect decreases with each melee hit or shot/arrow fired.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/404066'
  },
  {
    id: 139,
    color: 'orange',
    colorBr: 'laranja',
    name: 'Dragon Conversion 龍気変換',
    description:
      'When using the Red Swap Scroll, all elemental resistance is set to 0 and converted into elemental attack. The Blue Swap Scroll raises elemental resistance.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/404067'
  },
  {
    id: 140,
    color: 'white',
    colorBr: 'branco',
    name: 'Heaven-Sent 天衣無崩',
    description:
      'Activates when not taking damage for a while during combat with a large monster. The effect is lost when you are knocked back or stray too far away from the monster.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/410105'
  },
  {
    id: 141,
    color: 'green',
    colorBr: 'verde',
    name: 'Frenzied Bloodlust 狂竜症【翔】',
    description:
      'Temporarily gain an additional Wirebug when overcoming the Frenzy. The effect duration decreases drastically when your weapon is sheathed.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/410103'
  },
  {
    id: 142,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Strife 奮闘',
    description:
      'Increases elemental attack and affinity in proportion to the length of your red health gauge.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/398155'
  },
  {
    id: 143,
    color: 'grey',
    colorBr: 'cinza',
    name: 'Shock Absorber 緩衝',
    description:
      'Disables damage reactions when you hit a friend or when a friend hits you. (Does not apply during certain status ailments.)',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/410100'
  },
  {
    id: 144,
    color: 'skyblue',
    colorBr: 'azulceu',
    name: 'Master Mounter 乗り名人',
    description: 'Improves your Wyvern Riding skills.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/325509'
  },
  {
    id: 145,
    color: 'darkorange',
    colorBr: 'laranjaescuro vermelho red',
    name: 'Blood Awakening 血氣覚醒',
    description:
      'Gradually bolsters your attacks for a certain period of time, depending on how much health you regain when landing attacks.',
    level: '3',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/414966'
  },
  {
    id: 146,
    color: 'white',
    colorBr: 'branco',
    name: 'Inspiration 激励',
    description:
      'Adds an extra attack increase bonus for a short while when activating effects that affect friends within a certain target area.',
    level: '1',
    link: 'https://game8.co/games/Monster-Hunter-Rise/archives/411768'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = skills;
  }

  nameSearch() {
    const INPUT_SEARCH = document.getElementById('search-input');
    const LIST_SKILLS = document.getElementById('skills');

    let word = INPUT_SEARCH.value.toLowerCase();

    let list = LIST_SKILLS.getElementsByTagName('tr');

    skills.forEach((skill) => {
      let skillName = skill.name.toLowerCase();
      let colorName = skill.color.toLowerCase();
      let colorBra = skill.colorBr.toLowerCase();
      let level = skill.level.toLowerCase();
      if (
        skillName.includes(word) ||
        colorName.includes(word) ||
        colorBra.includes(word) ||
        level.includes(word)
      ) {
        console.log(skillName);
        list[skill.id].style.display = '';
      } else {
        list[skill.id].style.display = 'none';
      }
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Skills Monster hunter Rise</h1>
        <div className="filter">
          <div className="search">
            <p>Pesquisar:</p>
            <input id="search-input" type="text" onChange={this.nameSearch} />
          </div>
        </div>

        <Table striped bordered hover variant="dark">
          <thead id="head-table">
            <tr>
              <th>#id</th>
              <th>Color</th>
              <th>Skill Name</th>
              <th>Description</th>
              <th>Max level</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody id="skills">
            {this.state.map((skill) => (
              <tr>
                <td>{skill.id}</td>
                <td>
                  <img
                    src={`./logo-skill/${skill.color}_skill.png`}
                    alt={skill.color}
                  />
                </td>
                <td id="name-skill">{skill.name}</td>
                <td>{skill.description}</td>
                <td>{skill.level}</td>
                <td>
                  <a target="_blank" href={skill.link}>
                    Game8
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
