let suggestions = [
    "Anti-Mage",
    "Axe",
    "Bane",
    "Bloodseeker",
    "Crystal Maiden",
    "Drow Ranger",
    "Earthshaker",
    "Juggernaut",
    "Mirana",
    "Morphling",
    "Shadow Fiend",
    "Phantom Lancer",
    "Puck",
    "Pudge",
    "Razor",
    "Sand King",
    "Storm Spirit",
    "Sven",
    "Tiny",
    "Vengeful Spirit",
    "Windranger",
    "Zeus",
    "Kunkka",
    "Lina",
    "Lion",
    "Shadow Shaman",
    "Slardar",
    "Tidehunter",
    "Witch Doctor",
    "Lich",
    "Riki",
    "Enigma",
    "Tinker",
    "Sniper",
    "Necrophos",
    "Warlock",
    "Beastmaster",
    "Queen of Pain",
    "Venomancer",
    "Faceless Void",
    "Wraith King",
    "Death Prophet",
    "Phantom Assassin",
    "Pugna",
    "Templar Assassin",
    "Viper",
    "Luna",
    "Dragon Knight",
    "Dazzle",
    "Clockwerk",
    "Leshrac",
    "Nature's Prophet",
    "Lifestealer",
    "Dark Seer",
    "Clinkz",
    "Omniknight",
    "Enchantress",
    "Huskar",
    "Night Stalker",
    "Broodmother",
    "Bounty Hunter",
    "Weaver",
    "Jakiro",
    "Batrider",
    "Chen",
    "Spectre",
    "Ancient Apparition",
    "Doom",
    "Ursa",
    "Spirit Breaker",
    "Gyrocopter",
    "Alchemist",
    "Invoker",
    "Silencer",
    "Outworld Devourer",
    "Lycan",
    "Brewmaster",
    "Shadow Demon",
    "Lone Druid",
    "Chaos Knight",
    "Meepo",
    "Treant Protector",
    "Ogre Magi",
    "Undying",
    "Rubick",
    "Disruptor",
    "Nyx Assassin",
    "Naga Siren",
    "Keeper of the Light",
    "Io",
    "Visage",
    "Slark",
    "Medusa",
    "Troll Warlord",
    "Centaur Warrunner",
    "Magnus",
    "Timbersaw",
    "Bristleback",
    "Tusk",
    "Skywrath Mage",
    "Abaddon",
    "Elder Titan",
    "Legion Commander",
    "Techies",
    "Ember Spirit",
    "Earth Spirit",
    "Underlord",
    "Terrorblade",
    "Phoenix",
    "Oracle",
    "Winter Wyvern",
    "Arc Warden",
    "Monkey King",
    "Dark Willow",
    "Pangolier",
    "Grimstroke",
    "Void Spirit",
    "Snapfire",
    "Mars",
];

function getHero(i) {
    return suggestions[i];
}


function getHeroAttribute(hero) {
    if (hero == "Anti-Mage") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Axe") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Bane") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Bloodseeker") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Crystal Maiden") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Drow Ranger") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Earthshaker") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Juggernaut") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Mirana") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Morphling") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Shadow Fiend") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Phantom Lancer") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Puck") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Pudge") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Razor") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Sand King") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Storm Spirit") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Sven") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Tiny") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Vengeful Spirit") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Windranger") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Zeus") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Kunkka") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Lina") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Lion") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Shadow Shaman") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Slardar") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Tidehunter") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Witch Doctor") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Lich") {
        return  "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Riki") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Enigma") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Tinker") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Sniper") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Necrophos") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Warlock") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Beastmaster") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Queen of Pain") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Venomancer") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Faceless Void") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Wraith King") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Death Prophet") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Phantom Assassin") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Pugna") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Templar Assassin") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Viper") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Luna") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Dragon Knight") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Dazzle") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Clockwerk") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Leshrac") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Nature's Prophet") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Lifestealer") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Dark Seer") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Clinkz") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Omniknight") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Enchantress") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Huskar") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Night Stalker") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Broodmother") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Bounty Hunter") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Weaver") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Jakiro") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Batrider") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Chen") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Spectre") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Ancient Apparition") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Doom") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Ursa") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Spirit Breaker") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Gyrocopter") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Alchemist") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Invoker") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Silencer") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Outworld Devourer") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Brewmaster") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Shadow Demon") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Lycan") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Lone Druid") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Chaos Knight") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Meepo") {
        return  "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Treant Protector") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Ogre Magi") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Undying") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Rubick") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Disruptor") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Nyx Assassin") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Naga Siren") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Keeper of the Light") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Io") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Visage") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Slark") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Medusa") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Troll Warlord") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Centaur Warrunner") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Magnus") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Timbersaw") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Bristleback") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Tusk") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Skywrath Mage") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Abaddon") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Elder Titan") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Legion Commander") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Techies") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Ember Spirit") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Earth Spirit") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Underlord") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Terrorblade") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Phoenix") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Oracle") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Winter Wyvern") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Arc Warden") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Monkey King") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Dark Willow") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Pangolier") {
        return "ressources/images/heroes/agility_attribute_symbol.png";
    }
    if (hero == "Grimstroke") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Void Spirit") {
        return "ressources/images/heroes/intelligence_attribute_symbol.png";
    }
    if (hero == "Snapfire") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
    if (hero == "Mars") {
        return "ressources/images/heroes/strength_attribute_symbol.png";
    }
}

function getHeroImage(hero) {
    if (hero == "Anti-Mage") {
        return "ressources/images/heroes/antimage_sb.png";
    }
    if (hero == "Axe") {
        return "ressources/images/heroes/axe_sb.png";
    }
    if (hero == "Bane") {
        return "ressources/images/heroes/bane_sb.png";
    }
    if (hero == "Bloodseeker") {
        return "ressources/images/heroes/bloodseeker_sb.png";
    }
    if (hero == "Crystal Maiden") {
        return "ressources/images/heroes/crystal_maiden_sb.png";
    }
    if (hero == "Drow Ranger") {
        return "ressources/images/heroes/drow_ranger_sb.png";
    }
    if (hero == "Earthshaker") {
        return "ressources/images/heroes/earthshaker_sb.png";
    }
    if (hero == "Juggernaut") {
        return "ressources/images/heroes/juggernaut_sb.png";
    }
    if (hero == "Mirana") {
        return "ressources/images/heroes/mirana_sb.png";
    }
    if (hero == "Morphling") {
        return "ressources/images/heroes/morphling_sb.png";
    }
    if (hero == "Shadow Fiend") {
        return "ressources/images/heroes/nevermore_sb.png";
    }
    if (hero == "Phantom Lancer") {
        return "ressources/images/heroes/phantom_lancer_sb.png";
    }
    if (hero == "Puck") {
        return "ressources/images/heroes/puck_sb.png";
    }
    if (hero == "Pudge") {
        return "ressources/images/heroes/pudge_sb.png";
    }
    if (hero == "Razor") {
        return "ressources/images/heroes/razor_sb.png";
    }
    if (hero == "Sand King") {
        return "ressources/images/heroes/sand_king_sb.png";
    }
    if (hero == "Storm Spirit") {
        return "ressources/images/heroes/storm_spirit_sb.png";
    }
    if (hero == "Sven") {
        return "ressources/images/heroes/sven_sb.png";
    }
    if (hero == "Tiny") {
        return "ressources/images/heroes/tiny_sb.png";
    }
    if (hero == "Vengeful Spirit") {
        return "ressources/images/heroes/vengefulspirit_sb.png";
    }
    if (hero == "Windranger") {
        return "ressources/images/heroes/windrunner_sb.png";
    }
    if (hero == "Zeus") {
        return "ressources/images/heroes/zuus_sb.png";
    }
    if (hero == "Kunkka") {
        return "ressources/images/heroes/kunkka_sb.png";
    }
    if (hero == "Lina") {
        return "ressources/images/heroes/lina_sb.png";
    }
    if (hero == "Lion") {
        return "ressources/images/heroes/lion_sb.png";
    }
    if (hero == "Shadow Shaman") {
        return "ressources/images/heroes/shadow_shaman_sb.png";
    }
    if (hero == "Slardar") {
        return "ressources/images/heroes/slardar_sb.png";
    }
    if (hero == "Tidehunter") {
        return "ressources/images/heroes/tidehunter_sb.png";
    }
    if (hero == "Witch Doctor") {
        return "ressources/images/heroes/witch_doctor_sb.png";
    }
    if (hero == "Lich") {
        return  "ressources/images/heroes/lich_sb.png";
    }
    if (hero == "Riki") {
        return "ressources/images/heroes/riki_sb.png";
    }
    if (hero == "Enigma") {
        return "ressources/images/heroes/enigma_sb.png";
    }
    if (hero == "Tinker") {
        return "ressources/images/heroes/tinker_sb.png";
    }
    if (hero == "Sniper") {
        return "ressources/images/heroes/sniper_sb.png";
    }
    if (hero == "Necrophos") {
        return "ressources/images/heroes/necrolyte_sb.png";
    }
    if (hero == "Warlock") {
        return "ressources/images/heroes/warlock_sb.png";
    }
    if (hero == "Beastmaster") {
        return "ressources/images/heroes/beastmaster_sb.png";
    }
    if (hero == "Queen of Pain") {
        return "ressources/images/heroes/queenofpain_sb.png";
    }
    if (hero == "Venomancer") {
        return "ressources/images/heroes/venomancer_sb.png";
    }
    if (hero == "Faceless Void") {
        return "ressources/images/heroes/faceless_void_sb.png";
    }
    if (hero == "Wraith King") {
        return "ressources/images/heroes/skeleton_king_sb.png";
    }
    if (hero == "Death Prophet") {
        return "ressources/images/heroes/death_prophet_sb.png";
    }
    if (hero == "Phantom Assassin") {
        return "ressources/images/heroes/phantom_assassin_sb.png";
    }
    if (hero == "Pugna") {
        return "ressources/images/heroes/pugna_sb.png";
    }
    if (hero == "Templar Assassin") {
        return "ressources/images/heroes/templar_assassin_sb.png";
    }
    if (hero == "Viper") {
        return "ressources/images/heroes/viper_sb.png";
    }
    if (hero == "Luna") {
        return "ressources/images/heroes/luna_sb.png";
    }
    if (hero == "Dragon Knight") {
        return "ressources/images/heroes/dragon_knight_sb.png";
    }
    if (hero == "Dazzle") {
        return "ressources/images/heroes/dazzle_sb.png";
    }
    if (hero == "Clockwerk") {
        return "ressources/images/heroes/rattletrap_sb.png";
    }
    if (hero == "Leshrac") {
        return "ressources/images/heroes/leshrac_sb.png";
    }
    if (hero == "Nature's Prophet") {
        return "ressources/images/heroes/furion_sb.png";
    }
    if (hero == "Lifestealer") {
        return "ressources/images/heroes/life_stealer_sb.png";
    }
    if (hero == "Dark Seer") {
        return "ressources/images/heroes/dark_seer_sb.png";
    }
    if (hero == "Clinkz") {
        return "ressources/images/heroes/clinkz_sb.png";
    }
    if (hero == "Omniknight") {
        return "ressources/images/heroes/omniknight_sb.png";
    }
    if (hero == "Enchantress") {
        return "ressources/images/heroes/enchantress_sb.png";
    }
    if (hero == "Huskar") {
        return "ressources/images/heroes/huskar_sb.png";
    }
    if (hero == "Night Stalker") {
        return "ressources/images/heroes/night_stalker_sb.png";
    }
    if (hero == "Broodmother") {
        return "ressources/images/heroes/broodmother_sb.png";
    }
    if (hero == "Bounty Hunter") {
        return "ressources/images/heroes/bounty_hunter_sb.png";
    }
    if (hero == "Weaver") {
        return "ressources/images/heroes/weaver_sb.png";
    }
    if (hero == "Jakiro") {
        return "ressources/images/heroes/jakiro_sb.png";
    }
    if (hero == "Batrider") {
        return "ressources/images/heroes/batrider_sb.png";
    }
    if (hero == "Chen") {
        return "ressources/images/heroes/chen_sb.png";
    }
    if (hero == "Spectre") {
        return "ressources/images/heroes/spectre_sb.png";
    }
    if (hero == "Ancient Apparition") {
        return "ressources/images/heroes/ancient_apparition_sb.png";
    }
    if (hero == "Doom") {
        return "ressources/images/heroes/doom_bringer_sb.png";
    }
    if (hero == "Ursa") {
        return "ressources/images/heroes/ursa_sb.png";
    }
    if (hero == "Spirit Breaker") {
        return "ressources/images/heroes/spirit_breaker_sb.png";
    }
    if (hero == "Gyrocopter") {
        return "ressources/images/heroes/gyrocopter_sb.png";
    }
    if (hero == "Alchemist") {
        return "ressources/images/heroes/alchemist_sb.png";
    }
    if (hero == "Invoker") {
        return "ressources/images/heroes/invoker_sb.png";
    }
    if (hero == "Silencer") {
        return "ressources/images/heroes/silencer_sb.png";
    }
    if (hero == "Outworld Devourer") {
        return "ressources/images/heroes/obsidian_destroyer_sb.png";
    }
    if (hero == "Brewmaster") {
        return "ressources/images/heroes/brewmaster_sb.png";
    }
    if (hero == "Shadow Demon") {
        return "ressources/images/heroes/shadow_demon_sb.png";
    }
    if (hero == "Lycan") {
        return "ressources/images/heroes/lycan_sb.png";
    }
    if (hero == "Lone Druid") {
        return "ressources/images/heroes/lone_druid_sb.png";
    }
    if (hero == "Chaos Knight") {
        return "ressources/images/heroes/chaos_knight_sb.png";
    }
    if (hero == "Meepo") {
        return  "ressources/images/heroes/meepo_sb.png";
    }
    if (hero == "Treant Protector") {
        return "ressources/images/heroes/treant_sb.png";
    }
    if (hero == "Ogre Magi") {
        return "ressources/images/heroes/ogre_magi_sb.png";
    }
    if (hero == "Undying") {
        return "ressources/images/heroes/undying_sb.png";
    }
    if (hero == "Rubick") {
        return "ressources/images/heroes/rubick_sb.png";
    }
    if (hero == "Disruptor") {
        return "ressources/images/heroes/disruptor_sb.png";
    }
    if (hero == "Nyx Assassin") {
        return "ressources/images/heroes/nyx_assassin_sb.png";
    }
    if (hero == "Naga Siren") {
        return "ressources/images/heroes/naga_siren_sb.png";
    }
    if (hero == "Keeper of the Light") {
        return "ressources/images/heroes/keeper_of_the_light_sb.png";
    }
    if (hero == "Io") {
        return "ressources/images/heroes/wisp_sb.png";
    }
    if (hero == "Visage") {
        return "ressources/images/heroes/visage_sb.png";
    }
    if (hero == "Slark") {
        return "ressources/images/heroes/slark_sb.png";
    }
    if (hero == "Medusa") {
        return "ressources/images/heroes/medusa_sb.png";
    }
    if (hero == "Troll Warlord") {
        return "ressources/images/heroes/troll_warlord_sb.png";
    }
    if (hero == "Centaur Warrunner") {
        return "ressources/images/heroes/centaur_sb.png";
    }
    if (hero == "Magnus") {
        return "ressources/images/heroes/magnataur_sb.png";
    }
    if (hero == "Timbersaw") {
        return "ressources/images/heroes/shredder_sb.png";
    }
    if (hero == "Bristleback") {
        return "ressources/images/heroes/bristleback_sb.png";
    }
    if (hero == "Tusk") {
        return "ressources/images/heroes/tusk_sb.png";
    }
    if (hero == "Skywrath Mage") {
        return "ressources/images/heroes/skywrath_mage_sb.png";
    }
    if (hero == "Abaddon") {
        return "ressources/images/heroes/abaddon_sb.png";
    }
    if (hero == "Elder Titan") {
        return "ressources/images/heroes/elder_titan_sb.png";
    }
    if (hero == "Legion Commander") {
        return "ressources/images/heroes/legion_commander_sb.png";
    }
    if (hero == "Techies") {
        return "ressources/images/heroes/techies_sb.png";
    }
    if (hero == "Ember Spirit") {
        return "ressources/images/heroes/ember_spirit_sb.png";
    }
    if (hero == "Earth Spirit") {
        return "ressources/images/heroes/earth_spirit_sb.png";
    }
    if (hero == "Underlord") {
        return "ressources/images/heroes/abyssal_underlord_sb.png";
    }
    if (hero == "Terrorblade") {
        return "ressources/images/heroes/terrorblade_sb.png";
    }
    if (hero == "Phoenix") {
        return "ressources/images/heroes/phoenix_sb.png";
    }
    if (hero == "Oracle") {
        return "ressources/images/heroes/oracle_sb.png";
    }
    if (hero == "Winter Wyvern") {
        return "ressources/images/heroes/winter_wyvern_sb.png";
    }
    if (hero == "Arc Warden") {
        return "ressources/images/heroes/arc_warden_sb.png";
    }
    if (hero == "Monkey King") {
        return "ressources/images/heroes/monkey_king_sb.png";
    }
    if (hero == "Dark Willow") {
        return "ressources/images/heroes/dark_willow_sb.png";
    }
    if (hero == "Pangolier") {
        return "ressources/images/heroes/pangolier_sb.png";
    }
    if (hero == "Grimstroke") {
        return "ressources/images/heroes/grimstroke_sb.png";
    }
    if (hero == "Void Spirit") {
        return "ressources/images/heroes/void_spirit_sb.png";
    }
    if (hero == "Snapfire") {
        return "ressources/images/heroes/snapfire_sb.png";
    }
    if (hero == "Mars") {
        return "ressources/images/heroes/mars_sb.png";
    }
}